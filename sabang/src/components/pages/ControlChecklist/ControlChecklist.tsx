import { EyeOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import '../../pages/style/style.css'

function ControlChecklist() {
  const [ data, setData ] = useState([
    {
      id: 1,
      tapperName: 'amct.01',
      ICSName: 'dedi dedi',
      long: '107.9896661',
      lat: '-7.4093626',
      createDate: '2020-02-20'
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
      title: 'Tapper Name',
      dataIndex: 'tapperName',
      width: 500
    },
    {
      key: '4',
      title: 'ICS Name',
      dataIndex: 'ICSName',
      width: 300
    },
    {
      key: '5',
      title: 'Long',
      dataIndex: 'long',
      width: 200
    },
    {
      key: '6',
      title: 'Lat',
      dataIndex: 'lat',
      width: 200
    },
    {
      key: '7',
      title: 'Create Date',
      dataIndex: 'createDate',
      width: 200
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Control Checklist</Typography.Title>
      <div className='control-checklist'>
        <Table 
        size='small'
        columns={columns}
        dataSource={data}
        />
      </div>
    </div>
  )
}

export default ControlChecklist