import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Descriptions, message, Space, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../style/style.css'

interface PurchaseData {
    id: number,
    penyadapId: number,
    purchaserId: number,
    ph: number,
    sugarLevel: number,
    volume: number,
    lat: number,
    lng: number,
    amount: number,
    penyadap: any,
    purchaser: any
}

function DetailPurchase() {
    useEffect(() => {
        document.title = `Sabang | Detail Purchase ${purchaseId}`
    }, [])
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const { purchaseId } = useParams<Record<string, string>>();
    const [loading, setLoading] = useState(true)
    const [purchaseData, setPurchaseData] = useState<PurchaseData>(
        {
            id: 0,
            penyadapId: 0,
            purchaserId: 0,
            ph: 0,
            sugarLevel: 0,
            volume: 0,
            lat: 0,
            lng: 0,
            amount: 0,
            penyadap: '',
            purchaser: ''
        }
    )
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get(`/purchases/${purchaseId}`, config)
        .then((response) => {
            setPurchaseData(response.data)
        }).catch((error) => {
            console.error('Error Ocured: ',error)
            message.error('Error Ocured')
        }).finally(() => {
            setLoading(false)
        })
    },[purchaseId])
    const back = () => {
        navigate('/Purchase')
    }
    const edit = () => {
        navigate(`/Purchase/EditPurchase/${purchaseId}`)
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail Purchase - {purchaseId}</Typography.Title>
            <div className="desc-container">
                <Spin spinning={loading}>
                    <Descriptions title='Purchase Detail' layout='vertical' className='form-container'>
                        <Descriptions.Item label='ID'>{purchaseData.id}</Descriptions.Item>
                        <Descriptions.Item label='Tapper'>{purchaseData.penyadapId} - {purchaseData.penyadap.name}</Descriptions.Item>
                        <Descriptions.Item label='Purchaser'>{purchaseData.purchaserId} - {purchaseData.purchaser.name}</Descriptions.Item>
                        <Descriptions.Item label='Sugar Level'>{purchaseData.sugarLevel}</Descriptions.Item>
                        <Descriptions.Item label='Volume(Liter)'>{purchaseData.volume} Liter</Descriptions.Item>
                        <Descriptions.Item label='PH'>{purchaseData.ph}</Descriptions.Item>
                        <Descriptions.Item label='Amount(Rp)'>Rp.{purchaseData.amount}</Descriptions.Item>
                        <Descriptions.Item label='Lat'>{purchaseData.lat}</Descriptions.Item>
                        <Descriptions.Item label='Lng'>{purchaseData.lng}</Descriptions.Item>
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

export default DetailPurchase