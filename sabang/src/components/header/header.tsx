import { Button, Dropdown } from 'antd';
import React, { } from 'react'
import user from './img/user.png';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { PoweroffOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

function Header() {
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/Login")
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  }
  const profile = () => {
    navigate('/Profile')
  }
  const items = [
    {
      key: '1',
      label: (
        <a type='text' onClick={Logout}><PoweroffOutlined style={{marginRight: 10}} />Sign Out</a>
      )
    },
    {
      key: '2',
      label: (
        <a type='text' onClick={profile}><UserOutlined style={{marginRight: 10}} />Profile</a>
      )
    }
  ]
  const username = localStorage.getItem('username');
  return (
    <div className='header'>
      <img className='user-img' src={user} alt="user.jpg" />
      <h5>Welcome, {username}</h5>
      <Dropdown menu={{items}}>
        <Button className='settings-btn'><SettingOutlined />Settings</Button>
      </Dropdown>
    </div>
  )
}

export default Header