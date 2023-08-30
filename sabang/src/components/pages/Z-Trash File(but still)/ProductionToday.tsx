import { DeleteOutlined, EditOutlined, EyeOutlined, PrinterOutlined } from '@ant-design/icons'
import { Button, Space, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function ProductionToday() {
    const navigate = useNavigate()
    const Today = () => {
        navigate('/Production/ProductionToday')
    }
    const Week = () => {
        navigate('/Production/ProductionWeek')
    }
    const Month = () => {
        navigate('/Production/ProductionMonth')
    }
    const Back = () => {
        navigate('/Production')
    }
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
    return (
        <div className='content'>
            <Typography.Title level={4}>Production Today</Typography.Title>
            <div className='production'>
                <Space>
                    <Button className='create-btn' type='text' onClick={Today}>Today</Button>
                    <Button className='create-btn' type='text' onClick={Week}>Week</Button>
                    <Button className='create-btn' type='text' onClick={Month}>Month</Button>
                    <Button className='create-btn' onClick={Back}>Back</Button>
                </Space>
                <div className="production-table">
                    <Table
                        size='small'
                        columns={columnsToday}
                        dataSource={dataToday}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductionToday