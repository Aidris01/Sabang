import { } from 'antd';
import React, { } from 'react'
import user from './img/user.png';
import logout from './img/logout.png';
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/")
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  }
  const username = localStorage.getItem('username');
  return (
    <div className='header'>
      <img className='user-img' src={user} alt="user.jpg" />
      <h5>Welcome, {username}</h5>
      <button className='sign-out-btn' onClick={Logout}>Sign Out</button>
      <img className='logout-img' src={logout} alt='logout.jpg' />
    </div>
  )
}

export default Header