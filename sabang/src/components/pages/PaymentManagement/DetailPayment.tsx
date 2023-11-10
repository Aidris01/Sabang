import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Descriptions, message, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api/axios'
import '../style/style.css'

interface Payment {
  id: number,
  ph: number,
  volume: number,
  sugarLevel: number,
  amount: number,
  paidAt: Date | null,
  timestamp: Date
}

function formatDate(timestamp: Date) {
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, '0');
  const day = String(timestamp.getDate()).padStart(2, '0');
  const hours = String(timestamp.getHours()).padStart(2, '0');
  const minutes = String(timestamp.getMinutes()).padStart(2, '0');
  const seconds = String(timestamp.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function DetailPayment() {
  useEffect(() => {
    document.title = `Sabang | Detail Payment - ${paymentId}`
  }, [])
  const { paymentId } = useParams<Record<string, string>>();
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const back = () => {
    navigate('/StatusPayment')
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Payment>(
    {
      id: 0,
      ph: 0,
      volume: 0,
      sugarLevel: 0,
      amount: 0,
      paidAt: null,
      timestamp: new Date()
    }
  )
  useEffect(() => {
    axios.get(`/purchases/${paymentId}`, config)
      .then((response) => {
        const responseData = response.data;

        const timestamp = new Date(responseData.timestamp);
        const paidAt = responseData.paidAt !== null ? new Date(responseData.paidAt) : null;

        setData({
          id: responseData.id,
          ph: responseData.ph,
          volume: responseData.volume,
          sugarLevel: responseData.sugarLevel,
          amount: responseData.amount,
          paidAt: paidAt,
          timestamp: timestamp
        });
        setLoading(false);
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Data, Please check the console')
      })
  }, [paymentId])

  return (
    <div className='content'>
      <Typography.Title level={4}>Detail Payment - {paymentId}</Typography.Title>
      <div className="main-container">
        <Spin spinning={loading}>
          <Descriptions title='Payment Detail' layout='vertical' className='form-container'>
            <Descriptions.Item label='ID'>{data.id}</Descriptions.Item>
            <Descriptions.Item label='PH'>{data.ph}</Descriptions.Item>
            <Descriptions.Item label='Volume'>{data.volume}</Descriptions.Item>
            <Descriptions.Item label='Sugar Level'>{data.sugarLevel}</Descriptions.Item>
            <Descriptions.Item label='Time'>{formatDate(data.timestamp)}</Descriptions.Item>
            <Descriptions.Item label='Total Price'>Rp.{data.amount}</Descriptions.Item>
            <Descriptions.Item label='Status'>
              {data.paidAt ? 'Paid' : 'Not Paid'}
            </Descriptions.Item>
          </Descriptions>
        </Spin>
        <div className="button-container">
          <Button className='back-btn' onClick={back} icon={<CloseOutlined />}>
            Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DetailPayment;