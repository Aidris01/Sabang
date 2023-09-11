import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import '../style/style.css'
import backup from '../Profile/user.png'
import { EditOutlined } from '@ant-design/icons'

function Profile() {
  const username = localStorage.getItem('username')
  const email = localStorage.getItem('email')
  const phone = localStorage.getItem('phone')
  const address = localStorage.getItem('address')
  const avatar = localStorage.getItem('avatar')
  return (
    <div className='content'>
      <Typography.Title level={4}>Profile</Typography.Title>
      <div className="profile">
        <Row gutter={24}>
          <Col span={6}>
            <img className='profile-img' style={{ width: 200, margin: 10 }} src={backup} alt={backup} />
          </Col>
          <Col span={16}>
            <Row gutter={24}>
              <Col span={10}>
                <Typography.Title level={4}>Name</Typography.Title>
                <Typography.Text style={{fontSize: 15}}>{username}</Typography.Text>
                <Typography.Title level={4}>Email</Typography.Title>
                <Typography.Text style={{fontSize: 15}}>{email}</Typography.Text>
              </Col>
              <Col span={14}>
                <Typography.Title level={4}>Address</Typography.Title>
                <Typography.Text style={{fontSize: 15}}>{address}</Typography.Text>
                <Typography.Title level={4}>Phone</Typography.Title>
                <Typography.Text style={{fontSize: 15}}>{phone}</Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button className='profile-btn'><EditOutlined /> Edit</Button>
      </div>
    </div>
  )
}

export default Profile