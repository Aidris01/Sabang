import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Descriptions, message, Space, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';
import '../style/style.css'

interface Factory {
    name: string,
    address: string,
    lat: string,
    lng: string
}

function DetailFactory() {
    useEffect(() => {
        document.title = `Sabang | Detail Factory ${factoryId}`
    }, [])
    const navigate = useNavigate()
    const back = () => {
        navigate('/FactoryManagement')
    }
    const edit = () => {
        navigate(`/FactoryManagement/EditFactory/${factoryId}`)
    }
    const { factoryId } = useParams<Record<string, string>>();
    const token = localStorage.getItem('token')
    const [loading, setLoading] = useState(true)
    const [factoryData, setFactoryData] = useState<Factory>(
        {
            name: '',
            address: '',
            lat: '',
            lng: ''
        }
    )
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get(`/factories/${factoryId}`, config)
            .then((response) => {
                setFactoryData(response.data)
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured')
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail Factory - {factoryId}</Typography.Title>
            <div className="desc-container">
                <Spin spinning={loading}>
                    <Descriptions title='Factory Detail' layout='vertical' className='form-container'>
                        <Descriptions.Item label='Name'>{factoryData.name}</Descriptions.Item>
                        <Descriptions.Item label='Address'>{factoryData.address}</Descriptions.Item>
                        <Descriptions.Item label='Lat'>{factoryData.lat}</Descriptions.Item>
                        <Descriptions.Item label='Long'>{factoryData.lng}</Descriptions.Item>
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

export default DetailFactory