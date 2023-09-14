import React, { useState } from 'react';
import { Button, Col, Row, Typography, Input } from 'antd';
import '../style/style.css';
import backup from '../Profile/user.png';
import { EditOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';

function Profile() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>('');
  const [editedEmail, setEditedEmail] = useState<string>('');
  const [editedAddress, setEditedAddress] = useState<string>('');
  const [editedPhone, setEditedPhone] = useState<string>('');
  const [newAvatar, setNewAvatar] = useState<File | null>(null);

  const name: string = JSON.parse(localStorage.getItem('profile')??'{}').name ?? '';
  const email: string = JSON.parse(localStorage.getItem('profile')??'{}').email ?? '';
  const phone: string = JSON.parse(localStorage.getItem('profile')??'{}').phone ?? '';
  const address: string = JSON.parse(localStorage.getItem('profile')??'{}').address ?? '';

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
    let profile = JSON.parse(localStorage.getItem('profile')??'{}');
    profile.name = editedName
    profile.email = editedEmail
    profile.address = editedAddress
    profile.phone = editedPhone
    if (newAvatar) {
      const data = new FileReader();
      data.onload = () => {
        const avatarDataUrl = data.result as string;
        profile.avatar = avatarDataUrl;
        
        // Ubah data menjadi bentuk string kembali
        localStorage.setItem('profile', JSON.stringify(profile));
        // Pastikan untuk mengatur isEditing ke false setelah perubahan disimpan
        setIsEditing(false); 

      };
      data.readAsDataURL(newAvatar);
    } else {
      // Jika tidak ada gambar baru yang dipilih, hanya simpan data yang lain
      localStorage.setItem('profile', JSON.stringify(profile));
      setIsEditing(false);
    }
  };

  return (
    <div className='content'>
      <Typography.Title level={4}>Profile</Typography.Title>
      <div className="profile">
        <Row gutter={24}>
          <Col span={6}>
            <img
              className='profile-img'
              style={{ width: 200, margin: 10 }}
              src={
                newAvatar
                  ? URL.createObjectURL(newAvatar)
                  : (JSON.parse(localStorage.getItem('profile')??'{}').avatar ?? backup)
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
                <Button type='primary' htmlType='submit' className='save-cancel-btn' onClick={handleSaveClick}><SaveOutlined /> Save</Button>
                <Button danger className='save-cancel-btn' onClick={handleEditClick}><CloseOutlined /> Cancel</Button>
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