import { Card, message, Space, Spin, Statistic, Table, Typography, Flex } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import '../../pages/style/style.css'

interface Purchase {
  id: number,
  timestamp: Date,
  volume: number
}
interface Production {
  id: number,
  createdAt: Date,
  kilogram: number
}

function formatDate(timestamp: Date) {
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
  const day = String(timestamp.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function Dashboard() {
  useEffect(() => {
    document.title = 'Sabang | Dashboard'
  }, [])
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const [purchase, setPurchase] = useState<Purchase[]>([])
  const [production, setProduction] = useState<Production[]>([])
  const [loadingPurc, setLoadingPurch] = useState(true)
  const [loadingProd, setLoadingProd] = useState(true)
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios.get('/productions', config)
      .then((response) => {
        setProduction(response.data)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Production Data, Please check the console')
      }).finally(() => {
        setLoadingProd(false)
      })
  }, [])

  useEffect(() => {
    getPurchase(1)
  }, [])
  function getPurchase(page: number) {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    setLoadingPurch(true)
    axios.get<{ data: Purchase[], totalItems: number }>(`/purchases/paginated?page=${page}&limit=10`, config)
      .then((response) => {
        const purchase = response.data.data
        setTotalItems(response.data.totalItems)
        setPurchase(response.data.data)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Ocured, Please check the console')
      }).finally(() => {
        setLoadingPurch(false)
      })
  }
  function DashboardCard({ title, value }: { title: string; value: number; }) {
    return (
      <Card>
        <Space direction='horizontal'>
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    )
  }
  function Purchase() {
    return (
      <Spin spinning={loadingPurc}>
        <Table
          columns={[
            {
              title: "Date",
              dataIndex: "timestamp",
              render: (timestamp: Date) => formatDate(new Date(timestamp))
            },
            {
              title: "Nira Total",
              dataIndex: "volume"
            }
          ]}
          dataSource={purchase} />
      </Spin>
    )
  }
  function Production() {
    return (
      <Spin spinning={loadingProd}>
        <Table
          columns={[
            {
              title: "Date",
              dataIndex: "createdAt",
              render: (createdAt: Date) => formatDate(new Date(createdAt))
            },
            {
              title: "Weight (Kg)",
              dataIndex: "kilogram"
            }
          ]}
          dataSource={production} />
      </Spin>
    )
  }
  function ICS() {
    return (
      <Table
        columns={[
          {
            title: "Date",
            dataIndex: "date"
          },
          {
            title: "Checked",
            dataIndex: "checked"
          }
        ]} />
    )
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <div className='dashboard-page'>
        <Space direction='horizontal'>
          <DashboardCard title={"All Purchases (Liter)"} value={6740} />
          <DashboardCard title={"All Productions (Kg)"} value={4200} />
          <DashboardCard title={"ICS Checked (Place)"} value={2} />
          <DashboardCard title={"All Payments (Rp)"} value={2130} />
        </Space>
        <Flex justify={'space-around'} align={'flex-start'}>
          <Typography.Title level={4}>Purchase<Purchase /></Typography.Title>
          <Typography.Title level={4}>Production<Production /></Typography.Title>
          <Typography.Title level={4}>ICS Progress<ICS /></Typography.Title>
        </Flex>
        <Typography.Title level={4}>Daftar Kadar PH Dibawah 6<PH5 /></Typography.Title>
      </div>
    </div>
  )
}

function PH5() {
  return (
    <Table
      columns={[
        {
          title: 'ID',
          dataIndex: 'id'
        },
        {
          title: 'Purchase ID',
          dataIndex: 'purchaseId'
        },
        {
          title: 'Tapper',
          dataIndex: 'tapper'
        },
        {
          title: 'Ph',
          dataIndex: 'ph'
        },
        {
          title: 'Create Date',
          dataIndex: 'createDate'
        }
      ]}
    />
  )
}
export default Dashboard;