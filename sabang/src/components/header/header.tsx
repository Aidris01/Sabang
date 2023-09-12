import { Button, Dropdown, Modal } from 'antd';
import React, { useState } from 'react'
import user from './img/user.png';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { PoweroffOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';


function Header() {

  const navigate = useNavigate();
  const name: string = JSON.parse(localStorage.getItem('profile')??'{}').name ?? '';

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
    localStorage.removeItem('profile')
    localStorage.removeItem('token')
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

  return (
    <div className='header'>
      <img className='user-img' src={JSON.parse(localStorage.getItem('profile')??'{}').avatar ?? user} />
      <h5>Welcome, {name}</h5>
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