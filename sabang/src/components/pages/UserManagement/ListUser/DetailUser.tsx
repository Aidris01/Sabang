import React, { useEffect, useState } from 'react'
import { Button, Space, Typography, Descriptions, DescriptionsProps } from 'antd'
import '../../style/style.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';

interface UserData {
    name: string,
    nik: string,
    phone: string,
    address: string,
    email: string,
    bankName: string,
    accName: string,
    accNumber: string,
    villageId: string
}

function DetailUser() {
    const token = localStorage.getItem('token')
    const { userId } = useParams<Record<string, string>>();
    const [userData, setUserData] = useState<UserData>(
        {
            name: '',
            nik: '',
            phone: '',
            address: '',
            email: '',
            bankName: '',
            accName: '',
            accNumber: '',
            villageId: ''
        }
    )
    useEffect(() => {
        axios.get(`/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setUserData(response.data)
        }).catch((error) => {
            console.error('Error Occured: ',error)
        })
    }, [userId])
    const navigate = useNavigate()
    const back = () => {
        navigate('/ListUser')
    }
    const edit = () => {
        navigate(`/ListUser/EditUser/${userId}`)
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail User - {userId}</Typography.Title>
            <div className="detail-user">
                <Space>
                    <Button className='back-btn' danger onClick={back}>Back</Button>
                    <Button className='edit-btn' type='primary' onClick={edit}>Edit</Button>
                </Space>
            </div>
        </div>
    )
}

export default DetailUser