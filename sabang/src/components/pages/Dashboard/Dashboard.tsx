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
interface Payment {
  id: number,
  timestamp: Date,
  amount: number
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
  const [payment, setPayment] = useState<Payment[]>([])
  const [loadingPurc, setLoadingPurch] = useState(true)
  const [loadingProd, setLoadingProd] = useState(true)
  const [loadingPay, setLoadingPay] = useState(true)

  useEffect(() => {
    axios.get('/productions', config)
      .then((response) => {
        const updateProdcution = response.data.map((item: any) => ({
          ...item,
          kilogram: `${item.kilogram} Kg`
        }))
        setProduction(updateProdcution)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Production Data, Please check the console')
      }).finally(() => {
        setLoadingProd(false)
      })
  }, [])
  useEffect(() => {
    axios.get('/purchases', config)
      .then((response) => {
        const purchasesWithDataInLiter = response.data.map((purchase: any) => ({
          ...purchase,
          volume: `${purchase.volume} Liter`
        }));
        setPurchase(purchasesWithDataInLiter)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Purchase Data, Please check the console')
      }).finally(() => {
        setLoadingPurch(false)
      })
  }, [])
  useEffect(() => {
    axios.get('/purchases', config)
      .then((response) => {
        const updatedPayment = response.data.map((item: any) => ({
          ...item,
          amount: `Rp.${item.amount}`
        }))
        setPayment(updatedPayment)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching PAyment, Please check the console')
      }).finally(() => {
        setLoadingPay(false)
      })
  }, [])

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
              render: (timestamp: Date) => formatDate(new Date(timestamp)),
              width: 150
            },
            {
              title: "Nira Total",
              dataIndex: "volume",
              width: 150
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
              render: (createdAt: Date) => formatDate(new Date(createdAt)),
              width: 150
            },
            {
              title: "Weight (Kg)",
              dataIndex: "kilogram",
              width: 150
            }
          ]}
          dataSource={production} />
      </Spin>
    )
  }
  function Payment() {
    return (
      <Spin spinning={loadingPay}>
        <Table
          columns={[
            {
              title: "Date",
              dataIndex: "timestamp",
              render: (timestamp: Date) => formatDate(new Date(timestamp)),
              width: 150
            },
            {
              title: "Price(Rp.)",
              dataIndex: "amount",
              width: 150
            }
          ]} 
          dataSource={payment}/>
      </Spin>
    )
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <div className='dashboard-page'>
        <div className="all-data">
          <Space direction='horizontal'>
            <DashboardCard title={"All Purchases (Liter)"} value={6740} />
            <DashboardCard title={"All Productions (Kg)"} value={4200} />
            <DashboardCard title={"ICS Checked (Place)"} value={2} />
            <DashboardCard title={"All Payments (Rp)"} value={2130} />
          </Space>
        </div>
        <div className="table-data">
          <Flex justify={'space-around'} align={'flex-start'}>
            <Typography.Title style={{ marginTop: 24 }} level={4}>Purchases<Purchase /></Typography.Title>
            <Typography.Title level={4}>Productions<Production /></Typography.Title>
            <Typography.Title level={4}>Payments<Payment /></Typography.Title>
          </Flex>
        </div>
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