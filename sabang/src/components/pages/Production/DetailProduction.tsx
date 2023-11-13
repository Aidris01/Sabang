import { Descriptions, Typography } from 'antd'
import React from 'react'

function DetailProduction() {
  return (
    <div className='content'>
        <Typography.Title level={4}>Detail Produksi</Typography.Title>
        <div className="main-container">
            <Descriptions></Descriptions>
        </div>
    </div>
  )
}

export default DetailProduction