import React from 'react'
import { Button, Space, Typography } from 'antd'
import '../../style/style.css'
import { useNavigate, useParams } from 'react-router-dom';

function DetailUser() {
    const { userId } = useParams<Record<string, string>>();
    const navigate = useNavigate()
    const back = () => {
        navigate('/ListUser')
    }
    const edit = () => {
        navigate(`/ListUser/EditUser/${userId}`)
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Detail User - {userId}</Typography.Title>
            <div className="detail-user">
                <Space>
                    <Button className='back-btn' danger onClick={back}>Back</Button>
                    <Button className='edit-btn' type='primary' onClick={edit}>Edit</Button>
                </Space>
            </div>
        </div>
    )
}

export default DetailUser