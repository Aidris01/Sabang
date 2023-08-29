import { EyeOutlined } from '@ant-design/icons'
import { Button, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function CatatanPupuk() {
  const navigate = useNavigate()
  const createPupuk = () => {
    navigate('/CatatanPupuk/CreatePupuk')
  }
  const [ data, setData ] = useState([
    {
      no: 1,
      docId: "60",
      petani: 'amct.02'
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
      render: () => <Button type='link' size='small'><EyeOutlined /></Button>
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Catatan Pupuk</Typography.Title>
      <div className='catatan-pupuk'>
        <Button className='create-btn' onClick={createPupuk}>Create Catatan</Button>
        <div className="pupuk-table">
          <Table 
          size='small'
          columns={columns}
          dataSource={data}/>
        </div>
      </div>
    </div>
  )
}

export default CatatanPupuk