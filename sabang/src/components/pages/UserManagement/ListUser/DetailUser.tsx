import React from 'react'
import { Typography } from 'antd'
import '../../style/style.css'
import { useParams } from 'react-router-dom';

function DetailUser() {
    const { userId } = useParams<Record<string, string>>();
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail User - {userId}</Typography.Title>
        </div>
    )
}

export default DetailUser