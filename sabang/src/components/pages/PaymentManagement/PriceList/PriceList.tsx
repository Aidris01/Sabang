import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../../pages/style/style.css'

interface Price {
  id: number,
  sugarLevel: number,
  price: number
}

function PriceList() {
  useEffect(() => {
    document.title = 'Sabang | Price List'
  }, [])
  const navigate = useNavigate()
  const createPrice = () => {
    navigate("/PriceList/CreatePrice")
  }
  const [dataSource, setDataSource] = useState<Price[]>([])
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios.get('/price_lists', config)
      .then((response) => {
        const updatedData = response.data.map((item: any) => ({
          ...item,
          price: `Rp.${item.price}`
        }))
        setDataSource(updatedData)
        setLoading(false)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Ocured, Please check the console')
        setLoading(false)
      })
  }, []);
  const deletePrice = (priceId: number) => {
    axios.delete(`/price_lists/${priceId}`, config)
      .then((response) => {
        message.success('Price Deleted')
        console.log(response)
        setDataSource((prevData) => prevData.filter((price) => price.id !== priceId))
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Ocured, Please check the console')
      })
  }
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
      render: (record: Price) => {
        const handleDelete = () => {
          deletePrice(record.id);
        };
        return <>
          <Link to={`/PriceList/DetailPrice/${record.id}`}>
            <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Link to={`/PriceList/EditPrice/${record.id}`}>
            <Button type='link' size='small' ><EditOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Popconfirm
            title="Apakah anda yakin untuk menghapus harga ini ?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No">
            <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
          </Popconfirm>
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
          <Spin spinning={loading}>
            <Table
              size='small'
              columns={columns}
              dataSource={dataSource} />
          </Spin>
        </div>
      </div>
    </div>
  )
}

export default PriceList