import { EyeOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'
import '../../pages/style/style.css'

interface Payment {
  id: number,
  penyadapId: number,
  paidAt: Date,
  penyadap: any
}

function StatusPayment() {
  useEffect(() => {
    document.title = 'Sabang | Status Payment'
  }, [])
  const [dataSource, setDataSource] = useState<Payment[]>([])
  const token = localStorage.getItem('token');
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    getPayment(1)
  }, [])
  function getPayment(page: number) {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    setIsLoading(true)
    axios.get<{ data: Payment[], totalItems: number }>(`/purchases/paginated?page=${page}&limit=10`, config)
      .then((response) => {
        const purchase = response.data.data
        setTotalItems(response.data.totalItems)
        const updateData = purchase.map((purchase) => {
          const penyadap = purchase.penyadap.name
          console.log('Nama Penyadap: ', penyadap);
          return purchase
        })
        setDataSource(updateData)
        setIsLoading(false)
      }).catch((error) => {
        setIsLoading(false)
        console.error('Error Ocured: ', error)
        message.error('Error Ocured, Please check the console')
      })
  }
  const handlePaid = (id: number) => {
    axios.post(`/purchases/set-paid/${id}`, { id }, config)
      .then((response) => {
        console.log(response.data)
        message.success('Status Paid')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Paid, Please check the console')
      })
  }
  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: 'detail',
      title: 'Detail',
      width: 30,
      render: (record: Payment) =>
        <Link to={`/StatusPayment/DetailPayment/${record.id}`}>
          <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
        </Link>
    },
    {
      key: 'penyadap',
      title: 'Penyadap',
      dataIndex: 'penyadap',
      width: 900,
      render: (penyadap: any) => penyadap.name
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      width: 900,
      render: (paidAt: Date, record: Payment) => record.paidAt == null ? 'Not Paid' : 'Paid'
    },
    {
      key: 'action',
      title: 'Action',
      width: 400,
      render: (record: Payment) =>
        <Popconfirm
          title="Apakah anda yakin untuk mengubah status (ini tidak bisa dikembalikan) ?"
          onConfirm={() => handlePaid(record.id)}
          okText="Yes"
          cancelText="No">
          <Button type='link' size='small' style={{ color: 'black' }}> Set As Paid </Button>
        </Popconfirm>
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Status Payment</Typography.Title>
      <div className='main-container'>
        <Spin spinning={isLoading}>
          <Table
            size='small'
            columns={columns}
            dataSource={dataSource}
            onChange={(pagination) => {
              console.log(pagination)
              setCurrentPage(pagination.current ?? 1)
              getPayment(pagination.current ?? 1)
              console.log(currentPage)
            }}
            pagination={{ total: totalItems }} />
        </Spin>
      </div>
    </div>
  )
}

export default StatusPayment