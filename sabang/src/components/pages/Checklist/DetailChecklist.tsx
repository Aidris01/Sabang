import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DetailChecklist() {
    useEffect(() => {
        document.title = 'Sabang | Detail Checklist'
      }, [])
      const navigate = useNavigate()
      const back = () => {
        navigate('/Checklist')
      }
  return (
    <div className='content'>
        <Typography.Title level={4}>Detail Checklist</Typography.Title>
        <div className="main-container"></div>
        <Button className='create-btn' onClick={back} icon={<ArrowLeftOutlined />}>
            Back
        </Button>
    </div>
  )
}

export default DetailChecklist