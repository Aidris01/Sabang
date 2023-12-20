import { EyeOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'
import '../../pages/style/style.css'

interface Payment {
  id: number,
  penyadapId: number,
  paidAt: Date,
  penyadap: any,
  timestamp: Date
}
function formatDate(timestamp: Date) {
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, '0');
  const day = String(timestamp.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function StatusPayment() {
  useEffect(() => {
    document.title = 'Sabang | Status Payment'
  }, [])
  const [dataSource, setDataSource] = useState<Payment[]>([])
  const token = localStorage.getItem('token');
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [number] = useState(1)
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC')
  const [isLoading, setIsLoading] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    setSortOrder('DESC')
    getPayment(1, 'DESC')
  }, [])
  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
    setSortOrder(newSortOrder);
    getPayment(currentPage, newSortOrder);
  };
  function getPayment(page: number, sortOrder: 'ASC' | 'DESC') {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    setIsLoading(true)
    axios.get<{ data: Payment[], totalItems: number }>(`/purchases/paginated?page=${page}&limit=10&sort=${sortOrder}`, config)
      .then((response) => {
        const purchase = response.data.data
        setTotalItems(response.data.totalItems)
        const updateData = purchase.map((purchase) => {
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
        getPayment(currentPage, sortOrder)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Paid, Please check the console')
      })
  }
  const columns = [
    {
      key: 'id',
      title: 'No',
      render: (text: any, record: any, index: number) => {
        return <span>{number + index + (currentPage - 1) * 10}</span>
      }
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
      width: 500,
      render: (penyadap: any) => penyadap.name
    },
    {
      key: 'timestamp',
      title: 'Date',
      dataIndex: 'timestamp',
      width: 400,
      render: (timestamp: Date) => formatDate(new Date(timestamp))
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      width: 700,
      render: (paidAt: Date, record: Payment) => record.paidAt == null ? 'Not Paid' : 'Paid'
    },
    {
      key: 'action',
      title: 'Action',
      width: 400,
      render: (record: Payment) => {
        const isPaid = record.paidAt !== null;
        return isPaid ? 'Has Been Paid' : (
          <Popconfirm
            title="Apakah anda yakin untuk mengubah status (ini tidak bisa dikembalikan) ?"
            onConfirm={() => handlePaid(record.id)}
            okText="Yes"
            cancelText="No"
            disabled={isPaid}>
            <Button type='link' size='small' style={{ color: 'black' }}> Set As Paid </Button>
          </Popconfirm>
        );
      }
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Status Payment</Typography.Title>
      <div className='main-container'>
        <Button style={{ marginTop: 10, marginLeft: 10 }} onClick={toggleSortOrder}>
          {sortOrder === 'ASC' ? <SortAscendingOutlined /> : <SortDescendingOutlined />}
          Sort {sortOrder === 'ASC' ? 'Ascending' : 'Descending'}
        </Button>
        <Spin spinning={isLoading}>
          <Table
            size='small'
            columns={columns}
            dataSource={dataSource}
            onChange={(pagination) => {
              console.log(pagination)
              setCurrentPage(pagination.current ?? 1)
              getPayment(pagination.current ?? 1, sortOrder)
              console.log(currentPage)
            }}
            pagination={{ total: totalItems }} />
        </Spin>
      </div>
    </div>
  )
}

export default StatusPayment