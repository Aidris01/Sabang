import React from 'react'
import { Button, Space, Typography } from 'antd'
import '../../style/style.css'
import { useParams } from 'react-router-dom';

function DetailUser() {
    const { userId } = useParams<Record<string, string>>();
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail User - {userId}</Typography.Title>
            <div className="detail-user">
                <Space>
                    <Button className='back-btn' danger>Back</Button>
                    <Button className='edit-btn' type='primary'>Edit</Button>
                </Space>
            </div>
        </div>
    )
}

export default DetailUser