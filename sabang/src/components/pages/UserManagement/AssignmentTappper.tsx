import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, message, Spin, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import '../../pages/style/style.css'

interface PurchaserData {
  id: number,
  name: string
}

function AssignmentTapper() {
  useEffect(() => {
    document.title = 'Sabang | Assignment Tapper'
  }, [])
  const [pengepul, setPengepul] = useState<PurchaserData[]>([])
  const [loading, setLoading] = useState(true)
  const column = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },
    {
      key: 'pengepul',
      title: 'Pengepul',
      dataIndex: 'name',
      width: 900
    },
    {
      key: 'action',
      title: 'Action',
      render: (record: PurchaserData) => {
        return <>
          <Link to={`/AssignmentTapper/Assignment/${record.id}`}>
            <Button type='link' style={{ color: 'black', justifyContent: 'center' }} icon={<EditOutlined />} />
          </Link>
        </>
      },
      width: 100
    }
  ]

  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    axios.get('/users/pengepul', config)
      .then((response) => {
        setPengepul(response.data)
        console.log(response.data)
        setLoading(false)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Penyadap, Please check the console')
        setLoading(false)
      })
  }, [])
  return (
    <div className='content'>
      <Typography.Title level={4}>Assignment Tapper</Typography.Title>
      <div className='main-container'>
        <Spin spinning={loading}>
          <Table
            size='small'
            columns={column}
            dataSource={pengepul} />
        </Spin>
      </div>
    </div>
  )
}

export default AssignmentTapper;