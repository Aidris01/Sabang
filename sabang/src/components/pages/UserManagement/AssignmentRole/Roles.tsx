import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../../pages/style/style.css';

interface Role {
  id: number;
  name: string;
  description: string;
}

function Roles() {
  useEffect(() => {
    document.title = 'Sabang | Roles'
  }, [])
  const navigate = useNavigate()
  const createRole = () => {
    navigate("/Roles/CreateRole")
  }
  const [isLoading, setIsLoading] = useState(true);
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
        message.error('Error Ocured, Please check the console')
      }).finally(() => {
        setIsLoading(false)
      })
  }, []);
  const deleteRole = (roleId: number) => {
    axios.delete(`/roles/${roleId}`, config)
      .then((response) => {
        message.success('Role deleted');
        console.log(response)
        setDataSource((prevData) => prevData.filter((role) => role.id !== roleId));
      }).catch((error) => {
        message.error('Error deleting user');
        console.error('Error deleting user:', error);
      });
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
      title: 'Description',
      dataIndex: 'description',
      width: 700
    },
    {
      key: '4',
      title: 'Action',
      width: 400,
      render: (text: string, record: Role) => {
        const handleDelete = () => {
          deleteRole(record.id);
        };
        return <>
          <Link to={`/Roles/EditRole/${record.id}`}>
            <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Popconfirm
            title="Apakah anda yakin untuk menghapus role ini ?"
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
      <Typography.Title level={4}>Roles</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={createRole} icon={<PlusOutlined />}>Create Role</Button>
        <div className='role-table'>
          <Table
            loading={isLoading}
            size='small'
            columns={columns}
            dataSource={dataSource}></Table>
        </div>
      </div>
    </div>
  )
}

export default Roles;