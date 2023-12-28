import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Descriptions, message, Space, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api/axios';

interface Production {
  id: number,
  creatorName: string,
  factoryName: string,
  barcode: string,
  kilogram: number,
  gram: number,
  type: string,
  factoryId: number,
  creatorId: number,
  createdAt: Date
}

function formatDate(createdAt: Date) {
  const year = createdAt.getFullYear();
  const month = String(createdAt.getMonth() + 1).padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
  const day = String(createdAt.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function DetailProduction() {
  useEffect(() => {
    document.title = `Sabang | Detail Production ${productionId}`
  }, [])
  const { productionId } = useParams<Record<string, string>>()
  const navigate = useNavigate()
  const edit = () => {
    navigate(`/Production/EditProduction/${productionId}`)
  }
  const back = () => {
    navigate('/Production')
  }
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const [loading, setLoading] = useState(true)
  const [production, setProduction] = useState<Production>(
    {
      id: 0,
      creatorName: '',
      factoryName: '',
      barcode: '',
      kilogram: 0,
      gram: 0,
      type: '',
      factoryId: 0,
      creatorId: 0,
      createdAt: new Date()
    }
  )
  useEffect(() => {
    axios.get(`/productions/${productionId}`, config)
      .then((response) => {
        const responseData = response.data

        const createdAt = new Date(responseData.createdAt);
        setProduction({
          id: responseData.id,
          creatorName: responseData.creatorName,
          factoryName: responseData.factoryName,
          barcode: responseData.barcode,
          kilogram: responseData.kilogram,
          gram: responseData.gram,
          type: responseData.type,
          factoryId: responseData.factoryId,
          creatorId: responseData.creatorId,
          createdAt: createdAt
        })
        console.log(setProduction)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Production, Please check the console')
      }).finally(() => {  
        setLoading(false)
      })
  }, [productionId])
  return (
    <div className='content'>
      <Typography.Title level={4}>Detail Produksi - {productionId}</Typography.Title>
      <div className="main-container">
        <Spin spinning={loading}>
          <Descriptions title='Detail Production' layout='vertical' className='form-container'>
            <Descriptions.Item label='ID'>{production.id}</Descriptions.Item>
            <Descriptions.Item label='Operator'>{production.creatorId} - {production.creatorName}</Descriptions.Item>
            <Descriptions.Item label='Factory'>{production.factoryId} - {production.factoryName}</Descriptions.Item>
            <Descriptions.Item label='Barcode'>{production.barcode}</Descriptions.Item>
            <Descriptions.Item label='Kilogram'>{production.kilogram} Kilogram</Descriptions.Item>
            <Descriptions.Item label='Gram'>{production.gram} Gram</Descriptions.Item>
            <Descriptions.Item label='Storage Type'>{production.type}</Descriptions.Item>
            <Descriptions.Item label='Create At'>{formatDate(production.createdAt)}</Descriptions.Item>
          </Descriptions>
        </Spin>
        <div className="button-container">
          <Space>
            <Button className='edit-btn' type='primary' onClick={edit} icon={<EditOutlined />}>
              Edit
            </Button>
            <Button className='back-btn' danger onClick={back} icon={<CloseOutlined />}>
              Back
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default DetailProduction