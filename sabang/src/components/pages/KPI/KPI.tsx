import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function KPI() {
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
      no: 1,
      tapperName: 'AMKS.01',
      ph: 0.92857142857143,
      brix: 0.67597765363128
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
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Rating Result</Typography.Title>
      <div className='kpi'>
        <Button className='create-btn' onClick={Rating}>Rating Result</Button>
        <Button className='create-btn' onClick={Average}>Average Result</Button>
        <Button className='create-btn' onClick={Score}>Scores</Button>
        <div className="kpi-table">
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

export default KPI