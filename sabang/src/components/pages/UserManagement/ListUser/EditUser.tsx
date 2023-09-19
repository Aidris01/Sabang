import { message, Typography } from 'antd'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../../../api/axios';

function EditUser() {
    const navigate = useNavigate()
    const { userId } = useParams<Record<string, string>>();
    const [userData, setUserData] = useState<any>(null);
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`users/${userId}`, {
            headers : {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setUserData(response.data)
            message.success('User Updated')
        }).catch((error) => {
            message.error('Error Ocured', error)
        })
    }, [userId])

  return (
    <div className='content'>
        <Typography.Title level={4}>Edit User - {userId}</Typography.Title>
        <div className="edit-user"></div>
    </div>
  )
}

export default EditUser