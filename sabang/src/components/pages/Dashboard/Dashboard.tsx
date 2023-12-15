import { Card, message, Space, Spin, Statistic, Table, Typography, Flex } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import '../../pages/style/style.css'

interface Purchase {
  id: number,
  timestamp: Date,
  volume: number,
  amount: number
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
  const [payment, setPayment] = useState<Purchase[]>([])
  const [loadingPurc, setLoadingPurch] = useState(true)
  const [loadingProd, setLoadingProd] = useState(true)
  const [loadingPay, setLoadingPay] = useState(true)
  const [price, setPrice] = useState(0)
  const [volume, setVolume] = useState(0)
  const [weight, setWeight] = useState(0)
  const [ics, setIcs] = useState(0)

  useEffect(() => {
    axios.get('/productions/dashboard', config)
      .then((response) => {
        const updateProdcution = response.data.map((item: any) => ({
          ...item,
          weight: `${item.weight} Kg`
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
    axios.get('/purchases/dashboard', config)
      .then((response) => {
        const purchasesWithDataInLiter = response.data.map((purchase: any) => ({
          ...purchase,
          volume: `${purchase.volume} Liter`,
          amount: `Rp.${purchase.amount}`
        }));
        setPurchase(purchasesWithDataInLiter)
        setPayment(purchasesWithDataInLiter)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Purchase Data, Please check the console')
      }).finally(() => {
        setLoadingPurch(false)
        setLoadingPay(false)
      })
  }, [])
  useEffect(() => {
    axios.get('/purchases/total-amount', config)
    .then((response) => {
      setPrice(response.data.totalAmount)
    }).catch((error) => {
      console.error('Error Ocured: ',error)
      message.error('Error Fetching Total Price, Please check the console')
    })
  },[])
  useEffect(() => {
    axios.get('/purchases/total-volume', config)
    .then((response) => {
      setVolume(response.data.totalVolume)
    }).catch((error) => {
      console.error('Error Ocured: ',error)
      message.error('Error Fetching Total Volume, Please check the console')
    })
  },[])
  useEffect(() => {
    axios.get('/productions/total-weight', config)
    .then((response) => {
      setWeight(response.data.totalWeight)
    }).catch((error) => {
      console.error('Error Ocured: ',error)
      message.error('Error Fetching Total Weight, Please check the console')
    })
  },[])
  useEffect(() => {
    axios.get('/garden-controls/total-ics', config)
    .then((response) => {
      setIcs(response.data.total)
    }).catch((error) => {
      console.error('Error Ocured: ',error)
      message.error('Error Fetching Total ICS, Please check the console')
    })
  },[])

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
              dataIndex: "date",
              render: (timestamp: Date) => formatDate(new Date(timestamp)),
              width: 150
            },
            {
              title: "Nira Total",
              dataIndex: "volume",
              width: 150
            }
          ]}
          dataSource={purchase}
          style={{width: 320}} />
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
              dataIndex: "date",
              render: (createdAt: Date) => formatDate(new Date(createdAt)),
              width: 150
            },
            {
              title: "Weight (Kg)",
              dataIndex: "weight",
              width: 150
            }
          ]}
          dataSource={production}
          style={{width: 320}} />
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
              dataIndex: "date",
              render: (timestamp: Date) => formatDate(new Date(timestamp)),
              width: 150
            },
            {
              title: "Price(Rp.)",
              dataIndex: "amount",
              width: 150
            }
          ]} 
          dataSource={payment}
          style={{width: 320}}/>
      </Spin>
    )
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <div className='dashboard-page'>
        <div className="all-data">
          <Space direction='horizontal'>
            <DashboardCard title={"All Purchases (Liter)"} value={volume} />
            <DashboardCard title={"All Productions (Kg)"} value={weight} />
            <DashboardCard title={"ICS Checked (Place)"} value={ics} />
            <DashboardCard title={"All Payments (Rp)"} value={price} />
          </Space>
        </div>
        <div className="table-data">
          <Flex justify={'space-around'} align={'flex-start'}>
            <Typography.Title style={{ marginTop: 24 }} level={4}>Purchases<Purchase /></Typography.Title>
            <Typography.Title level={4}>Productions<Production /></Typography.Title>
            <Typography.Title level={4}>Payments<Payment /></Typography.Title>
          </Flex>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;