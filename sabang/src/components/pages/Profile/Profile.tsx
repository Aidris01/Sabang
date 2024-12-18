import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Typography, Input, message } from 'antd';
import '../style/style.css';
import axios from '../../api/axios';
import backup from '../Profile/user.png';
import { EditOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';

function Profile() {
  useEffect(() => {
    document.title = 'Sabang | Profile'
  }, [])
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>('');
  const [editedEmail, setEditedEmail] = useState<string>('');
  const [editedAddress, setEditedAddress] = useState<string>('');
  const [editedPhone, setEditedPhone] = useState<string>('');
  const [newAvatar, setNewAvatar] = useState<File | null>(null);

  const name: string = JSON.parse(localStorage.getItem('profile') ?? '{}').name ?? '';
  const email: string = JSON.parse(localStorage.getItem('profile') ?? '{}').email ?? '';
  const phone: string = JSON.parse(localStorage.getItem('profile') ?? '{}').phone ?? '';
  const address: string = JSON.parse(localStorage.getItem('profile') ?? '{}').address ?? '';

  const handleEditClick = () => {
    setIsEditing(!isEditing);

    // Set nilai-nilai yang diedit ke nilai-nilai yang sudah ada jika membatalkan edit
    if (!isEditing) {
      setEditedName(name);
      setEditedEmail(email);
      setEditedAddress(address);
      setEditedPhone(phone);
    }
  };

  const handleSaveClick = () => {
    // Ubah data dari bentuk objek ke bentuk string
    const token = localStorage.getItem('token')
    let profile = JSON.parse(localStorage.getItem('profile') ?? '{}');
    const updatedProfile = {
      name: editedName,
      email: editedEmail,
      address: editedAddress,
      phone: editedPhone,
      avatar: profile.avatar
    };
    if (newAvatar) {
      const data = new FileReader();
      data.onload = () => {
        const avatarDataUrl = data.result as string;
        updatedProfile.avatar = avatarDataUrl;

        axios.patch('/auth/profile', updatedProfile, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }).then((response) => {
          console.log(response)
          localStorage.setItem('profile', JSON.stringify(updatedProfile));
          setIsEditing(false);
          setTimeout(() => {
            window.location.reload()
          }, 1000)
          message.success('Editing Success')
        }).catch((error) => {
          message.error('Error Updating Data, Please check the console')
          console.error('Error Ocured: ', error)
        });
      };
      data.readAsDataURL(newAvatar);
    } else {
      axios.patch('/auth/profile', updatedProfile, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then((response) => {
        console.log(response)
        localStorage.setItem('profile', JSON.stringify(updatedProfile));
        message.success('Editing Success')
        setIsEditing(false);
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }).catch((error) => {
        message.error('Error Updating Data, Please check the console')
        console.error('Error Ocured: ', error)
      })
    }
  };

  return (
    <div className='content'>
      <Typography.Title level={4}>Profile</Typography.Title>
      <div className="desc-container">
        <Row gutter={24}>
          <Col span={6}>
            <img
              className='profile-img'
              style={{ width: 200, margin: 10 }}
              src={
                newAvatar
                  ? URL.createObjectURL(newAvatar)
                  : (JSON.parse(localStorage.getItem('profile') ?? '{}').avatar ?? backup)
              }
              />
            {isEditing && (
              <div style={{ margin: 10 }}>
                <Typography.Title level={4}>Profile Picture</Typography.Title>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setNewAvatar(e.target.files?.[0] || null)}
                />
              </div>
            )}
          </Col>
          <Col span={16}>
            {isEditing ? (
              <div>
                <Typography.Title level={4}>Name</Typography.Title>
                <Input
                  style={{ fontSize: 15 }}
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <Typography.Title level={4}>Email</Typography.Title>
                <Input
                  style={{ fontSize: 15 }}
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
                <Typography.Title level={4}>Address</Typography.Title>
                <Input
                  style={{ fontSize: 15 }}
                  value={editedAddress}
                  onChange={(e) => setEditedAddress(e.target.value)}
                />
                <Typography.Title level={4}>Phone</Typography.Title>
                <Input
                  style={{ fontSize: 15 }}
                  value={editedPhone}
                  onChange={(e) => setEditedPhone(e.target.value)}
                />
                <div className="button-container">
                  <Button type='primary' htmlType='submit' className='save-btn' onClick={handleSaveClick}><SaveOutlined />
                    Save
                  </Button>
                  <Button danger className='cancel-btn' onClick={handleEditClick}><CloseOutlined />
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <Row gutter={24}>
                  <Col span={10}>
                    <Typography.Title level={4}>Name</Typography.Title>
                    <Typography.Text style={{ fontSize: 15 }}>{name}</Typography.Text>
                    <Typography.Title level={4}>Email</Typography.Title>
                    <Typography.Text style={{ fontSize: 15 }}>{email}</Typography.Text>
                  </Col>
                  <Col span={14}>
                    <Typography.Title level={4}>Address</Typography.Title>
                    <Typography.Text style={{ fontSize: 15 }}>{address}</Typography.Text>
                    <Typography.Title level={4}>Phone</Typography.Title>
                    <Typography.Text style={{ fontSize: 15 }}>{phone}</Typography.Text>
                  </Col>
                </Row>
                <Button className='profile-btn' onClick={handleEditClick}><EditOutlined /> Edit</Button>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Profile;