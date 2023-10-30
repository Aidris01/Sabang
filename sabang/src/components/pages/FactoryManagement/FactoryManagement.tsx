import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import '../../pages/style/style.css'

interface Factory {
  id: number,
  name: string,
  address: string,
  lat: number,
  lng: number
}

function FactoryManagement() {
  useEffect(() => {
    document.title = 'Sabang | Factory Management'
  }, [])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const createFactory = () => {
    navigate("/FactoryManagement/CreateFactory")
  }

  const [dataSource, setDataSource] = useState<Factory[]>([])
  const [loading, setLoading] = useState(true)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    axios.get('/factories', config)
      .then((response) => {
        setDataSource(response.data)
        setLoading(false)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Ocured, Please check the console')
        setLoading(false)
      })
  }, [])
  const deleteFactory = (factoryId: number) => {
    axios.delete(`/factory/${factoryId}`, config)
      .then((response) => {
        message.success('Factory Deleted')
        console.log(response)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Deleting Factory')
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
      render: (record: Factory) => {
        const handleDelete = () => {
          deleteFactory(record.id)
        }
        return <>
          <Link to={`/FactoryManagement/DetailFactory/${record.id}`}>
            <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Link to={`/FactoryManagement/EditFactory/${record.id}`}>
            <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Popconfirm
            title="Apakah anda yakin untuk menghapus factory ini ?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No"
          >
            <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
          </Popconfirm>
        </>
      }
    }
  ]

  return (
    <div className='content'>
      <Typography.Title level={4}>Factory Management</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={createFactory} icon={<PlusOutlined />}>
          Create New
        </Button>
        <Spin spinning={loading}>
          <Table
            size='small'
            columns={columns}
            dataSource={dataSource}></Table>
        </Spin>
      </div>
    </div>
  )
}

export default FactoryManagement