import { DeleteOutlined, EditOutlined, EyeOutlined, PrinterOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row, Select, Space, Table, Tabs, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function Production() {
  const navigate = useNavigate()
  const createLabel = () => {
    navigate('/Production/CreateProduction')
  }
  const Create = <Button style={{marginRight: 10}} onClick={createLabel}>Create Production</Button>
  const [data, setData] = useState([
    {
      id: 1,
      operator: 'Santi Prasinta',
      factory: 'Mandalasari',
      barcode: '0000008312',
      kilo: 11.5,
      gram: 11500,
      createDate: '2020-08-20'
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
      title: 'Operator',
      dataIndex: 'operator',
      width: 200
    },
    {
      key: '3',
      title: 'Factory',
      dataIndex: 'factory',
      width: 200
    },
    {
      key: '4',
      title: 'Barcode',
      dataIndex: 'barcode',
      width: 200
    },
    {
      key: '5',
      title: 'In Kilogram',
      dataIndex: 'kilo'
    },
    {
      key: '6',
      title: 'In Gram',
      dataIndex: 'gram'
    },
    {
      key: '7',
      title: 'Create Date',
      dataIndex: 'createDate'
    },
    {
      key: '8',
      title: 'Action',
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined /></Button>
          <Button type='link' size='small'><EditOutlined /></Button>
          <Button type='link' size='small'><PrinterOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      },
      width: 250
    }
  ]
  const [dataTempo, setDataTempo] = useState([
    {
      id: 1,
      createNewLabel: '(not set)',
      operator: 'Santi Prasinta',
      factory: 'Mandalasari',
      barcode: '0000008312',
      kilo: 11.5,
      gram: 11500,
      createDate: '2020-08-20'
    }
  ])
  const columnsTempo = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '9',
      title: 'Create New Label',
      dataIndex: 'createNewLabel'
    },
    {
      key: '2',
      title: 'Operator',
      dataIndex: 'operator',
      width: 200
    },
    {
      key: '3',
      title: 'Factory',
      dataIndex: 'factory',
      width: 200
    },
    {
      key: '4',
      title: 'Barcode',
      dataIndex: 'barcode',
      width: 200
    },
    {
      key: '5',
      title: 'In Kilogram',
      dataIndex: 'kilo'
    },
    {
      key: '6',
      title: 'In Gram',
      dataIndex: 'gram'
    },
    {
      key: '7',
      title: 'Create Date',
      dataIndex: 'createDate'
    },
    {
      key: '8',
      title: 'Action',
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined /></Button>
          <Button type='link' size='small'><PrinterOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      },
      width: 250
    }
  ]
  const [dataLiquid, setDataLiquid] = useState([
    {
      id: 1,
      operator: 'Santi Prasinta',
      factory: 'Mandalasari',
      barcode: '0000008311',
      kilo: 12.5,
      gram: 12500,
      createDate: '2020-10-20'
    },
    {
      id: 2,
      operator: 'Santi Prasinta',
      factory: 'Bunikasih',
      barcode: '0000008321',
      kilo: 14.0,
      gram: 14000,
      createDate: '2021-12-01'
    }
  ])
  const columnsLiquid = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Operator',
      dataIndex: 'operator',
      width: 200
    },
    {
      key: '3',
      title: 'Factory',
      dataIndex: 'factory',
      width: 200
    },
    {
      key: '4',
      title: 'Barcode',
      dataIndex: 'barcode',
      width: 200
    },
    {
      key: '5',
      title: 'In Kilogram',
      dataIndex: 'kilo'
    },
    {
      key: '6',
      title: 'In Gram',
      dataIndex: 'gram'
    },
    {
      key: '7',
      title: 'Create Date',
      dataIndex: 'createDate'
    },
    {
      key: '8',
      title: 'Action',
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined /></Button>
          <Button type='link' size='small'><EditOutlined /></Button>
          <Button type='link' size='small'><PrinterOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      },
      width: 250
    }
  ]
  const [dataToday, setDataToday] = useState([
    {
      id: 1,
      operator: 'Santi Prasinta',
      factory: 'Mandalasari',
      barcode: '0000008312',
      kilo: 11.5,
      gram: 11500
    },
    {
      id: 2,
      operator: 'Santi Prasinta',
      factory: 'Bunikasih',
      barcode: '0000008324',
      kilo: 21.0,
      gram: 21000
    }
  ])
  const columnsToday = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Operator',
      dataIndex: 'operator',
      width: 200
    },
    {
      key: '3',
      title: 'Factory',
      dataIndex: 'factory',
      width: 200
    },
    {
      key: '4',
      title: 'Barcode',
      dataIndex: 'barcode',
      width: 200
    },
    {
      key: '5',
      title: 'In Kilogram',
      dataIndex: 'kilo'
    },
    {
      key: '6',
      title: 'In Gram',
      dataIndex: 'gram'
    },
    {
      key: '7',
      title: 'Action',
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined /></Button>
          <Button type='link' size='small'><EditOutlined /></Button>
          <Button type='link' size='small'><PrinterOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      },
      width: 200
    }
  ]
  const [dataWeek, setDataWeek] = useState([
    {
      id: 1,
      operator: 'Santi Prasinta',
      factory: 'Mandalasari',
      barcode: '0000008312',
      kilo: 11.5,
      gram: 11500
    },
    {
      id: 2,
      operator: 'Santi Prasinta',
      factory: 'Bunikasih',
      barcode: '0000008324',
      kilo: 21.0,
      gram: 21000
    },
    {
      id: 3,
      operator: 'Santi Prasinta',
      factory: 'Mandalasari',
      barcode: '0000008333',
      kilo: 12.4,
      gram: 12400
    }
  ])
  const columnsWeek = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Operator',
      dataIndex: 'operator',
      width: 200
    },
    {
      key: '3',
      title: 'Factory',
      dataIndex: 'factory',
      width: 200
    },
    {
      key: '4',
      title: 'Barcode',
      dataIndex: 'barcode',
      width: 200
    },
    {
      key: '5',
      title: 'In Kilogram',
      dataIndex: 'kilo'
    },
    {
      key: '6',
      title: 'In Gram',
      dataIndex: 'gram'
    },
    {
      key: '7',
      title: 'Action',
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined /></Button>
          <Button type='link' size='small'><EditOutlined /></Button>
          <Button type='link' size='small'><PrinterOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      },
      width: 200
    }
  ]
  const [dataMonth, setDataMonth] = useState([
    {
      id: 1,
      operator: 'Santi Prasinta',
      factory: 'Mandalasari',
      barcode: '0000008312',
      kilo: 11.5,
      gram: 11500
    },
    {
      id: 2,
      operator: 'Santi Prasinta',
      factory: 'Bunikasih',
      barcode: '0000008324',
      kilo: 21.0,
      gram: 21000
    },
    {
      id: 3,
      operator: 'Santi Prasinta',
      factory: 'Mandalasari',
      barcode: '0000008333',
      kilo: 12.4,
      gram: 12400
    },
    {
      id: 4,
      operator: 'Santi Prasinta',
      factory: 'Mandalasari',
      barcode: '0000008327',
      kilo: 21.0,
      gram: 21000
    }
  ])
  const columnsMonth = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Operator',
      dataIndex: 'operator',
      width: 200
    },
    {
      key: '3',
      title: 'Factory',
      dataIndex: 'factory',
      width: 200
    },
    {
      key: '4',
      title: 'Barcode',
      dataIndex: 'barcode',
      width: 200
    },
    {
      key: '5',
      title: 'In Kilogram',
      dataIndex: 'kilo'
    },
    {
      key: '6',
      title: 'In Gram',
      dataIndex: 'gram'
    },
    {
      key: '7',
      title: 'Action',
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined /></Button>
          <Button type='link' size='small'><EditOutlined /></Button>
          <Button type='link' size='small'><PrinterOutlined /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      },
      width: 200
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Production</Typography.Title>
      <div className='production'>
        <Tabs tabBarExtraContent={Create} defaultActiveKey='1' items={[
          {
            key: '1',
            label: 'Production',
            children: <Table
              size='small'
              columns={columns}
              dataSource={data}
            />
          },
          {
            key: '2',
            label: 'Label Temporary',
            children: <Table
              size='small'
              columns={columnsTempo}
              dataSource={dataTempo}
            />
          },
          {
            key: '3',
            label: 'Label Liquid',
            children: <Table
              size='small'
              columns={columnsLiquid}
              dataSource={dataLiquid}
            />
          },
          {
            key: '4',
            label: 'Label Today',
            children: <Table
              size='small'
              columns={columnsToday}
              dataSource={dataToday}
            />
          },
          {
            key: '5',
            label: 'Label Week',
            children: <Table
              size='small'
              columns={columnsWeek}
              dataSource={dataWeek}
            />
          },
          {
            key: '6',
            label: 'Label Month',
            children: <Table
              size='small'
              columns={columnsMonth}
              dataSource={dataMonth}
            />
          }
        ]}
        />
      </div>
    </div>
  )
}

export default Production