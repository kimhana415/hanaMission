


import './App.css'
import Users from './components/Users';
function App() {
  // userDate를 다른곳에서도 쓰려면 app 밖에써도 됨
  let userDate = [
    {
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      name: 'James Kim',
      role: '프론트엔드 개발자',
      badge: true
    },
    {
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
      name: 'Anna Young',
      role: '백엔드 개발자',
      badge: false
    },
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      name: 'Bob Yu',
      role: '프론트엔드 개발자',
      badge: false
    }
  ];

  return (
    <>

      <div className="profile-card">
        <ul className="profile-card__items">
          {
            userDate.map((user, index) => (    // { }(중괄호) 쓰면 return이 필요함
              <Users key={index} user={user} />
            ))
          }
        </ul>
      </div>


      {/* <div className="profile-card">
        <ul className="profile-card__items">
          <li className="profile-card__item">
            <div className="profile-card__img-box">
              <img className='profile-card__img'
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
              <div className="profile-card__badge">NEW</div>
            </div>
            <h2 className='profile-card__name'>James Kim</h2>
            <p className='profile-card__role'>프론트엔드 개발자</p>
          </li>

          <li className="profile-card__item">
            <div className="profile-card__img-box">
              <img className='profile-card__img'
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80" />
            </div>
            <h2 className='profile-card__name'>Anna Young</h2>
            <p className='profile-card__role'>백엔드 개발자</p>
          </li>

          <li className="profile-card__item">
            <div className="profile-card__img-box">
              <img className='profile-card__img'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
            </div>
            <h2 className='profile-card__name'>Bob Yu</h2>
            <p className='profile-card__role'>프론트엔드 개발자</p>
          </li>
        </ul>
      </div> */}
    </>
  )
}

export default App
