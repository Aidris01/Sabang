import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function FactoryManagement() {
  const navigate = useNavigate()
  const createFactory = () => {
    navigate("/FactoryManagement/CreateFactory")
  }

  const [dataSource, setDataSource] = useState ([
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
      dataIndex: 'name'
    },
    {
      key: '3',
      title: 'Address',
      dataIndex: 'address'
    },
    {
      key: '4',
      title: 'Action',
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
      <Typography.Title level={4}>Factory Management</Typography.Title>
      <div className='factory-management'>
        <Button className='create-btn' onClick={createFactory}>Create New</Button>
        <div className='factory-table'>
          <Table
          columns={columns}
          dataSource={dataSource}></Table>
        </div>
      </div>
    </div>
  )
}

export default FactoryManagement