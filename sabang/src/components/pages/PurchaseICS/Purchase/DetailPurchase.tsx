import { Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom';
import '../../style/style.css'

function DetailPurchase() {
    const { purchaseId } = useParams<Record<string, string>>();
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail Purchase - {purchaseId}</Typography.Title>
            <div className="main-container"></div>
        </div>
    )
}

export default DetailPurchase