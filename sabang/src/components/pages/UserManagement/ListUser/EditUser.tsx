import { Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'

function EditUser() {
    const { userId } = useParams<Record<string, string>>();
  return (
    <div className='content'>
        <Typography.Title level={4}>Edit User - {userId}</Typography.Title>
        <div className="edit-user"></div>
    </div>
  )
}

export default EditUser