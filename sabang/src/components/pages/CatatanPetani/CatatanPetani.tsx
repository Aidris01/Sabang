import { EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function CatatanPetani() {
  useEffect(() => {
    document.title = 'Sabang | Catatan Petani'
  }, [])
  const navigate = useNavigate()
  const createPetani = () => {
    navigate('/CatatanPetani/CreatePetani')
  }
  const [ data, setData ] = useState([
    {
      no: 1,
      docId: '220',
      petani: 'amks.40'
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
      title: 'Document ID',
      dataIndex: 'docId',
      width: 200
    },
    {
      key: '3',
      title: 'Petani',
      dataIndex: 'petani',
      width: 900
    },
    {
      key: '4',
      title: 'Cetak',
      width: 200,
      render: () => <Button type='link' size='small'><EyeOutlined style={{color: 'black'}} /></Button>
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Catatan Petani</Typography.Title>
      <div className='main-container'>
        <Button className='create-btn' onClick={createPetani} icon={<PlusOutlined />}>
          Create Catatan
        </Button>
        <div className="petani-table">
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

export default CatatanPetani