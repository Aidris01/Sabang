import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../pages/style/style.css'

function CreateRole() {
  const navigate = useNavigate()
  const roles = () => {
    navigate("/Roles")
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Create Role</Typography.Title>
      <div className='create-role'>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          hideRequiredMark>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}>
            <Input /></Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input the description!" }]}>
            <TextArea rows={2} autoSize={{ minRows: 3, maxRows: 6 }} /></Form.Item>
          <Space size={10}>
            <Button className='save-btn' type='primary' htmlType='submit'>Save</Button>
            <Button className='cancel-btn' danger onClick={roles}>Cancel</Button>
          </Space>
        </Form>
      </div>
    </div>
  )
}
export default CreateRole;