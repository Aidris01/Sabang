import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Table, Tabs, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../../pages/style/style.css'

interface Purchase {
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
  paidAt: Date,
  checkedAt: Date,
  auditedAt: Date
}
interface PenyadapGet {
  id: number,
  name: string
}
function formatDate(timestamp: Date) {
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
  const day = String(timestamp.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function checkedStatus(checkedAt: Date | null): string {
  if (checkedAt === null) {
    return 'Not Checked'
  } else {
    return 'Checked'
  }
}
function auditStatus(auditedAt: Date | null): string {
  if (auditedAt === null) {
    return 'Not Audited'
  } else {
    return 'Audited'
  }
}
function updateStatus(paidAt: Date | null): string {
  if (paidAt === null) {
    return 'Not Updated'
  } else {
    return 'Updated'
  }
}
function Purchase() {
  useEffect(() => {
    document.title = 'Sabang | Purchase'
  }, [])
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(true);
  const [getPenyadap, setGetPenyadap] = useState<PenyadapGet[]>([])
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios.get('/purchases', config)
      .then((response) => {
        const updatedData = response.data.map((purchase: any) => {
          // Update statusChecked property based on checkedAt
          purchase.statusChecked = checkedStatus(purchase.checkedAt);
          purchase.statusAudited = auditStatus(purchase.auditedAt);
          purchase.statusUpdated = updateStatus(purchase.paidAt)
          return purchase;
        });

        setData(updatedData);
        setIsLoading(false);
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        setIsLoading(false)
      })
  }, [])
  useEffect(() => {
    axios.get(`/users/penyadap`, config)
      .then((responsePenyadap) => {
        setGetPenyadap(responsePenyadap.data)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
      })
  }, [])
  const getTapperName = (penyadapId: number) => {
    const penyadap = getPenyadap.find((penyadap: any) => penyadap.id === penyadapId);
    return penyadap ? penyadap.name : 'Unknown Tapper'
  }
  const deletePurchase = (purchaseId: number) => {
    axios
      .delete(`/purchases/${purchaseId}`, config)
      .then((response) => {
        // Perbarui data setelah penghapusan berhasil
        const updatedData = data.filter((purchase) => purchase.id !== purchaseId);
        setData(updatedData);
        message.success('Pembelian berhasil dihapus');
      })
      .catch((error) => {
        console.error('Error Occurred: ', error);
        message.error('Gagal menghapus pembelian');
      });
  };

  const [data, setData] = useState<Purchase[]>([])
  const columns = [
    {
      key: 'id',
      title: 'Purchase ID',
      dataIndex: 'id'
    },
    {
      key: 'statusChecked',
      title: 'Status Checked',
      dataIndex: 'statusChecked',
      width: 300
    },
    {
      key: 'statusUpdated',
      title: 'Status Updated',
      dataIndex: 'statusUpdated',
      width: 300
    },
    {
      key: 'timestamp',
      title: 'Create Date',
      dataIndex: 'timestamp',
      width: 100,
      render: (timestamp: Date) => formatDate(new Date(timestamp))
    },
    {
      key: 'penyadapId',
      title: 'Tapper',
      dataIndex: 'penyadapId',
      width: 100,
      render: (penyadapId: number) => getTapperName(penyadapId)
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
      title: 'Nira Volume',
      dataIndex: 'volume'
    },
    {
      key: 'amount',
      title: 'Total Price',
      dataIndex: 'amount'
    },
    {
      key: 'statusAudited',
      title: 'Status Audit',
      dataIndex: 'statusAudited',
      width: 300
    },
    {
      key: '11',
      title: 'Set Audit',
      render: () => <Button type='link' size='small'><EditOutlined style={{color: 'black'}} /></Button>
    },
    {
      key: '12',
      title: 'Action',
      render: (record: Purchase) => {
        const handleDelete = () => {
          deletePurchase(record.id)
        }
        return <>
          <Link to={`/Purchase/DetailPurchase/${record.id}`}>
            <Button type='link' size='small'><EyeOutlined style={{color: 'black'}} /></Button>
          </Link>
          <Link to={`/Purchase/EditPurchase/${record.id}`}>
            <Button type='link' size='small'><EditOutlined style={{color: 'black'}} /></Button>
          </Link>
          <Popconfirm
            title="Apakah anda yakin untuk menghapus role ini ?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No">
            <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
          </Popconfirm>
        </>
      },
      width: 500
    }
  ]

  const [dataWeek, setDataWeek] = useState([
    {
      id: 1,
      purchaseID: 613332,
      tapper: 'amct.02',
      purchaser: 'Santi Prasinta',
      createDate: '2001-09-11',
      totalPrice: 'IDR 7,900,00'
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
      title: 'Purchase ID',
      dataIndex: 'purchaseID',
      width: 100
    },
    {
      key: '3',
      title: 'Tapper',
      dataIndex: 'tapper',
      width: 200
    },
    {
      key: '4',
      title: 'Purchaser',
      dataIndex: 'purchaser',
      width: 200
    },
    {
      key: '5',
      title: 'Create Date',
      dataIndex: 'createDate',
      width: 200
    },
    {
      key: '6',
      title: 'Total Price',
      dataIndex: 'totalPrice',
      width: 200
    },
    {
      key: '13',
      title: 'Action',
      render: () => {
        return <>
          <Button type='link' size='small'><EyeOutlined style={{color: 'black'}} /></Button>
          <Button type='link' size='small'><EditOutlined style={{color: 'black'}} /></Button>
          <Button type='link' size='small'><DeleteOutlined style={{ color: 'red' }} /></Button>
        </>
      },
      width: 150
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Purchase</Typography.Title>
      <div className='main-container'>
        <Tabs defaultActiveKey='1' items={[
          {
            key: '1',
            label: 'Purchase',
            children: <Table
              loading={isLoading}
              size='small'
              columns={columns}
              dataSource={data}
            />
          },
          {
            key: '2',
            label: 'Purchase Week',
            children: <Table
              size='small'
              columns={columnsWeek}
              dataSource={dataWeek}
            />
          }
        ]}
        ></Tabs>
      </div>
    </div>
  )
}

export default Purchase