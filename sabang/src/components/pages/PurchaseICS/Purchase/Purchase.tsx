import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../pages/style/style.css'

function Purchase() {
  const navigate = useNavigate()
  const purchaseWeek = () => {
    navigate('/Purchase/PurchaseWeek')
  }
  const [ data, setData ] = useState([
    {
      id: 1,
      statusChecked: 'Not Checked',
      statusUpdated: 'Not Updated',
      purchaseID: 61332,
      createDate: '2020-02-20',
      tapper: 'amks.08',
      ph: 7.6,
      brix: 12.7,
      niraVolume: 5.0,
      totalPrice: 'IDR 7,350,00',
      statusAudit: 'Not Audit'
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
      title: 'Status Checked',
      dataIndex: 'statusChecked',
      width: 100
    },
    {
      key: '3',
      title: 'Status Updated',
      dataIndex: 'statusUpdated'
    },
    {
      key: '4',
      title: 'Purchase ID',
      dataIndex: 'purchaseID',
      windth: 100
    },
    {
      key: '5',
      title: 'Create Date',
      dataIndex: 'createDate',
      width: 100
    },
    {
      key: '6',
      title: 'Tapper',
      dataIndex: 'tapper',
      width: 100
    },
    {
      key: '7',
      title: 'PH',
      dataIndex: 'ph'
    },
    {
      key: '8',
      title: 'BRIX',
      dataIndex: 'brix'
    },
    {
      key: '9',
      title: 'Nira Volume',
      dataIndex: 'niraVolume'
    },
    {
      key: '10',
      title: 'Total Price',
      dataIndex: 'totalPrice'
    },
    {
      key: '11',
      title: 'Status Audit',
      dataIndex: 'statusAudit'
    },
    {
      key: '12',
      title: 'Set Audit',
      render: () => <Button type='link' size='small'><EditOutlined /></Button>
    },
    {
      key: '13',
      title: 'Action',
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined /></Button>
          <Button type='link' size='small'><EditOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      },
      width: 400
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Purchase</Typography.Title>
      <div className='purchase'>
        <Button className='create-btn' onClick={purchaseWeek}>Purchase Week</Button>
        <div className="purchase-table">
          <Table
            size='small'
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    </div>
  )
}

export default Purchase