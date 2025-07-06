import React, { useState } from 'react'

export default function City() {
  const cities = ['서울', '부산', '대전', '광주', '대구',]
  const map = [
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
  ];

  const [input, setInput] = useState('');
  const [connected, setConnected] = useState([]);

  const handleSearch = () => {
    const index = cities.indexOf(input.trim())
    console.log('입력 도시:', input);

    if (index === -1) {
      alert("존재하지 않는 도시입니다");
      setConnected([]);
      return
    }

    const connections = map[index]
      .map((val, i) => (
        val === 1 ? cities[i] : null
      ))
      .filter(Boolean);

    setConnected(connections)
    console.log('연결된 도시:', connections);
  }


  return (
    <div>
      <h3>1. 연결된 정점 출력</h3>
      <div>
        <input
          type='text'
          placeholder='도시 이름 입력'
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>찾기</button>
      </div>

      {
        connected.length > 0 && (
          <div>
            <span>{input}에서 연결된 도시: </span>
            <span>{connected.join(', ')}</span>
          </div>
        )
      }
    </div>
  )
}
