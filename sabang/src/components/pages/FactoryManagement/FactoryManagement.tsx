import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function FactoryManagement() {
  const navigate = useNavigate()
  const createFactory = () => {
    navigate("/FactoryManagement/CreateFactory")
  }

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'Mandalasari',
      address: 'Dusun Cikurantung, Desa Mandalasari'
    },
    {
      id: 1,
      name: 'Bunikasih',
      address: 'Dusun Bunikasih, Desa Cupunegara'
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
          <Button type='link' size='small'><EyeOutlined /></Button>
          <Button type='link' size='small'><EditOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
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
        <Table
          size='small'
          columns={columns}
          dataSource={dataSource}></Table>
      </div>
    </div>
  )
}

export default FactoryManagement