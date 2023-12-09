import { EyeOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { Button, Input, message, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../../pages/style/style.css'

interface Garden {
  id: number,
  timestamp: Date,
  penyadap: any,
  ics: any,
}
function formatDate(timestamp: Date) {
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, '0');
  const day = String(timestamp.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function ICS() {
  useEffect(() => {
    document.title = 'Sabang | ICS'
  }, [])
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    axios.get('/garden-controls', config)
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Garden, Please check the console')
      }).finally(() => {
        setLoading(false)
      })
  }, [])
  const [search, setSearch] = useState('')
  const onSearch = (value: any) => {
    setSearch(value)
  }
  const [sort, setSort] = useState<'asc' | 'desc'>('asc')
  const handleSort = () => {
    const nextSort = sort === 'asc' ? 'desc' : 'asc';
    setSort(nextSort)

    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (sort === 'asc') {
        return b.id - a.id
      } else {
        return a.id - b.id
      }
    })
    setData(sortedData)
  }
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Garden[]>([])
  const columns = [
    {
      key: '1',
      title: (
        <div onClick={handleSort}>
          ID<span>{sort ===  'asc' ? <SortAscendingOutlined /> : <SortDescendingOutlined />}</span>
        </div>
      ),
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Tapper',
      dataIndex: 'penyadap',
      width: 300,
      render: (penyadap: any) => penyadap.name,
      filteredValue: search ? [search] : null,
      onFilter: (value: any, record: Garden) =>
        record.penyadap.name.toLowerCase().startsWith(search.toLowerCase()),
    },
    {
      key: '3',
      title: 'ICS Name',
      dataIndex: 'ics',
      width: 300,
      render: (ics: any) => ics.name
    },
    {
      key: '4',
      title: 'Create Date',
      dataIndex: 'timestamp',
      width: 300,
      render: (timestamp: Date) => formatDate(new Date(timestamp))
    },
    {
      key: '5',
      title: 'Action',
      render: (record: Garden) => {
        return <>
          <Link to={`/ICS/DetailICS/${record.id}`}>
            <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          </Link>
        </>
      },
      width: 100
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>ICS</Typography.Title>
      <div className='main-container'>
        <div style={{ margin: 10 }}>
          <Input
            placeholder='Search Penyadap'
            onChange={(e) => onSearch(e.target.value)}
            style={{ marginLeft: 10, width: 200 }} />
        </div>
        <Spin spinning={loading}>
          <Table
            size='small'
            columns={columns}
            dataSource={data} />
        </Spin>
      </div>
    </div>
  )
}

export default ICS