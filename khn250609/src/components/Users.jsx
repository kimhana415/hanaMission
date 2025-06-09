// Users.jsx


import React from 'react'

export default function Users({ user }) {
  // let badge;

  // if (user.badge == true) {
  //   badge = <div className="profile-card__badge">NEW</div>;
  // }

  return (

    <li className="profile-card__item">
      <div className="profile-card__img-box">
        <img className='profile-card__img' src={user.img} alt={user.name} />


        {/* {
          if (user.badg == true) (
            <div className="profile-card__badge">{user.badg}</div>
          )
        }
        Unexpected token 오류남
        > jsx안에서는 if문 사용 불가하고 표현식만 가능
        아래 처럼 && 연산자, 삼항연산자 사용하거나 JSX 밖에서 조건문 사용 */}

        {user.badge == true && (   // &&연산자
          <div className="profile-card__badge">NEW</div>
        )}

        {/* 삼항연산자 */}
        {/* {user.badge ? <div className="profile-card__badge">NEW</div> : null} */}

        {/* {badge} */}
      </div>

      <h2 className='profile-card__name'>{user.name}</h2>
      <p className='profile-card__role'>{user.role}</p>
    </li>

  )
}
