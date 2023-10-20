import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function WarehouseManagement() {
  useEffect(() => {
    document.title = 'Sabang | Warehouse Management'
  }, [])
  const navigate = useNavigate()
  const createWarehouse = () => {
    navigate("/WarehouseManagement/CreateWarehouse")
  }
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'Address1',
      address: 'jl.1 Address 1'
    },
    {
      id: 2,
      name: 'Address2',
      address: 'Jl.2 Address 2'
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
      title: 'Name',
      dataIndex: 'name',
      width: 900
    },
    {
      key: '3',
      title: 'Address',
      dataIndex: 'address',
      width: 900
    },
    {
      key: '4',
      title: 'Action',
      width: 400,
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined style={{color: 'black'}} /></Button>
          <Button type='link' size='small'><EditOutlined style={{color: 'black'}} /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      }
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Warehouse Management</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={createWarehouse} icon={<PlusOutlined />}>
          Create New
        </Button>
        <div className='warehouse-table'>
          <Table
            size='small'
            columns={columns}
            dataSource={dataSource}
          />
        </div>
      </div>
    </div>
  )
}

export default WarehouseManagement