import { Form, message, Typography } from 'antd'
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

    const onFinish = (values: any) => {
        axios.patch(`/users/${userId}`, {
            headers : {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log('User data updated:', response.data);
            navigate('/ListUser')
        }).catch((error) => {
            console.error('Error Ocured: ',error)
        })
    }
    const handleCancel = () => {
        navigate('/ListUser')
    }

    if (!userData) {
        <div>Loading...</div>
    }

  return (
    <div className='content'>
        <Typography.Title level={4}>Edit User - {userId}</Typography.Title>
        <div className="edit-user">
            <Form
            name='EditedUserForm'
            onFinish={onFinish}
            initialValues={userData}
            ></Form>
        </div>
    </div>
  )
}

export default EditUser