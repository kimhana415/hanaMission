import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchTodos } from './FetchTodos';

export const getTodos = createAsyncThunk(
  'todos/getTodos', //Thunk의 이름(여러 비동기함수를 구별)
  async (_, thunkAPI) => {
    try {
      const resp = await FetchTodos();
      console.log('Thunk 안 API 응답', resp);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.unshift({
        id: Date.now(),
        title: action.payload,
      });
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },

  extraReducers: builder => {
    builder
      // 데이터 요청중..pending -> 로딩중
      .addCase(getTodos.pending, state => {
        state.isLoading = true; // 로딩 시작 표시
        state.error = null; // 이전 에러 초기화
      }) // 비동기 시작됨

      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false; //로딩 끝
        state.todos = action.payload; // 응답 데이터 저장
      }) // 성공함

      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false; //  로딩 끝
        state.error = action.payload; //에러메세지 저장
      }); // 실패함
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
