import { Button, Typography } from 'antd'
import React from 'react'
import '../style/style.css'

function Detail() {
  return (
    <div className='content'>
        <Typography.Title level={4}>Detail Payment</Typography.Title>
        <div className="detail">
            <Button className='create-btn'>Back</Button>
            <div className="detail-payment">
                <p>Ph: </p>
                <p>Sugar Level: </p>
                <p>Nira Volume: </p>
                <p>Time: </p>
                <p>Total Price:</p>
                <p>Status Payment: </p>
            </div>
        </div>
    </div>
  )
}

export default Detail