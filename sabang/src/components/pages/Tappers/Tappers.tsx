import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function Tappers() {
  const navigate = useNavigate()
  const purchaseFilter = () => {
    navigate('/Tappers/PurchaseFilter')
  }
  const [data, setData] = useState([
    {
      id: 1,
      tapper: 'amks.01',
      niraVolume: 56.00,
      totalPrice: 'IDR 80,300,00'
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
      width: 700
    },
    {
      key: '3',
      title: 'Nira Volume',
      dataIndex: 'niraVolume',
      width: 400
    },
    {
      key: '4',
      title: 'Total Price(Rp)',
      dataIndex: 'totalPrice',
      width: 400
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Tappers</Typography.Title>
      <div className='tappers'>
        <Button className='filter' onClick={purchaseFilter}>Filter Purchase</Button>
        <div className="tapper-table">
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

export default Tappers