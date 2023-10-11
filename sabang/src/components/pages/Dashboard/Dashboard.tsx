import { Card, Space, Statistic, Table, Typography } from 'antd';
import React, { useEffect } from 'react';
import '../../pages/style/style.css'

function Dashboard() {
  useEffect(() => {
    document.title = 'Sabang | Dashboard'
  }, [])
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
        <Space>
          <Typography.Title level={4}>Purchase<Purchase /></Typography.Title>
          <Typography.Title level={4}>Production<Production /></Typography.Title>
          <Typography.Title level={4}>ICS Progress<ICS /></Typography.Title>
        </Space>
      </div>
    </div>
  )
}

function DashboardCard({ title, value }: {title: string; value: number; }) {
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
    <Table
    columns={[
      {
        title: "Day",
        dataIndex: "day"
      },
      {
        title: "Nira Total",
        dataIndex: "niraTotal"
      }
    ]}></Table>
  )
}
function Production() {
  return (
    <Table
    columns={[
      {
        title: "Day",
        dataIndex: "day"
      },
      {
        title: "Weight (Kg)",
        dataIndex: "weight"
      }
    ]}></Table>
  )
}

function ICS() {
  return (
    <Table
    columns={[
      {
        title: "Day",
        dataIndex: "day"
      },
      {
        title: "Checked",
        dataIndex: "checked"
      }
    ]}></Table>
  )
}

export default Dashboard;