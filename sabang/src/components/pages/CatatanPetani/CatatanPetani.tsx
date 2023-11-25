import { EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message, Spin, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import '../../pages/style/style.css'

interface Petani {
  id: number,
  petaniId: number,
  kodeLahan: string
}

function CatatanPetani() {
  useEffect(() => {
    document.title = 'Sabang | Catatan Petani'
  }, [])
  const navigate = useNavigate()
  const createPetani = () => {
    navigate('/CatatanPetani/CreatePetani')
  }
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const [loading, setLoading] = useState(true)
  const [pdf, setPdf] = useState(false)
  useEffect(() => {
    axios.get('/catatan-pekerjaan', config)
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Data, Please check the console')
      }).finally(() => {
        setLoading(false)
      })
  }, [])
  const handlePdf = async (id: number) => {
    try {
      setPdf(true)
      const response = await axios.get(`/catatan-pekerjaan/pdf/${id}`, {
        ...config,
        responseType: 'blob'
      })
      const blob = new Blob([response.data], {type: 'application/pdf'});
      const pdfUrl = URL.createObjectURL(blob)
      window.open(pdfUrl)
      setPdf(false)
    } catch (error) {
      console.error('Error Ocured: ',error)
      message.error('Error Fetching PDF, Please check the console')
      setPdf(false)
    }
  }
  const [data, setData] = useState<Petani[]>([])
  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Kode Lahan',
      dataIndex: 'kodeLahan',
      width: 200
    },
    {
      key: '3',
      title: 'Petani',
      dataIndex: 'petaniId',
      width: 900
    },
    {
      key: '4',
      title: 'Cetak',
      width: 200,
      render: (record: Petani) => {
        return <>
          <Button type='link' size='small' onClick={() => handlePdf(record.id)} disabled={pdf}>
            <EyeOutlined style={{ color: 'black' }} />
          </Button>
        </>
      }
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Catatan Petani</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={createPetani} icon={<PlusOutlined />}>
          Create Catatan
        </Button>
        <Spin spinning={loading || pdf}>
          <Table
            size='small'
            columns={columns}
            dataSource={data} />
        </Spin>
      </div>
    </div>
  )
}

export default CatatanPetani