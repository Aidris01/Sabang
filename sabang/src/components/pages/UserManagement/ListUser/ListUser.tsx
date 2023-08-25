import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Typography, Table, Button, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../pages/style/style.css'

function ListUser() {

  const navigate = useNavigate();
  const createUser = () => {
    navigate("/ListUser/CreateUser")
  }
  const createBulk = () => {
    navigate("/ListUser/CreateUserBulk")
  }

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      username: "Cepot",
      farmerCode: "amct.01",
      email: "cepot12@gmail.com"
    },
    {
      id: 2,
      username: "Petruk",
      farmerCode: "amct.02",
      email: "ciupetruk@gmail.com"
    },
    {
      id: 3,
      username: "Semprul",
      farmerCode: "amct.03",
      email: "smprl@gmail.com"
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
      title: 'Username',
      dataIndex: 'username',
      width: 600
    },
    {
      key: '3',
      title: 'Farmer Code',
      dataIndex: 'farmerCode',
      width: 700
    },
    {
      key: '4',
      title: 'E-Mail',
      dataIndex: 'email',
      width: 600
    },
    {
      key: '5',
      title: "Action",
      render: () => {
        return <>
          <Button type='link' size='small'><EditOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red', marginLeft: 0 }} /></Button>
        </>
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