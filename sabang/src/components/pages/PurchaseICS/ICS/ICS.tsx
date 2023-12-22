import { EyeOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { Button, message, Spin, Table, Typography } from 'antd'
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
  const [loading, setLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC')
  const [data, setData] = useState<Garden[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [number] = useState(1)
  useEffect(() => {
    setSortOrder('DESC')
    getGarden(1, 'DESC')
  }, [])
  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
    setSortOrder(newSortOrder);
    getGarden(currentPage, newSortOrder);
  };
  function getGarden(page: number, sortOrder: 'ASC' | 'DESC') {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    setLoading(true)
    axios.get<{ data: Garden[], total: number }>(`/garden-controls/paginated?page=${page}&limit=10&sort=${sortOrder}`, config)
      .then((response) => {
        const garden = response.data.data
        setTotalItems(response.data.total)
        setData(garden)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching ICS, Please check the console')
      }).finally(() => {
        setLoading(false)
      })
  }
  const columns = [
    {
      key: '1',
      title: 'No', render: (text: any, record: any, index: number) => {
        return <span>{number + index + (currentPage - 1) * 10}</span>
      }
    },
    {
      key: '2',
      title: 'Tapper',
      dataIndex: 'penyadap',
      width: 300,
      render: (penyadap: any) => penyadap.name,
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
          <Button onClick={toggleSortOrder}>
            {sortOrder ? <SortAscendingOutlined /> : <SortDescendingOutlined />}
            Sort {sortOrder ? 'Ascending' : 'Descending'}
          </Button>
        </div>
        <Spin spinning={loading}>
          <Table
            size='small'
            columns={columns}
            dataSource={data}
            onChange={(pagination) => {
              console.log(pagination)
              setCurrentPage(pagination.current ?? 1)
              getGarden(pagination.current ?? 1, sortOrder)
              console.log(currentPage)
            }}
            pagination={{ total: totalItems }} />
        </Spin>
      </div>
    </div>
  )
}

export default ICS