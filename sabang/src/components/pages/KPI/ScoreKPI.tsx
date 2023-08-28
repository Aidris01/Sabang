import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function ScoreKPI() {
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
    const [ data, setData ] = useState([
        {
            id: 1,
            tapperName: 'amct.01',
            averageBrix: 0.77206703910615,
            averagePh: 0.92812242857143,
            shelter: 'yes',
            pandai: 'no',
            scoreTotal: 2.7001894676776,
            average: 2.7001894676776,
            dateInputScore: '2019-04-29'
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
            title: 'Tapper Name',
            dataIndex: 'tapperName'
        },
        {
            key: '3',
            title: 'Average Brix',
            dataIndex: 'averageBrix'
        },
        {
            key: '4',
            title: 'Average Ph',
            dataIndex: 'averagePh'
        },
        {
            key: '5',
            title: 'To Shelter',
            dataIndex: 'shelter'
        },
        {
            key: '6',
            title: 'Has Pandai',
            dataIndex: 'pandai'
        },
        {
            key: '7',
            title: 'Score Total',
            dataIndex: 'scoreTotal'
        },
        {
            key: '8',
            title: 'Average',
            dataIndex: 'average'
        },
        {
            key: '9',
            title: 'Date Input Score',
            dataIndex: 'dateInputScore'
        },
        {
            key: '10',
            title: 'Action',
            width: 2000,
            render: () => {
                return <>
                    <Button type='link' size='small'><EyeOutlined /></Button>
                    <Button type='link' size='small'><EditOutlined /></Button>
                    <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
                </>
            }
        }
    ]
    return (
        <div className='content'>
            <Typography.Title level={4}>Score KPI</Typography.Title>
            <div className='score'>
                <Button className='create-btn' onClick={Rating}>Rating Result</Button>
                <Button className='create-btn' onClick={Average}>Average Result</Button>
                <Button className='create-btn' onClick={Score}>Scores</Button>
                <div className="score-kpi">
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

export default ScoreKPI