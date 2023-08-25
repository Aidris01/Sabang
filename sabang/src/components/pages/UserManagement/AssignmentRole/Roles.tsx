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
      dataIndex: 'name',
      width: 900
    },
    {
      key: '3',
      title: 'Rule Name',
      dataIndex: 'ruleName',
      width: 900
    },
    {
      key: '4',
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