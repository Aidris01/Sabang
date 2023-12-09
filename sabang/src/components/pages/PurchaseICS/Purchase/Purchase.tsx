import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../../pages/style/style.css'

interface Purchases {
  id: number,
  penyadapId: number,
  PurchaserId: number,
  ph: number,
  sugarLevel: number,
  volume: number,
  lat: number,
  lng: number,
  amount: number,
  timestamp: Date,
  updatedAt: Date,
  checkedAt: Date,
  auditedAt: Date,
  penyadap: any,
}

function formatDate(timestamp: Date) {
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
  const day = String(timestamp.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function Purchase() {
  useEffect(() => {
    document.title = 'Sabang | Purchase'
  }, [])
  const token = localStorage.getItem('token');
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    getPurchase(1)
  }, [])
  function getPurchase(page: number) {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    setIsLoading(true)
    axios.get<{ data: Purchases[], totalItems: number }>(`/purchases/paginated?page=${page}&limit=10`, config)
      .then((response) => {
        const purchase = response.data.data
        setTotalItems(response.data.totalItems)
        const updatedData = purchase.map((item: any) => ({
          ...item,
          volume: `${item.volume} Liter`,
          amount: `Rp.${item.amount}`
        }))
        setData(updatedData)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Ocured, Please check the console')
      }).finally(() => {
        setIsLoading(false)
      })
  }
  const deletePurchase = (purchaseId: number) => {
    axios.delete(`/purchases/${purchaseId}`, config)
      .then((response) => {
        // Perbarui data setelah penghapusan berhasil
        const updatedData = data.filter((purchase) => purchase.id !== purchaseId);
        setData(updatedData);
        message.success('Purchase Deleted');
      })
      .catch((error) => {
        console.error('Error Occurred: ', error);
        message.error('Error Deleting Purchase');
      });
  };
  const handleCheck = (id: number) => {
    axios.post(`/purchases/set-check/${id}`, { id }, config)
      .then((response) => {
        console.log(response.data)
        message.success('Status Checked')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Checking, Please check the console')
      })
  }

  const handleUpdate = (id: number) => {
    axios.post(`/purchases/set-update/${id}`, { id }, config)
      .then((response) => {
        console.log(response.data)
        message.success('Status Updated')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Checking, Please check the console')
      })
  }

  const handleAudit = (id: number) => {
    axios.post(`/purchases/set-audit/${id}`, { id }, config)
      .then((response) => {
        console.log(response.data)
        message.success('Status Audited')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Checking, Please check the console')
      })
  }

  const [data, setData] = useState<Purchases[]>([])
  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'statusChecked',
      title: 'Checked',
      dataIndex: 'statusChecked',
      render: (checkedAt: Date, record: Purchases) => record.checkedAt == null ?
        <Popconfirm
          title="Apakah anda yakin untuk mengubah status (ini tidak bisa dikembalikan) ?"
          onConfirm={() => handleCheck(record.id)}
          okText="Yes"
          cancelText="No">
          <Button type='link' style={{ color: 'black' }} >
            Not Checked
          </Button>
        </Popconfirm>
        : <div style={{ textAlign: 'center' }}>Checked</div>
    },
    {
      key: 'statusUpdated',
      title: 'Updated',
      dataIndex: 'statusUpdated',
      render: (updatedAt: Date, record: Purchases) => record.updatedAt == null ?
        <Popconfirm
          title="Apakah anda yakin untuk mengubah status (ini tidak bisa dikembalikan) ?"
          onConfirm={() => handleUpdate(record.id)}
          okText="Yes"
          cancelText="No">
          <Button type='link' style={{ color: 'black' }} >
            Not Updated
          </Button>
        </Popconfirm>
        : <div style={{ textAlign: 'center' }}>Updated</div>
    },
    {
      key: 'timestamp',
      title: 'Date',
      dataIndex: 'timestamp',
      width: 100,
      render: (timestamp: Date) => formatDate(new Date(timestamp))
    },
    {
      key: 'penyadap',
      title: 'Penyadap',
      dataIndex: 'penyadap',
      width: 100,
      render: (penyadap: any) => penyadap.name
    },
    {
      key: 'ph',
      title: 'PH',
      dataIndex: 'ph'
    },
    {
      key: 'sugarLevel',
      title: 'BRIX',
      dataIndex: 'sugarLevel'
    },
    {
      key: 'volume',
      title: 'Volume',
      dataIndex: 'volume'
    },
    {
      key: 'amount',
      title: 'Price',
      dataIndex: 'amount'
    },
    {
      key: 'statusAudited',
      title: 'Audit',
      dataIndex: 'statusAudited',
      width: 100,
      render: (auditedAt: Date, record: Purchases) => record.auditedAt == null ? 'Not Audited' : 'Audited'
    },
    {
      key: '11',
      title: 'Set Audit',
      render: (record: Purchases) => {
        const isAudit = record.auditedAt !== null;
        return isAudit ? 'Has Been Audited' : (
          <Popconfirm
            title="Apakah anda yakin untuk mengubah status (ini tidak bisa dikembalikan) ?"
            onConfirm={() => handleAudit(record.id)}
            okText="Yes"
            cancelText="No"
            disabled={isAudit}>
            <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          </Popconfirm>
        )
      }
    },
    {
      key: '12',
      title: 'Action',
      render: (record: Purchases) => {
        const handleDelete = () => {
          deletePurchase(record.id)
        }
        return <>
          <Link to={`/Purchase/DetailPurchase/${record.id}`}>
            <Button type='link' size='small'><EyeOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Link to={`/Purchase/EditPurchase/${record.id}`}>
            <Button type='link' size='small'><EditOutlined style={{ color: 'black' }} /></Button>
          </Link>
          <Popconfirm
            title="Apakah anda yakin untuk menghapus pembelian ini ?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No">
            <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
          </Popconfirm>
        </>
      },
      width: 100
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Purchase</Typography.Title>
      <div className='main-container'>
        <Spin spinning={isLoading}>
          <Table
            size='small'
            columns={columns}
            dataSource={data}
            scroll={{ x: 'max-content' }}
            onChange={(pagination) => {
              console.log(pagination)
              setCurrentPage(pagination.current ?? 1)
              getPurchase(pagination.current ?? 1)
              console.log(currentPage)
            }}
            pagination={{ total: totalItems }} />
        </Spin>
      </div>
    </div>
  )
}

export default Purchase