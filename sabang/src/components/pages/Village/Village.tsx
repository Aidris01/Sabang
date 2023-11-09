import { EyeOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../pages/style/style.css'

interface Villages {
  id: number,
  code: string
}

function Village() {
  useEffect(() => {
    document.title = 'Sabang | Village'
  }, [])
  const [data, setData] = useState([
    {
      id: 1,
      village: 'AMCT',
      niraVolume: 230010
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
      title: 'Detail',
      render: (record: Villages) =>
        <Link to={`/Village/DetailVillage/${record.id}`}>
          <Button type='link' size='small'
          ><EyeOutlined style={{ color: 'black' }} />
          </Button>
        </Link>,
      width: 30
    },
    {
      key: '3',
      title: 'Village',
      dataIndex: 'village',
      width: 900
    },
    {
      key: '4',
      title: 'Nira Volume',
      dataIndex: 'niraVolume',
      width: 700
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Village</Typography.Title>
      <div className='main-container'>
        <Table
          size='small'
          columns={columns}
          dataSource={data} />
      </div>
    </div>
  )
}

export default Village