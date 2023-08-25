import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../pages/style/style.css'

function PurchaseWeek() {
    const navigate = useNavigate()
    const Purchase = () => {
        navigate('/Purchase')
    }
    const [ data, setData ] = useState([
        {
            id: 1,
            purchaseID: 613332,
            tapper: 'amct.02',
            purchaser: 'Santi Prasinta',
            createDate: '2001-09-11',
            totalPrice: 'IDR 7,900,00'
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
            title: 'Purchase ID',
            dataIndex: 'purchaseID',
            width: 100
        },
        {
            key: '3',
            title: 'Tapper',
            dataIndex: 'tapper',
            width: 200
        },
        {
            key: '4',
            title: 'Purchaser',
            dataIndex: 'purchaser',
            width: 200
        },
        {
            key: '5',
            title: 'Create Date',
            dataIndex: 'createDate',
            width: 200
        },
        {
            key: '6',
            title: 'Total Price',
            dataIndex: 'totalPrice',
            width: 200
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
      width: 150
        }
    ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Purchase Week</Typography.Title>
      <div className='purchase-week'>
        <Button className='create-btn' onClick={Purchase}>Purchase</Button>
        <div className="week-table">
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

export default PurchaseWeek