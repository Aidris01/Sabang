import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../pages/style/style.css'

function PriceList() {
  useEffect(() => {
    document.title = 'Sabang | Price List'
  }, [])
  const navigate = useNavigate()
  const createPrice = () => {
    navigate("/PriceList/CreatePrice")
  }
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      sugarLevel: '11.0',
      price: "IDR 1,300,00"
    },
    {
      id: 2,
      sugarLevel: '14.0',
      price: "IDR 1,600,00"
    },
    {
      id: 3,
      sugarLevel: '12.0',
      price: 'IDR 1,400,00'
    },
    {
      id: 4,
      sugarLevel: '10.0',
      price: 'IDR 1,200,00'
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
      title: 'Sugar Level',
      dataIndex: 'sugarLevel',
      width: 900
    },
    {
      key: '3',
      title: 'Price (Rp)',
      dataIndex: 'price',
      width: 900
    },
    {
      key: '4',
      title: 'Action',
      width: 400,
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined style={{color: 'black'}} /></Button>
          <Button type='link' size='small' ><EditOutlined style={{color: 'black'}} /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      }
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Price List</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={createPrice} icon={<PlusOutlined />}>
          Create New
        </Button>
        <div className='price-table'>
          <Table
            size='small'
            columns={columns}
            dataSource={dataSource}
          />
        </div>
      </div>
    </div>
  )
}

export default PriceList