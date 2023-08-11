import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../pages/style/style.css'

function Roles() {
  const navigate = useNavigate()
  const createRole = () => {
    navigate("/AssignmentRole")
  }
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'Buyer',
      ruleName: '(Not Set)',
      description: '(Not Set)'
    },
    {
      id: 2,
      name: 'Pengepul',
      ruleName: '(Not Set)',
      description: 'role untuk pengepul'
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
      title: 'Rule Name',
      dataIndex: 'ruleName'
    },
    {
      key: '4',
      title: 'Description',
      dataIndex: 'description'
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
      <Typography.Title level={4}>Roles</Typography.Title>
      <div className='roles'>
        <Button className='create-btn' onClick={createRole}>Create Role</Button>
        <div className='role-table'>
          <Table
            columns={columns}
            dataSource={dataSource}></Table>
        </div>
      </div>
    </div>
  )
}

export default Roles;