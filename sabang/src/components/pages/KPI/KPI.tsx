import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Table, Tabs, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function KPI() {
  const navigate = useNavigate()

  const AddScore = () => {
    navigate('/KPI/AddScore')
  }
  const [data, setData] = useState([
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
  const [dataAverage, setDataAverage] = useState([
    {
      no: 1,
      tapperName: 'AMKS.06',
      ph: 0.95571428571429,
      brix: 0.68528865921788
    }
  ])
  const columnsAverage = [
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
  const [dataScore, setDataScore] = useState([
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
  const columnsScore = [
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
      <Typography.Title level={4}>KPI Result</Typography.Title>
      <div className='kpi'>
        <Tabs defaultActiveKey='1' items={[
          {
            key: '1',
            label: 'Rating Result',
            children: <Table
              size='small'
              columns={columns}
              dataSource={data}
            />
          },
          {
            key: '2',
            label: 'Average Result',
            children: <Table
              size='small'
              columns={columnsAverage}
              dataSource={dataAverage}
            />
          },
          {
            key: '3',
            label: 'Scores',
            children: <Table
              size='small'
              columns={columnsScore}
              dataSource={dataScore}
            />
          }
        ]}
        >
        </Tabs>
      </div>
    </div>
  )
}

export default KPI