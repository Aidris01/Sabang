import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function Checklist() {
  const navigate = useNavigate()
  const createChecklist = () => {
    navigate("/Checklist/CreateChecklist")
  }
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Kualitas Kebersihan dan Fotonya"
    },
    {
      id: 2,
      name: "Foto tempat meletakan lodong"
    },
    {
      id: 3,
      name: "Foto tempat meletakan alat potong"
    },
    {
      id: 4,
      name: "Foto catatan hasil panen"
    },
    {
      id: 5,
      name: "Ada sampah plastik di kebun ?"
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
      title: 'Action',
      width: 200,
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
      <Typography.Title level={4}>Checklist</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={createChecklist} icon={<PlusOutlined />}>
          Create New
        </Button>
        <div className='checklist-table'>
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

export default Checklist