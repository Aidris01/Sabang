import { EyeOutlined, TeamOutlined } from '@ant-design/icons'
import { Button, message, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../../pages/style/style.css'

interface Garden {
  id: number,
  timestamp: Date,
  lat: number,
  lng: number,
}
function formatDate(timestamp: Date) {
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
  const day = String(timestamp.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function ICS() {
  useEffect(() => {
    document.title = 'Sabang | ICS'
  }, [])
  const navigate = useNavigate()
  const Team = () => {
    navigate('/ICS/ICSTeam')
  }
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    axios.get('/garden-controls', config)
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Garden, Please check the console')
      }).finally(() => {
        setLoading(false)
      })
  }, [])
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([
    {
      id: 1,
      tapper: 'amct.01',
      ICSName: 'dedi dedi',
      createDate: '2001-09-11'
    },
    {
      id: 2,
      tapper: 'amks.03',
      ICSName: 'dedi dedi',
      createDate: '2020-10-14'
    }
  ])
  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Tapper',
      dataIndex: 'tapper',
      width: 300
    },
    {
      key: '3',
      title: 'ICS Name',
      dataIndex: 'ICSName',
      width: 300
    },
    {
      key: '4',
      title: 'Create Date',
      dataIndex: 'createDate',
      width: 300
    },
    {
      key: '5',
      title: 'Action',
      render: (record: Garden) => {
        return <>
          <Link to={`/ICS/DetailICS/${record.id}`}>
            <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          </Link>
        </>
      },
      width: 100
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>ICS</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={Team} icon={<TeamOutlined />}>
          ICS Team
        </Button>
          <Spin spinning={loading}>
            <Table
              size='small'
              columns={columns}
              dataSource={data} />
          </Spin>
      </div>
    </div>
  )
}

export default ICS