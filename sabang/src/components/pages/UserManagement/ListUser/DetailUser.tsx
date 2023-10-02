import React, { useEffect, useState } from 'react'
import { Button, Col, Descriptions, Row, Space, Typography } from 'antd'
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
    villageId: string,
    roles: string[]
}
function DetailUser() {
    const token = localStorage.getItem('token')
    const { userId } = useParams<Record<string, string>>();
    const [villageName, setVillageName] = useState('');
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
            villageId: '',
            roles: []
        }
    )
    useEffect(() => {
        axios.get(`/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setUserData(response.data);
            axios.get(`/villages/${response.data.villageId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((villageResponse) => {
                setVillageName(villageResponse.data.name);
            }).catch((villageError) => {
                console.error('Error Occurred while fetching village name: ', villageError);
            });
        }).catch((error) => {
            console.error('Error Occurred: ', error);
        });
    }, [userId]);
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
                <div className="user-info">
                    <Descriptions title='User Detail' layout='vertical'>
                        <Descriptions.Item label='Name'>{userData.name}</Descriptions.Item>
                        <Descriptions.Item label='NIK'>{userData.nik}</Descriptions.Item>
                        <Descriptions.Item label='Email'>{userData.email}</Descriptions.Item>
                        <Descriptions.Item label='Phone'>{userData.phone}</Descriptions.Item>
                        <Descriptions.Item label='Address'>{userData.address}</Descriptions.Item>
                        <Descriptions.Item label='Village ID'>{villageName}</Descriptions.Item>
                        <Descriptions.Item label='Bank Name'>{userData.bankName}</Descriptions.Item>
                        <Descriptions.Item label='Acc Name'>{userData.accName}</Descriptions.Item>
                        <Descriptions.Item label='Acc Number'>{userData.accNumber}</Descriptions.Item>
                        <Descriptions.Item label='Roles'>{userData.roles}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </div>
    )
}

export default DetailUser