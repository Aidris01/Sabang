import { Button, Dropdown, Modal } from 'antd';
import React, { useState } from 'react'
import user from './img/user.png';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { PoweroffOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

function Header() {
  const navigate = useNavigate();

  const [logoutModalVisible, setLogoutModalVisible] = useState(false)

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  }
  const hideLogoutModal = () => {
    setLogoutModalVisible(false)
  }
  const Logout = () => {
    showLogoutModal()
  }

  const handleLogoutConfirm = () => {
    navigate("/Login")
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('avatar')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
    localStorage.removeItem('address')
  }

  const profile = () => {
    navigate('/Profile')
  }
  const items = [
    {
      key: '1',
      label: (
        <a type='text' onClick={Logout}><PoweroffOutlined style={{ marginRight: 10 }} />Sign Out</a>
      )
    },
    {
      key: '2',
      label: (
        <a type='text' onClick={profile}><UserOutlined style={{ marginRight: 10 }} />Profile</a>
      )
    }
  ]
  const username = localStorage.getItem('username');

  return (
    <div className='header'>
      <img className='user-img' src={user} alt="user.jpg" />
      <h5>Welcome, {username}</h5>
      <Dropdown menu={{ items }}>
        <Button type='link' className='settings-btn'><SettingOutlined />Settings</Button>
      </Dropdown>
      <Modal
        title='Konfirmasi Logout'
        open={logoutModalVisible}
        onOk={handleLogoutConfirm}
        onCancel={hideLogoutModal}
        okText='Ya'
        cancelText='Batal'
      >
        Apakah Anda yakin ingin logout?
      </Modal>
    </div>
  )
}

export default Header