import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Descriptions, message, Space, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';
import '../style/style.css'

interface Warehouse {
    name: string,
    address: string,
    lat: string,
    lng: string
}

function DetailWarehouse() {
    useEffect(() => {
        document.title = `Sabang | Detail Warehouse ${warehouseId}`
    }, [])
    const navigate = useNavigate()
    const back = () => {
        navigate('/WarehouseManagement')
    }
    const edit = () => {
        navigate(`/WarehouseManagement/EditWarehouse/${warehouseId}`)
    }
    const { warehouseId } = useParams<Record<string, string>>();
    const token = localStorage.getItem('token')
    const [loading, setLoading] = useState(true)
    const [warehouse, setWarehouse] = useState<Warehouse>(
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
        axios.get(`/warehouses/${warehouseId}`, config)
            .then((response) => {
                setWarehouse(response.data)
                setLoading(false)
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured')
            })
    }, [])
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail Warehouse - {warehouseId}</Typography.Title>
            <div className="desc-container">
                <Spin spinning={loading}>
                    <Descriptions title='Detail Warehouse' layout='vertical' className='form-container'>
                        <Descriptions.Item label='Name'>{warehouse.name}</Descriptions.Item>
                        <Descriptions.Item label='Address'>{warehouse.address}</Descriptions.Item>
                        <Descriptions.Item label='Lat'>{warehouse.lat}</Descriptions.Item>
                        <Descriptions.Item label='Long'>{warehouse.lng}</Descriptions.Item>
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

export default DetailWarehouse