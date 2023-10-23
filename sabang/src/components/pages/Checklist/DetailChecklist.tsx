import { CloseOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Descriptions, message, Space, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api/axios'
import '../style/style.css'

interface Checklist {
  id: number,
  type: string
}

function DetailChecklist() {
  useEffect(() => {
    document.title = `Sabang | Detail Checklist ${checklistId} `
  }, [])
  const { checklistId } = useParams<Record<string, string>>();
  const navigate = useNavigate()
  const back = () => {
    navigate('/Checklist')
  }
  const edit = () => {
    navigate(`/Checklist/EditChecklist/${checklistId}`)
  }
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(true)
  const [checklist, setChecklist] = useState(
    {
      id: 0,
      type: ''
    }
  )
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    axios.get(`/checklists/${checklistId}`, config)
      .then((response) => {
        setChecklist(response.data)
        setLoading(false)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Ocured')
        setLoading(false)
      })
  }, [])
  return (
    <div className='content'>
      <Typography.Title level={4}>Detail Checklist</Typography.Title>
      <div className="main-container">
        <Spin spinning={loading}>
          <Descriptions title='Checklist Detail' layout='vertical' className='form-container'>
            <Descriptions.Item label='ID'>{checklist.id}</Descriptions.Item>
            <Descriptions.Item label='Name'>{checklist.type}</Descriptions.Item>
          </Descriptions>
        </Spin>
        <div className="button-container">
          <Space>
            <Button className='edit-btn' type='primary' onClick={edit} icon={<EditOutlined />}>
              Edit
            </Button>
            <Button className='back-btn' danger onClick={back} icon={<CloseOutlined />}>
              Back
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default DetailChecklist