import React, { useState } from 'react'

export default function Department() {

  const departments = ['컴퓨터공학', '전자공학', '디자인학과', '경영학과', '수학과']
  const relation = [
    [0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1],
    [0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ];
  const [input, setInput] = useState('');
  const [connected, setConnected] = useState([]);

  const handleSearch = () => {
    const index = departments.indexOf(input.trim());
    console.log("입력 학과: ", input);

    if (index === -1) {
      alert("존재하지 않는 학과입니다.")
      setConnected([]);
      return
    }

    const connections = relation[index]
      .map((val, i) => (
        val === 1 ? departments[i] : null
      ))
      .filter(Boolean)

    setConnected(connections)
    console.log("협력중인 학과: ", connections);
  }
  return (
    <div>
      <h3>2. 학과 간 협력 프로그램 연결</h3>
      <div>
        <input
          type='text'
          placeholder='학과 입력'
          onChange={e => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>찾기</button>
      </div>

      {
        connected.length > 0 && (
          <div>
            <span>{input}와 협력중인 학과: </span>
            <span>{connected.join(', ')}</span>
          </div>
        )
      }
    </div>
  )
}
