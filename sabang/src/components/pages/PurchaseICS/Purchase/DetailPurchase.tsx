import { Descriptions, Spin, Typography } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../style/style.css'

function DetailPurchase() {
    const { purchaseId } = useParams<Record<string, string>>();
    const [loading, setLoading] = useState(true)
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail Purchase - {purchaseId}</Typography.Title>
            <div className="main-container">
                <Spin>
                    <Descriptions title='Purchase Detail' layout='vertical' className='form-container'>
                        
                    </Descriptions>
                </Spin>
            </div>
        </div>
    )
}

export default DetailPurchase