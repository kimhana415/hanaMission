// TodoAdd.jsx

import React, { useState } from 'react'

export default function TodoAdd({ onAdd }) {
  const [inputValue, setInputValue] = useState(''); // 인풋 값 저장

  // add 버튼 클릭 시
  const handleAdd = () => {
    console.log("추가:", inputValue)
    onAdd(inputValue)
    setInputValue("")
  }

  // 타이핑할때마다 실행됨
  const handleChange = (e) => {
    setInputValue(e.target.value); // 입력한 값 저장
  }

  return (
    <div className="todo__add">
      <input type='text'
        className='form-control'
        placeholder='Add Todo'
        value={inputValue}
        onChange={handleChange} // 입력이 바뀔때 마다 상태 업데이트
      />

      <button onClick={handleAdd}
        className='btn btn-warning'>Add</button>
    </div>
  )
}
