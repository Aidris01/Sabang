import { EyeOutlined } from '@ant-design/icons'
import { Button, Table, Tabs, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import '../../pages/style/style.css'

function Nira() {
  useEffect(() => {
    document.title = 'Sabang | Nira'
  }, [])
  const [data, setData] = useState([
    {
      id: 1,
      tapper: 'amks.01',
      createDate: '2023-08-21',
      totalPrice: 'IDR2,900,00'
    },
  ])
  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Detail',
      render: () => <Button type='link' size='small'><EyeOutlined /></Button>,
      width: 30
    },
    {
      key: '3',
      title: 'Tapper',
      dataIndex: 'tapper',
      width: 700
    },
    {
      key: '4',
      title: 'Create Date',
      dataIndex: 'createDate',
      width: 300
    },
    {
      key: '5',
      title: 'Total Price(Rp)',
      dataIndex: 'totalPrice',
      width: 200
    }
  ]
  const [dataWeek, setDataWeek] = useState([
    {
      id: 1,
      tapper: 'amks.01',
      createDate: '2023-08-21',
      totalPrice: 'IDR2,900,00'
    },
    {
        id: 2,
        tapper: 'amks.03',
        createDate: '2023-04-20',
        totalPrice: 'IDR5,800,00'
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
      title: 'Detail',
      render: () => <Button type='link' size='small'><EyeOutlined /></Button>,
      width: 30
    },
    {
      key: '3',
      title: 'Tapper',
      dataIndex: 'tapper',
      width: 700
    },
    {
      key: '4',
      title: 'Create Date',
      dataIndex: 'createDate',
      width: 300
    },
    {
      key: '5',
      title: 'Total Price(Rp)',
      dataIndex: 'totalPrice',
      width: 200
    }
  ]
  const [dataMonth, setDataMonth] = useState([
    {
      id: 1,
      tapper: 'amks.01',
      createDate: '2023-08-21',
      totalPrice: 'IDR2,900,00'
    },
    {
        id: 2,
        tapper: 'amks.06',
        createDate: '2023-08-30',
        totalPrice: 'IDR4,600,00'
    },
    {
        id: 3,
        tapper: 'amks.03',
        createDate: '2023-04-20',
        totalPrice: 'IDR5,800,00'
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
      title: 'Detail',
      render: () => <Button type='link' size='small'><EyeOutlined /></Button>,
      width: 30
    },
    {
      key: '3',
      title: 'Tapper',
      dataIndex: 'tapper',
      width: 700
    },
    {
      key: '4',
      title: 'Create Date',
      dataIndex: 'createDate',
      width: 300
    },
    {
      key: '5',
      title: 'Total Price(Rp)',
      dataIndex: 'totalPrice',
      width: 200
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Nira</Typography.Title>
      <div className='main-container'>
       <Tabs defaultActiveKey='1' items={[
        {
          key: '1',
          label: 'Nira Today',
          children: <Table 
          size='small'
          columns={columns}
          dataSource={data}
          />
        },
        {
          key: '2',
          label: 'Nira Week',
          children: <Table 
          size='small'
          columns={columnsWeek}
          dataSource={dataWeek}
          />
        },
        {
          key: '3',
          label: 'Nira Month',
          children: <Table 
          size='small'
          columns={columnsMonth}
          dataSource={dataMonth}
          />
        }
       ]} >
       </Tabs>   
      </div>
    </div>
  )
}

export default Nira