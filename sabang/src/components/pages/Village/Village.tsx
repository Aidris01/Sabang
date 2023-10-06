import { EyeOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import '../../pages/style/style.css'

function Village() {
  const [ data, setData ] = useState([
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
      render: () => <Button type='link' size='small'><EyeOutlined /></Button>,
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
      <div className='village'>
        <Table 
        size='small'
        columns={columns}
        dataSource={data}/>
      </div>
    </div>
  )
}

export default Village