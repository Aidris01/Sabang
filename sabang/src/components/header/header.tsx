import {} from 'antd';
import React, {} from 'react'
import user from './img/user.png';
import logout from './img/logout.png';
import './header.css';

function Logout() {
  return (
    alert("Logout")
  )
}

function Header() {
  return (
    <div className='header'>
      <img className='user-img' src={user} alt="user.jpg" />
      <h5>Welcome, (Username)</h5>
        <button onClick={Logout}>Sign Out</button>
      <img className='logout-img' src={logout} alt='logout.jpg' />
    </div>
  )
}

export default Header