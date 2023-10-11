import { EyeOutlined, TeamOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../pages/style/style.css'

function ICS() {
  useEffect(() => {
    document.title = 'Sabang | ICS'
  }, [])
  const navigate = useNavigate()
  const Team = () => {
    navigate('/ICS/ICSTeam')
  }
  const [ data, setData ] = useState([
    {
      id: 1,
      tapper: 'amct.01',
      ICSName: 'dedi dedi',
      createDate: '2001-09-11'
    },
    {
      id: 2,
      tapper: 'amks.03',
      ICSName: 'dedi dedi',
      createDate: '2020-10-14'
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
      title: 'Tapper',
      dataIndex: 'tapper',
      width: 200
    },
    {
      key: '3',
      title: 'ICS Name',
      dataIndex: 'ICSName',
      width: 200
    },
    {
      key: '4',
      title: 'Create Date',
      dataIndex: 'createDate',
      width: 200
    },
    {
      key: '5',
      title: 'Action',
      render: () => <Button type='link' size='small'><EyeOutlined /></Button>,
      width: 100
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>ICS</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={Team} icon={<TeamOutlined />}>
          ICS Team
        </Button>
        <div className="ics-table">
          <Table
            size='small'
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    </div>
  )
}

export default ICS