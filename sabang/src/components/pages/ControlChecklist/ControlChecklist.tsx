import { Table, TableColumnsType, Typography } from 'antd'
import React from 'react'
import '../../pages/style/style.css'

interface DataType {
  key: React.Key;
  tapperName: string;
  ICSName: string;
  long: string;
  lat: string;
  createDate: string;
}

interface ExpandedDataType {
  key: React.Key;
  checkName: string;
  status: string;
}

function ControlChecklist() {
  const expandedRowRender = () => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'Check Name', dataIndex: 'checkName', key: 'checkName' },
      { title: 'Status', dataIndex: 'status', key: ' status' },
      { title: 'Photo', key: 'photo' }
    ]
    const data = [
      {
        key: 1,
        checkName: 'Kualitas kebersihan alat dan fotonya',
        status: 'Done'
      }
    ]
    return <Table columns={columns} dataSource={data} pagination={false} />
  }

  const columns: TableColumnsType<DataType> = [
    { title: 'Tapper Name', dataIndex: 'tapperName', key: 'tapperName' },
    { title: 'ICS Name', dataIndex: 'ICSName', key: 'ICSName' },
    { title: 'Long', dataIndex: 'long', key: 'long' },
    { title: 'Lat', dataIndex: 'lat', key: 'lat' },
    { title: 'Create Date', dataIndex: 'createDate', key: 'createDate' }
  ]
  const data = [
    {
      key: 1,
      tapperName: 'amck.03',
      ICSName: 'dedi dedi',
      long: '107.9896661',
      lat: '-7.4093626',
      createDate: '2020-02-22'
    },
    {
      key: 2,
      tapperName: 'amck.04',
      ICSName: 'dedi dedi',
      long: '107.9896661',
      lat: '-7.4093626',
      createDate: '2020-02-22'
    }
  ]

  return (
    <div className='content'>
      <Typography.Title level={4}>Control Checklist</Typography.Title>
      <div className='control-checklist'>
        <Table
          size='small'
          columns={columns}
          expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
          dataSource={data}
        />
      </div>
    </div>
  )
}

export default ControlChecklist