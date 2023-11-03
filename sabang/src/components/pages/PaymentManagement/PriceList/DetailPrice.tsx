import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Descriptions, message, Space, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../style/style.css'

interface Price {
    id: number,
    sugarLevel: number,
    price: number
}

function DetailPrice() {
    useEffect(() => {
        document.title = `Sabang | Detail Price ${priceId}`
    }, [])
    const navigate = useNavigate()
    const back = () => {
        navigate('/PriceList')
    }
    const edit = () => {
        navigate(`/PriceList/EditPrice/${priceId}`)
    }
    const { priceId } = useParams<Record<string, string>>();
    const [loading, setLoading] = useState(true)
    const token = localStorage.getItem('token')
    const [priceData, setPriceData] = useState<Price>(
        {
            id: 0,
            sugarLevel: 0,
            price: 0
        }
    )
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get(`/price_lists/${priceId}`, config)
            .then((response) => {
                setPriceData(response.data)
                setLoading(false)
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured, Please check the console')
            })
    }, [])
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail Price - {priceId}</Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Descriptions title='Price Detail' layout='vertical' className='form-container'>
                        <Descriptions.Item label='ID'>{priceData.id}</Descriptions.Item>
                        <Descriptions.Item label='Sugar Level'>{priceData.sugarLevel}</Descriptions.Item>
                        <Descriptions.Item label='Price'>{priceData.price}</Descriptions.Item>
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

export default DetailPrice