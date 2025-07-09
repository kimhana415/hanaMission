// TodoAdd.jsx

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

export default function TodoAdd() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  // add 버튼 클릭 시
  const handleAdd = () => {
    if (inputValue.trim() === '') return;

    dispatch(addTodo(inputValue));
    console.log('추가:', inputValue);
    setInputValue('');
  };

  return (
    <div className="todo__add">
      <input
        type="text"
        className="form-control"
        placeholder="Add Todo"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />

      <button onClick={handleAdd} className="btn btn-warning">
        Add
      </button>
    </div>
  );
}
