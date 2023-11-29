import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined, PrinterOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Checkbox, message, Popconfirm, Space, Spin, Table, Tabs, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import '../../pages/style/style.css'

interface Production {
  id: number,
  creatorName: string,
  factoryName: string,
  barcode: string,
  kilogram: number,
  gram: number,
  createdAt: Date
}

function formatDate(createdAt: Date) {
  const year = createdAt.getFullYear();
  const month = String(createdAt.getMonth() + 1).padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
  const day = String(createdAt.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function Production() {
  useEffect(() => {
    document.title = 'Sabang | Production'
  }, [])
  const navigate = useNavigate()
  const createLabel = () => {
    navigate('/Production/CreateProduction')
  }
  const generateTotal = () => {
    navigate('/Production/GenerateTotal')
  }
  const Create =
    <Space>
      <Button
        style={{ marginRight: 10, width: '100%' }}
        onClick={createLabel}
        icon={<PlusOutlined />}>
        Create Production
      </Button>
      <Button
        style={{ marginRight: 10 }}
        onClick={generateTotal}
        icon={<SettingOutlined />}>
        Generate Total
      </Button>
    </Space>

  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    axios.get('/productions', config)
      .then((response) => {
        const updatedData = response.data.map((item: any) => ({
          ...item,
          kilogram: `${item.kilogram} Kg`,
          gram: `${item.gram} Gram`
        }))
        setData(updatedData)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error OCured, Please check the console')
      }).finally(() => {
        setLoading(false)
      })
  }, [])
  const deleteProduction = (productionId: number) => {
    axios.delete(`/productions/${productionId}`, config)
      .then((response) => {
        message.success('Production Deleted')
        console.log(response)
        setData((prevData) => prevData.filter((productions) => productions.id !== productionId))
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Deleting Production, Please check the console')
      })
  }
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Production[]>([])
  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: 'creator',
      title: 'Operator',
      dataIndex: 'creatorName',
      width: 200
    },
    {
      key: 'factory',
      title: 'Factory',
      dataIndex: 'factoryName',
      width: 200
    },
    {
      key: 'barcode',
      title: 'Barcode',
      dataIndex: 'barcode',
      width: 200
    },
    {
      key: 'kilo',
      title: 'In Kilogram',
      dataIndex: 'kilogram'
    },
    {
      key: 'gram',
      title: 'In Gram',
      dataIndex: 'gram',
      width: 200
    },
    {
      key: 'createDate',
      title: 'Create Date',
      dataIndex: 'createdAt',
      render: (createdAt: Date) => formatDate(new Date(createdAt))
    },
    {
      key: '8',
      title: 'Action',
      render: (record: Production) => {
        const handleDelete = () => {
          deleteProduction(record.id)
        }
        return <>
          <Link to={`/Production/DetailProduction/${record.id}`}>
            <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Link to={`/Production/EditProduction/${record.id}`}>
            <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Link to={`/Production/PrintBarcode/${record.id}`}>
            <Button type='link' size='small'><PrinterOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Popconfirm
            title="Apakah anda yakin untuk menghapus produksi ini ?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No">
            <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
          </Popconfirm>
        </>
      },
      width: 350
    },
  ]
  const [dataTempo, setDataTempo] = useState<Production[]>([])
  const columnsTempo = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '9',
      title: 'Create New Label',
      dataIndex: 'createNewLabel'
    },
    {
      key: 'operator',
      title: 'Operator',
      dataIndex: 'operatorName',
      width: 200
    },
    {
      key: 'factory',
      title: 'Factory',
      dataIndex: 'factoryName',
      width: 200
    },
    {
      key: 'barcode',
      title: 'Barcode',
      dataIndex: 'barcode',
      width: 200
    },
    {
      key: 'kilogram',
      title: 'In Kilogram',
      dataIndex: 'kilogram'
    },
    {
      key: 'gram',
      title: 'In Gram',
      dataIndex: 'gram'
    },
    {
      key: 'createAt',
      title: 'Create Date',
      dataIndex: 'createdAt'
    },
    {
      key: 'action',
      title: 'Action',
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><PrinterOutlined style={{ color: 'black' }} /></Button>
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
          <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><PrinterOutlined style={{ color: 'black' }} /></Button>
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
          <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><PrinterOutlined style={{ color: 'black' }} /></Button>
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
          <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><PrinterOutlined style={{ color: 'black' }} /></Button>
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
          <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><PrinterOutlined style={{ color: 'black' }} /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      },
      width: 200
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Production</Typography.Title>
      <div className='main-container'>
        <Tabs tabBarExtraContent={Create} defaultActiveKey='1' items={[
          {
            key: '1',
            label: 'Production',
            children:
              <Spin spinning={loading}>
                <Table
                  size='small'
                  columns={columns}
                  dataSource={data} />
              </Spin>
          },
          {
            key: '2',
            label: 'Label Temporary',
            children: <Table
              size='small'
              columns={columnsTempo}
              dataSource={dataTempo} />
          },
          {
            key: '3',
            label: 'Label Liquid',
            children: <Table
              size='small'
              columns={columnsLiquid}
              dataSource={dataLiquid} />
          },
          {
            key: '4',
            label: 'Label Today',
            children: <Table
              size='small'
              columns={columnsToday}
              dataSource={dataToday} />
          },
          {
            key: '5',
            label: 'Label Week',
            children: <Table
              size='small'
              columns={columnsWeek}
              dataSource={dataWeek} />
          },
          {
            key: '6',
            label: 'Label Month',
            children: <Table
              size='small'
              columns={columnsMonth}
              dataSource={dataMonth} />
          }
        ]} />
      </div>
    </div>
  )
}

export default Production