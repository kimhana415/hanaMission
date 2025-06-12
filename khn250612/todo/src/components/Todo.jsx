// Todo.jsx
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import TodoTabs from './TodoTabs'


export default function Todo() {
  const [todos, setTodos] = useState([]); // 할 일 목록 저장

  // 삭제하기
  const todoDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 추가하기
  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),      // 고유한 id 생성
      title: text,
      completed: false
    };
    setTodos([newTodo, ...todos]); // 새 할 일을 맨 위에 추가
    console.log("할일추가:", newTodo.title)
  };

  // 처음 실행할때 한번만 가져오기
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, []);


  return (
    <div className='todo'>
      <TodoTabs />
      <TodoList todos={todos} todoDelete={todoDelete} />
      <TodoAdd onAdd={onAdd} />
    </div>
  )
}
