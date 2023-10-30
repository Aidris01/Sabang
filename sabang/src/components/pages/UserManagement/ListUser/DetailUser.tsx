import React, { useEffect, useState } from 'react'
import { Button, Descriptions, message, Space, Spin, Typography } from 'antd'
import '../../style/style.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

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
    useEffect(() => {
        document.title = `Sabang | Detail User ${userId}`
    }, [])
    const token = localStorage.getItem('token')
    const { userId } = useParams<Record<string, string>>();
    const [villageName, setVillageName] = useState('');
    const [loading, setLoading] = useState(true)
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
                setLoading(false)
            }).catch((villageError) => {
                console.error('Error Occurred while fetching village name: ', villageError);
                setLoading(false)
            });
        }).catch((error) => {
            console.error('Error Occurred: ', error);
            message.error('Error Ocured, Please check the console')
            setLoading(false)
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
            <div className="desc-container">
                <Spin spinning={loading}>
                    <Descriptions title='User Detail' layout='vertical' className='form-container'>
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
                </Spin>
                <div className="button-container">
                    <Space>
                        <Button className='edit-btn' type='primary' onClick={edit} icon={<EditOutlined />}>
                            Edit
                        </Button>
                        <Button className='back-btn' danger onClick={back} icon={<CloseOutlined />}>
                            Back
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default DetailUser