import { EyeOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function NiraMonth() {
  const navigate = useNavigate()

  const niraToday = () => {
    navigate('/Nira')
  }
  const niraWeek = () => {
    navigate('/NiraWeek')
  }
  const niraMonth = () => {
    navigate('/NiraMonth')
  }
  const [data, setData] = useState([
    {
      id: 1,
      tapper: 'amks.01',
      createDate: '2023-08-21',
      totalPrice: 'IDR2,900,00'
    },
    {
        id: 2,
        tapper: 'amks.06',
        createDate: '2023-08-30',
        totalPrice: 'IDR4,600,00'
    },
    {
        id: 3,
        tapper: 'amks.03',
        createDate: '2023-04-20',
        totalPrice: 'IDR5,800,00'
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
      title: 'Detail',
      render: () => <Button type='text'><EyeOutlined /></Button>,
      width: 30
    },
    {
      key: '3',
      title: 'Tapper',
      dataIndex: 'tapper',
      width: 700
    },
    {
      key: '4',
      title: 'Create Date',
      dataIndex: 'createDate',
      width: 300
    },
    {
      key: '5',
      title: 'Total Price(Rp)',
      dataIndex: 'totalPrice',
      width: 200
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Nira Month</Typography.Title>
      <div className='nira'>
        <Button className='nira-btn' onClick={niraToday}>Nira Today</Button>
        <Button className='nira-btn' onClick={niraWeek}>Nira Week</Button>
        <Button className='nira-btn' onClick={niraMonth}>Nira Month</Button>
        <div className='nira-table'>
          <Table 
          size='small'
          columns={columns}
          dataSource={data}
          />
        </div>
      </div>
    </div>
  )
}

export default NiraMonth