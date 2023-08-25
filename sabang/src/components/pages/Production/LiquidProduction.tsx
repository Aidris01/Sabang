import { DeleteOutlined, EditOutlined, EyeOutlined, PrinterOutlined } from '@ant-design/icons'
import { Button, Space, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function LiquidProduction() {
    const navigate = useNavigate()
    const Label = () => {
        navigate('/Production')
    }
    const Tempo = () => {
        navigate('/Production/TempoProduction')
    }
    const Liquid = () => {
        navigate('/Production/LiquidProduction')
    }
    const Today = () => {
        navigate('/Production/ProductionToday')
    }
    const Create = () => {
        navigate('/Production/CreateProduction')
    }
    const [data, setData] = useState([
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
    return (
        <div className='content'>
            <Typography.Title level={4}>Liquid Production</Typography.Title>
            <div className='production'>
                <Space>
                    <Button className='create-btn' type='text' onClick={Label}>Label Production</Button>
                    <Button className='create-btn' type='text' onClick={Tempo}>Label Temporary</Button>
                    <Button className='create-btn' type='text' onClick={Liquid}>Label Liquid/Cair</Button>
                    <Button className='create-btn' type='text' onClick={Today}>Label List</Button>
                    <Button className='create-btn' onClick={Create}>Create Label</Button>
                </Space>
                <div className="production-table">
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

export default LiquidProduction