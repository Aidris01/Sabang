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
      dataIndex: 'username'
    },
    {
      key: '3',
      title: 'Farmer Code',
      dataIndex: 'farmerCode'
    },
    {
      key: '4',
      title: 'E-Mail',
      dataIndex: 'email'
    },
    {
      key: '5',
      title: "Action",
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
      <Typography.Title level={4}>List User</Typography.Title>
      <div className='list-user'>
        <Space>
          <Button className='create-btn' onClick={createUser}>Create User</Button>
          <Button className='create-btn' onClick={createBulk}>Create User Bulk</Button>
        </Space>
        <div className='user-table'>
          <Table
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