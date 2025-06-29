import React, { useState } from 'react'

export default function Airport() {
  const airports = ['김포', '김해', '제주', '청주', '대구']
  const flightMap = [
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
  ];

  const [input, setInput] = useState('');
  const [connected, setConnected] = useState([]);

  const handleSearch = () => {
    const index = airports.indexOf(input.trim())
    console.log("입력 공항:", input);

    if (index === -1) {
      alert("존재하지 않는 공항입니다.")
      setConnected([]);
      return
    }

    const connections = flightMap[index]
      .map((val, i) => (
        val === 1 ? airports[i] : null
      ))
      .filter(Boolean)
    setConnected(connections)
    console.log("연결 공항:", connections);
  }

  return (
    <div>
      <h3>3. 공항 간 직항 노선 연결</h3>
      <div>
        <input
          type='text'
          placeholder='공항 입력'
          onChange={e => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <button onClick={handleSearch}>찾기</button>
      </div>
      {
        connected.length > 0 && (
          <div>
            <span>{input}에서 직항 가능한 공항: </span>
            <span>{connected.join(', ')}</span>
          </div>
        )
      }

    </div>
  )
}
