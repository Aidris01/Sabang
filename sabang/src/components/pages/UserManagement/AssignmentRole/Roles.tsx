import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../../pages/style/style.css';

interface Role {
  id: number;
  name: string;
  description: string;
}

function Roles() {
  const navigate = useNavigate()
  const createRole = () => {
    navigate("/Roles/CreateRole")
  }
  const [dataSource, setDataSource] = useState<Role[]>([])
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios.get('/roles', config)
      .then(response => {
        setDataSource(response.data);
      })
      .catch(error => {
        console.error('Error fetching roles:', error);
      });
  }, []);
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
      title: 'Description',
      dataIndex: 'description',
      width: 700
    },
    {
      key: '4',
      title: 'Action',
      width: 400,
      render: () => {
        return <>
          <Button type='link' size='small'><EditOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      }
    }
  ]

  return (
    <div className='content'>
      <Typography.Title level={4}>Roles</Typography.Title>
      <div className='roles'>
        <Button className='create-btn' onClick={createRole}>Create Role</Button>
        <div className='role-table'>
          <Table
            size='small'
            columns={columns}
            dataSource={dataSource}></Table>
        </div>
      </div>
    </div>
  )
}
export default Roles;