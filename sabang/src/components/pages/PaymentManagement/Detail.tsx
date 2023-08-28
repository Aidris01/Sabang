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
              <Typography.Text>Ph: </Typography.Text><br />
              <Typography.Text>Sugar Level: </Typography.Text><br />
              <Typography.Text>Nira Volume: </Typography.Text><br />
              <Typography.Text>Time: </Typography.Text><br />
              <Typography.Text>Total Price: </Typography.Text><br />
              <Typography.Text>Status Payment: </Typography.Text><br />
            </div>
        </div>
    </div>
  )
}

export default Detail