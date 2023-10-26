import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Descriptions, message, Space, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../style/style.css'

interface PurchaseData {
    penyadapId: number,
    purchaserId: number,
    ph: number,
    sugarLevel: number,
    volume: number,
    lat: number,
    lng: number,
    amount: number
}
interface PenyadapName {
    id: number,
    name: string
}

function DetailPurchase() {
    useEffect(() => {
        document.title = `Sabang | Detail Purchase ${purchaseId}`
    }, [])
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const { purchaseId } = useParams<Record<string, string>>();
    const [loading, setLoading] = useState(true)
    const [penyadapName, setPenyadapName] = useState<PenyadapName[]>([])
    const [purchaseData, setPurchaseData] = useState<PurchaseData>(
        {
            penyadapId: 0,
            purchaserId: 0,
            ph: 0,
            sugarLevel: 0,
            volume: 0,
            lat: 0,
            lng: 0,
            amount: 0,
        }
    )
    useEffect(() => {
        axios.get('/users/penyadap', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((dataResponse) => {
            setPenyadapName(dataResponse.data)
        }).catch((dataError) => {
            console.error('Error Ocured: ',dataError)
        })
    },[])
    const getTapperName = (penyadapId: number) => {
        const penyadap = penyadapName.find((penyadap: any) => penyadap.id === penyadapId)
        return penyadap ? penyadap.name : 'Unknown Tapper'
    }
    useEffect(() => {
        axios.get(`/purchases/${purchaseId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setPurchaseData(response.data)
            setLoading(false)
        }).catch((error) => {
            console.error('Error Ocured: ',error)
            message.error('Error Ocured')
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
                        <Descriptions.Item label='Tapper'>{purchaseData.penyadapId} - {getTapperName(purchaseData.penyadapId)}</Descriptions.Item>
                        <Descriptions.Item label='Purchaser'>{purchaseData.purchaserId}</Descriptions.Item>
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