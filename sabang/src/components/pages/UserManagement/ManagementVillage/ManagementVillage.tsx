import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../pages/style/style.css'

function ManagementVillage() {

  const navigate = useNavigate();
  const createVillage = () => {
    navigate("/ManagementVillage/CreateVillage")
  }

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Sagulung",
      villageCode: "AMSA"
    },
    {
      id: 2,
      name: "Karyamekar",
      villageCode: "AMKM"
    }
  ])

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