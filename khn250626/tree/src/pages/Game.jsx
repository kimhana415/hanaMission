import React from 'react'
import { useState } from 'react';

export default function Game({ tree }) {
  const [currentNode, setCurrentNode] = useState(tree);

  if (!tree) return;

  const options = currentNode.options || [];

  return (
    <div>
      <h3>{currentNode.text}</h3>
      <div>
        {
          options.map((option, i) => (
            <button
              key={i}
              onClick={() => setCurrentNode(option.next)}
            >
              {option.text}
            </button>
          ))
        }
      </div>
    </div>
  )
}
