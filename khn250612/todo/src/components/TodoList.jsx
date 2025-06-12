// TodoList.jsxs

import React from 'react'

// todoDelete 함수는 Todo.jsx에 써야함

export default function TodoList({ todos, todoDelete }) {
  console.log("todos:", todos);
  return (
    <div className='todo__list'>
      {
        todos.map(todo => (
          <div key={todo.id} className='todo__list__item'>
            <label className='todo__list__item__left'>

              <input type="checkbox"
                className='todo__list__item__checkbox'
              // checked={todo.completed}
              />

              <span className='todo__list__item__title'>
                {todo.title}
              </span>

            </label>

            <button onClick={() => todoDelete(todo.id)}
              className='todo__list__item__btn-delete'>
              🗑️
            </button>
          </div>
        ))
      }
    </div>
  )
}
