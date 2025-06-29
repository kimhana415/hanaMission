import React, { useReducer } from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiResetLeftLine } from "react-icons/ri";

const initState = {
  likes: 0,
  dislikes: 0
};

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'LIKE':
      return {
        ...state, // 안쓰면 다른값도 사라짐
        likes: state.likes + 1
      };

    case 'DISLIKE':
      return {
        ...state,
        dislikes: state.dislikes + 1
      };

    case 'RESET':
      return { likes: 0, dislikes: 0 };
  }
}

export default function Vote({ title }) {
  const [count, dispatch] = useReducer(reducer, initState);
  console.log(count)
  return (
    <div className='item'>
      <div className="title">{title}</div>

      <div className="icon-box">

        <button onClick={() => dispatch({ type: 'LIKE' })}>
          <AiOutlineLike size="24" />
        </button>
        {count.likes}

        <button onClick={() => dispatch({ type: 'DISLIKE' })}>
          <AiOutlineDislike size="24" />
        </button>
        {count.dislikes}

        <button onClick={() => dispatch({ type: 'RESET' })}>
          <RiResetLeftLine size="24" />
        </button>
      </div>
    </div>
  )
}
