import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Space, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../../pages/style/style.css'

function CreatePrice() {
  useEffect(() => {
    document.title = 'Sabang | Create Price'
  }, [])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const priceList = () => {
    navigate("/PriceList")
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const handleFormSubmit = async (values: any) => {
    const sugarLevel = parseFloat(values.sugarLevel)
    const price = parseFloat(values.price)

    const updatedData = {
      sugarLevel,
      price
    }
    try {
      const response = await axios.post('/price_lists', updatedData, config)
      console.log('Response', response)
      message.success('Price Added')
      navigate('/PriceList')
    } catch (error) {
      console.error('Error Ocured: ', error)
      message.error('Error Ocured, Please check the console')
    }
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Create Price</Typography.Title>
      <div className='main-container'>
        <Form
          className='form-container'
          onFinish={handleFormSubmit}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          hideRequiredMark
          style={{ width: 800 }}
          autoComplete='off'>
          <Form.Item
            label="Sugar Level"
            name="sugarLevel"
            rules={[{ required: true, message: "Please input the sugar level!" }]}>
            <Input /></Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input the price!" }]}>
            <Input /></Form.Item>
          <div className="button-container">
            <Space size={8}>
              <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                Save
              </Button>
              <Button className='cancel-btn' danger onClick={priceList} icon={<CloseOutlined />}>
                Cancel
              </Button>
            </Space>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default CreatePrice