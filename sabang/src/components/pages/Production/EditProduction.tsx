import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Select, Space, Spin, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api/axios'

interface Produksi {
  factoryId: number,
  type: string,
  weight: number
}

interface Factory {
  id: number,
  name: string
}

function EditProduction() {
  useEffect(() => {
    document.title = `Sabang | Edit Produksi ${productionId}`
  }, [])
  const { productionId } = useParams<Record<string, string>>()
  const [getFactory, setGetFactory] = useState<Factory[]>([])
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const [form] = useForm()
  const initialValues = {
    factoryId: form.getFieldValue('factoryId') || 0,
    type: form.getFieldValue('type') || '',
    weight: form.getFieldValue('weight') || 0
  }
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [production, setProduction] = useState<Produksi>({
    factoryId: 0,
    type: '',
    weight: 0
  })
  useEffect(() => {
    axios.get('/factories', config)
      .then((response) => {
        const format = response.data.map((item: any) => ({
          value: item.id,
          label: item.name
        }))
        setGetFactory(format)
        setLoading(false)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Ocured, Please check the console')
        setLoading(false)
      })
  }, [])
  useEffect(() => {
    axios.get(`/productions/${productionId}`, config)
      .then((response) => {
        form.setFieldsValue(response.data)
        setProduction(response.data)
        setLoading(false)
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Fetching Production, Please check the console')
        setLoading(false)
      })
  }, [token, productionId, form])

  const onFinish = (values: any) => {
    const weight = parseFloat(values.weight)
    const updatedData = {
      ...values,
      weight
    }
    axios.patch(`/productions/${productionId}`, updatedData, config)
      .then((response) => {
        console.log(response)
        message.success('Production Updated')
        navigate('/Production')
      }).catch((error) => {
        console.error('Error Ocured: ', error)
        message.error('Error Updating Production, Please check the console')
      })
  }
  const handleCancel = () => {
    navigate('/Production')
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Edit Produksi</Typography.Title>
      <div className="main-container">
        <Spin spinning={loading}>
          <Form
            className='form-container'
            form={form}
            hideRequiredMark
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            name='EditedProductionForm'
            onFinish={onFinish}
            initialValues={initialValues}
            style={{ width: 900 }}
            autoComplete='off'>
            <Form.Item
              label="Factory Name"
              name="factoryId"
              rules={[{ required: true, message: 'Please choose the factory name!' }]}>
              <Select
                placeholder='Select the factory'
                allowClear
                placement='bottomLeft'
                listHeight={200}
                options={getFactory} />
            </Form.Item>
            <Form.Item
              label='Production Type'
              name='type'
              rules={[{ required: true, message: 'Please choose the production type!' }]}>
              <Select
                placeholder='Select the production type'
                allowClear
                placement='bottomLeft'
                listHeight={200}
                options={[
                  {
                    value: 'production',
                    label: 'Production'
                  },
                  {
                    value: 'temporary',
                    label: 'Temporary'
                  }
                ]} />
            </Form.Item>
            <Form.Item
              label='Total(Kg)'
              name='weight'
              rules={[{ required: true, message: 'Please enter the total!' }]}>
              <Input type='number' />
            </Form.Item>
            <div className="button-container">
              <Space>
                <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                  Save
                </Button>
                <Button className='cancel-btn' danger onClick={handleCancel} icon={<CloseOutlined />}>
                  Cancel
                </Button>
              </Space>
            </div>
          </Form>
        </Spin>
      </div>
    </div>
  )
}

export default EditProduction