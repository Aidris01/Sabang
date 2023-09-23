import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm, Space, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../pages/style/style.css'
import axios from '../../../api/axios'

interface Village {
  id: number;
  name: string;
  villageCode: string;
}

function ManagementVillage() {

  const navigate = useNavigate();
  const createVillage = () => {
    navigate("/ManagementVillage/CreateVillage")
  }
  const [dataSource, setDataSource] = useState<Village[]>([])
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    axios.get<Village[]>('/villages', config).then((response) => {
      setDataSource(response.data)
    }).catch((error) => {
      console.error('Error Ocured: ', error)
    })
  })

  const deleteVillage = (villageId: number) => {
    axios.delete(`/villages/${villageId}`, config)
      .then((response) => {
        message.success('Village Deleted')
        console.log(response)
        setDataSource((prevData) => prevData.filter((village) => village.id !== villageId));
      }).catch((error) => {
        message.error('Error Ocured')
        console.error('Error Ocured: ', error)
      })
  }

  const columns = [
    {
      key: '1',
      title: "ID",
      dataIndex: "id"
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
      width: 900
    },
    {
      key: '3',
      title: 'Village Code',
      dataIndex: 'villageCode',
      width: 900
    },
    {
      key: '4',
      title: 'Action',
      width: 400,
      render: (text: string, record: Village) => {
        const handleDelete = () => {
          deleteVillage(record.id)
        }
        return (
          <Space>
            <Link to={`/ManagementVillage/EditVillage/${record.id}`}>
              <Button type='link' size='small'><EditOutlined /></Button>
            </Link>
            <Popconfirm
              title="Apakah anda yakin untuk menghapus village ini ?"
              onConfirm={handleDelete}
              okText="Yes"
              cancelText="No">
              <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
            </Popconfirm>
          </Space>
        )
      },
    }
  ]

  return (
    <div className='content'>
      <Typography.Title level={4}>Management Village</Typography.Title>
      <div className='management-village'>
        <Button className='create-btn' onClick={createVillage}>Create New</Button>
        <div className='village-table'>
          <Table
            size='small'
            columns={columns}
            dataSource={dataSource}
          ></Table>
        </div>
      </div>
    </div>
  )
}
export default ManagementVillage;