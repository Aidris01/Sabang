import { PlusOutlined } from '@ant-design/icons'
import { Button, Table, Tabs, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function Tappers() {
  const navigate = useNavigate()
  const purchaseFilter = () => {
    navigate('/Tappers/PurchaseFilter')
  }
  const create = <Button style={{marginRight: 10}} onClick={purchaseFilter} icon={<PlusOutlined />}>
    Purchase Filter
  </Button>
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
  const [dataWeek, setDataWeek] = useState([
    {
      id: 1,
      tapper: 'amks.01',
      niraVolume: 56.00,
      totalPrice: 'IDR 80,300,00'
    },
    {
      id: 2,
      tapper: 'amks.05',
      niraVolume: 76.00,
      totalPrice: 'IDR 114,000,00'
    }
  ])
  const columnsWeek = [
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
  const [dataMonth, setDataMonth] = useState([
    {
      id: 1,
      tapper: 'amks.01',
      niraVolume: 56.00,
      totalPrice: 'IDR 80,300,00'
    },
    {
      id: 2,
      tapper: 'amks.05',
      niraVolume: 76.00,
      totalPrice: 'IDR 114,000,00'
    },
    {
      id: 3,
      tapper: 'amks.04',
      niraVolume: 20.00,
      totalPrice: 'IDR 30,000,00'
    }
  ])
  const columnsMonth = [
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
      <div className='main-container'>
        <Tabs tabBarExtraContent={create} defaultActiveKey='1' items={[
          {
            key: '1',
            label: 'Today',
            children: <Table
              size='small'
              columns={columns}
              dataSource={data}
            />
          },
          {
            key: '2',
            label: 'Week',
            children: <Table
              size='small'
              columns={columnsWeek}
              dataSource={dataWeek}
            />
          },
          {
            key: '3',
            label: 'Month',
            children: <Table
              size='small'
              columns={columnsMonth}
              dataSource={dataMonth}
            />
          }
        ]}
        />
      </div>
    </div>
  )
}

export default Tappers