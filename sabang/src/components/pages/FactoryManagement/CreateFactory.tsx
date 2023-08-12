import { Button, Col, Form, Input, Row, Space, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import '../../pages/style/style.css'
import { useNavigate } from 'react-router-dom'

function CreateFactory() {
  const navigate = useNavigate()
  const factoryManagement = () => {
    navigate("/FactoryManagement")
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Create Factory</Typography.Title>
      <div className='create-factory'>
        <Form
          hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input the name!" }]}>
                <Input /></Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: "Please input your address!" }]}
              ><TextArea rows={6} /></Form.Item>
            </Col>
            <Col>
            </Col>
          </Row>
          <Space size={10}>
            <Button className='save-btn' type='primary' htmlType='submit'>Save</Button>
            <Button className='cancel-btn' danger onClick={factoryManagement}>Cancel</Button>
          </Space>
        </Form>
      </div>
    </div>
  )
}

export default CreateFactory