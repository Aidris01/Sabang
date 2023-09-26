import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Typography, Table, Button, Space, Popconfirm, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../../../api/axios'
import '../../../pages/style/style.css'

interface UserData {
  id: number;
  name: string;
  villageId: string;
  email: string;
}

function ListUser() {

  const navigate = useNavigate();
  const createUser = () => {
    navigate("/ListUser/CreateUser")
  }
  const createBulk = () => {
    navigate("/ListUser/CreateUserBulk")
  }

  const [dataSource, setDataSource] = useState<UserData[]>([])

  const deleteUser = (userId: number) => {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`/users/${userId}/softDelete`, config)
      .then((response) => {
        message.success('User deleted');
        console.log(response)
        setDataSource((prevData) => prevData.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        message.error('Error deleting user');
        console.error('Error deleting user:', error);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios.get<UserData[]>('/users', config)
      .then((response) => {
        const users = response.data
        axios.get('/villages', config)
        .then((villageResponse) => {
          const villages = villageResponse.data;
          const updatedUsers = users.map((user) => {
            const village = villages.find((village: { id: string; }) => village.id === user.villageId)
            return {
              ...user,
              villageId: village ? village.name : '',
            };
          });
          setDataSource(updatedUsers)
        }).catch((villageError) => {
          console.error('Error Fetching Village Data: ',villageError)
        });
      }).catch((error) => {
        console.error('Error fetching data:', error)
      });
  }, [])
  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      width: 600
    },
    {
      key: 'villageId',
      title: 'Village',
      dataIndex: 'villageId',
      width: 700
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      width: 600
    },
    {
      key: '5',
      title: "Action",
      render: (text: string, record: UserData) => {
        const handleDelete = () => {
          deleteUser(record.id);
        };
        return (
          <Space>
            <Link to={`/ListUser/EditUser/${record.id}`}>
              <Button type='link' size='small'><EditOutlined /></Button>
            </Link>
            <Popconfirm
              title="Apakah anda yakin untuk menghapus user ini ?"
              onConfirm={handleDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button type='link' size='small'>
                <DeleteOutlined style={{ color: 'red', marginLeft: 0 }} />
              </Button>
            </Popconfirm>
          </Space>
        )
      },
      width: 300
    }
  ]

  return (
    <div className='content'>
      <Typography.Title level={4}>List User</Typography.Title>
      <div className='list-user'>
        <Space>
          <Button className='create-btn-user' onClick={createUser}>Create User</Button>
          <Button className='create-btn-user' onClick={createBulk}>Create User Bulk</Button>
        </Space>
        <div className='user-table'>
          <Table
            size='small'
            columns={columns}
            dataSource={dataSource}
          >
          </Table>
        </div>
      </div>
    </div>
  )
}
export default ListUser;