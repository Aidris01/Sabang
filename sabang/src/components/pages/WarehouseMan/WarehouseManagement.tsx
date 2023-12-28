import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import '../../pages/style/style.css'

interface Warehouse {
  id: number,
  name: string,
  address: string,
  lat: string,
  lng: string
}

function WarehouseManagement() {
  useEffect(() => {
    document.title = 'Sabang | Warehouse Management'
  }, [])
  const navigate = useNavigate()
  const createWarehouse = () => {
    navigate("/WarehouseManagement/CreateWarehouse")
  }
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState<Warehouse[]>([])
  useEffect(() => {
    axios.get('/warehouses', config)
      .then((response) => {
        setDataSource(response.data)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Ocured, Please check the console')
      }).finally(() => {
        setLoading(false)
      })
  }, [])
  const deleteWarehouse = (warehouseId: number) => {
    axios.delete(`/warehouses/${warehouseId}`, config)
      .then((response) => {
        message.success('Warehouse Deleted')
        console.log(response)
        setDataSource((prevData) => prevData.filter((warehouse) => warehouse.id !== warehouseId))
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Deleting Warehouse, Please check the console')
      })
  }
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
      render: (record: Warehouse) => {
        const handleDelete = () => {
          deleteWarehouse(record.id)
        }
        return <>
          <Link to={`/WarehouseManagement/DetailWarehouse/${record.id}`}>
            <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Link to={`/WarehouseManagement/EditWarehouse/${record.id}`}>
            <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Popconfirm
            title="Apakah anda yakin untuk menghapus warehouse ini ?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No">
            <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
          </Popconfirm>
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
        <Spin spinning={loading}>
          <Table
            size='small'
            columns={columns}
            dataSource={dataSource}
          />
        </Spin>
      </div>
    </div>
  )
}

export default WarehouseManagement