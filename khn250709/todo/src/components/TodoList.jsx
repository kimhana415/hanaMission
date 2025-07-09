import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, removeTodo } from '../features/todos/todoSlice';

export default function TodoList() {
  const { todos, isLoading, error } = useSelector(state => state.todos);

  console.log(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>에러 발생: {error}</p>;
  }

  return (
    <div className="todo__list">
      {todos.map(todo => (
        <div key={todo.id} className="todo__list__item">
          <label className="todo__list__item__left">
            <input type="checkbox" className="todo__list__item__checkbox" />

            <span className="todo__list__item__title">{todo.title}</span>
          </label>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="todo__list__item__btn-delete"
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}
