import { CloseOutlined } from '@ant-design/icons'
import { Button, Descriptions, message, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../../api/axios'

interface ICS {
  id: number,
  timestamp: Date,
  lat: number,
  lng: number
}
function formatDate(timestamp: Date | string) {
  const dateObj = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;

  if (dateObj instanceof Date && !isNaN(dateObj.getTime())) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  } else {
    return 'Invalid Date';
  }
}
function DetailICS() {
  useEffect(() => {
    document.title = `Sabang | Garden Control ${icsId}`
  }, [])
  const { icsId } = useParams<Record<string, string>>();
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const back = () => {
    navigate('/ICS')
  }
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const [data, setData] = useState<ICS>({
    id: 0,
    lat: 0,
    lng: 0,
    timestamp: new Date,
  })
  useEffect(() => {
    axios.get(`/garden-controls/${icsId}`, config)
      .then((response) => {
        const responseData = response.data
        setData({
          id: responseData.id,
          timestamp: responseData.timestamp,
          lat: responseData.lat,
          lng: responseData.lng
        })
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Data, Please check the console')
      }).finally(() => {
        setLoading(false)
      })
  }, [])
  const column = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },
    {
      key: 'checkName',
      title: 'Checklist',
      dataIndex: 'checklist',
      width: 500
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      width: 200
    },
    {
      key: 'photo',
      title: 'Photo',
      dataIndex: 'photo',
      width: 300
    },
    {
      key: 'note',
      title: 'Note',
      dataIndex: 'note',
      width: 300
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Garden Control - {icsId}</Typography.Title>
      <div className="desc-container">
        <Spin spinning={loading}>
          <Descriptions title='Detail Garden' layout='vertical' className='form-container'>
            <Descriptions.Item label='ID'>{data.id}</Descriptions.Item>
            <Descriptions.Item label='Penyadap'>01 - AMCT.01</Descriptions.Item>
            <Descriptions.Item label='ICS'>01 - Dedi</Descriptions.Item>
            <Descriptions.Item label='Long'>{data.lng}</Descriptions.Item>
            <Descriptions.Item label='Lat'>{data.lat}</Descriptions.Item>
            <Descriptions.Item label='Time'>{formatDate(data.timestamp)}</Descriptions.Item>
          </Descriptions>
        </Spin>
        <Typography.Title level={5} style={{ marginLeft: 15 }}>Data Checklist - tapper.id</Typography.Title>
        <Spin spinning={false}>
          <Table
            size='small'
            columns={column} />
        </Spin>
        <div className="button-container">
          <Button className='back-btn' icon={<CloseOutlined />} danger onClick={back}>
            Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DetailICS