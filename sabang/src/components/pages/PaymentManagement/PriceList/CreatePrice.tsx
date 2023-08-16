import { Button, Form, Input, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../pages/style/style.css'

function CreatePrice() {
  const navigate = useNavigate()
  const priceList = () => {
    navigate("/PriceList")
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Create Price</Typography.Title>
      <div className='create-price'>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          hideRequiredMark>
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
          <Space size={8}>
            <Button className='save-btn' type='primary' htmlType='submit'>Save</Button>
            <Button className='cancel-btn' danger onClick={priceList}>Cancel</Button>
          </Space>
        </Form>
      </div>
    </div>
  )
}

export default CreatePrice