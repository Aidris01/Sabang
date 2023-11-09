import { EyeOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import '../../pages/style/style.css'

interface Payment {
  id: number,
  penyadapId: number,
}

function StatusPayment() {
  useEffect(() => {
    document.title = 'Sabang | Status Payment'
  }, [])
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Detail',
      width: 30,
      render: () => <Button type='link' size='small'><EyeOutlined style={{color: 'black'}} /></Button>
    },
    {
      key: '3',
      title: 'Penyadap',
      dataIndex: 'penyadap',
      width: 900
    },
    {
      key: '4',
      title: 'Status',
      dataIndex: 'status',
      width: 900
    },
    {
      key: '5',
      title: 'Action',
      width: 400,
      render: () => <Button type='link' size='small' style={{color: 'black'}}>Set As Paid </Button>
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Status Payment</Typography.Title>
      <div className='main-container'>
        <Table 
        size='small'
        columns={columns}
        dataSource={dataSource}
        />
      </div>
    </div>
  )
}

export default StatusPayment