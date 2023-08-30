import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function AverageKPI() {
    const navigate = useNavigate()
    const Rating = () => {
        navigate('/KPI')
    }
    const Average = () => {
        navigate('/AverageKPI')
    }
    const Score = () => {
        navigate('/ScoreKPI')
    }
    const AddScore = () => {
        navigate('/AverageKPI/AddScore')
    }
    const [ data, setData ] = useState([
        {
            no: 1,
            tapperName: 'AMKS.06',
            ph: 0.95571428571429,
            brix: 0.68528865921788
        }
    ])
    const columns = [
        {
            key: '1',
            title: 'No',
            dataIndex: 'no'
        },
        {
            key: '2',
            title: 'Tapper Name',
            dataIndex: 'tapperName',
            width: 700
        },
        {
            key: '3',
            title: 'Ph',
            dataIndex: 'ph',
            width: 700
        },
        {
            key: '4',
            title: 'BRIX',
            dataIndex: 'brix',
            width: 700
        },
        {
            key: '5',
            title: 'Input Shelter & Rek. Pandai',
            width: 500,
            render: () => <Button type='link' size='small' onClick={AddScore}>Add Score</Button>
        }
    ]
    return (
        <div className='content'>
            <Typography.Title level={4}>Average KPI</Typography.Title>
            <div className='average'>
                <Button className='create-btn' onClick={Rating}>Rating Result</Button>
                <Button className='create-btn' onClick={Average}>Average Result</Button>
                <Button className='create-btn' onClick={Score}>Scores</Button>
                <div className="average-kpi">
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

export default AverageKPI