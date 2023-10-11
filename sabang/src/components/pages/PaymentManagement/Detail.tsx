import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Descriptions, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/style.css'

function Detail() {
  useEffect(() => {
    document.title = 'Sabang | Detail'
  }, [])
  const navigate = useNavigate()
  const back = () => {
    navigate('/StatusPayment')
  }
  return (
    <div className='content'>
        <Typography.Title level={4}>Detail Payment</Typography.Title>
        <div className="main-container">
            <Button className='create-btn' onClick={back} icon={<ArrowLeftOutlined />}>
              Back
            </Button>
            <div className="detail-payment">
              <Descriptions></Descriptions>
            </div>
        </div>
    </div>
  )
}

export default Detail