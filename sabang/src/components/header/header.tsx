import { Button, Dropdown, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import user from './img/user.png';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { PoweroffOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

interface ProfileData {
  name?: string;
  avatar?: string;
}


function Headers() {

  const navigate = useNavigate();
  const [name, setName] = useState<string>('')
  const [avatar, setAvatar] = useState<string>(user);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  useEffect(() => {
    // Gunakan useEffect untuk memantau perubahan data di localStorage
    const profileData: ProfileData = JSON.parse(localStorage.getItem('profile') ?? '{}');
    const avatarData: string = profileData.avatar || user; // Jika avatar tidak ada, gunakan default

    setName(profileData.name || ''); // Mengambil nama dari data localStorage
    setAvatar(avatarData); // Mengambil avatar dari data localStorage atau default
  }, []);

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
        <a type='text' onClick={profile}>
          <UserOutlined style={{ marginRight: 10 }} />Profile</a>
      )
    },
    {
      key: '2',
      label: (
        <a type='text' onClick={Logout} style={{color: 'red'}}>
          <PoweroffOutlined style={{ marginRight: 10 }} />Sign Out</a>
      )
    }
  ]

  return (
    <div className='header'>
      <img className='user-img' src={avatar} />
      <h5>Welcome, {name}</h5>
      <Dropdown className='dropdown' menu={{ items }}>
        <Button type='link' className='settings-btn'><SettingOutlined />Settings</Button>
      </Dropdown>
      <Modal
        title='Konfirmasi Logout'
        open={logoutModalVisible}
        onOk={handleLogoutConfirm}
        onCancel={hideLogoutModal}
        okText='Ya'
        cancelText='Batal'>
        Apakah Anda yakin ingin logout?
      </Modal>
    </div>
  )
}

export default Headers