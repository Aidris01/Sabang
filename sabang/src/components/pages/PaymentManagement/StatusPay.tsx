import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Table, Typography } from 'antd'
import React, { useState } from 'react'
import '../../pages/style/style.css'

function StatusPayment() {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      penyadap: 'amkm.14',
      status: 'Pending'
    },
    {
      id: 2,
      penyadap: 'amkm.14',
      status: "Pending"
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
      title: 'Detail',
      width: 30,
      render: () =>{
        return <>
        <EyeOutlined />
        </>
      }
    },
    {
      key: '3',
      title: 'Penyadap',
      dataIndex: 'penyadap',
      width: 900
    },
    {
      key: '4',
      title: 'Status',
      dataIndex: 'status',
      width: 900
    },
    {
      key: '5',
      title: 'Action',
      width: 600,
      render: () => {
        return <>
          <EditOutlined />
          <DeleteOutlined style={{ color: 'red', marginLeft: 12 }} />
        </>
      }
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Status Payment</Typography.Title>
      <div className='status-payment'>
        <Table 
        size='small'
        columns={columns}
        dataSource={dataSource}
        />
      </div>
    </div>
  )
}

export default StatusPayment