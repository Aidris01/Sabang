import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import '../../pages/style/style.css'

interface Checklist {
  id: number,
  title: string
}

function Checklist() {
  useEffect(() => {
    document.title = 'Sabang | Checklist'
  }, [])
  const navigate = useNavigate()
  const createChecklist = () => {
    navigate("/Checklist/CreateChecklist")
  }
  const [dataSource, setDataSource] = useState<Checklist[]>([])
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    axios.get('/checklists', config)
      .then((response) => {
        setDataSource(response.data)
        setLoading(false)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Ocured')
        setLoading(false)
      })
  }, [])
  const deleteChecklist = (checklistId: number) => {
    axios.delete(`/checklists/${checklistId}`, config)
      .then((response) => {
        message.success('Checklist deleted')
        console.log(response)
      }).catch((error) => {
        message.error('Error Ocured')
        console.error('Error Ocured: ', error)
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
      dataIndex: 'title',
      width: 900
    },
    {
      key: '3',
      title: 'Action',
      width: 200,
      render: (record: Checklist) => {
        const handleDelete = () => {
          deleteChecklist(record.id)
        }
        return <>
          <Link to={`/Checklist/DetailChecklist/${record.id}`}>
            <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Link to={`/Checklist/EditChecklist/${record.id}`}>
            <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Popconfirm
            title="Apakah anda yakin untuk menghapus checklist ini ?"
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
      <Typography.Title level={4}>Checklist</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={createChecklist} icon={<PlusOutlined />}>
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

export default Checklist