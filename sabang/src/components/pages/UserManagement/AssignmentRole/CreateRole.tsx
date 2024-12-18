import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Space, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../../pages/style/style.css'

function CreateRole() {
  useEffect(() => {
    document.title = 'Sabang | Create Role'
  }, [])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const roles = () => {
    navigate("/Roles")
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const handleFormSubmit = async (values: any) => {
    try {
      const response = await axios.post('/roles', values, config)
      console.log('Response', response)
      message.success('Role Added')
      navigate('/roles')
    } catch (error) {
      console.error('Error Ocured: ', error)
      message.error('Error Ocured')
    }
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Create Role</Typography.Title>
      <div className='main-container'>
        <Form
          className='form-container'
          onFinish={handleFormSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          hideRequiredMark
          style={{width: 900}}
          autoComplete='off'>
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
          <div className="button-container">
            <Space size={10}>
              <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                Save
              </Button>
              <Button className='cancel-btn' danger onClick={roles} icon={<CloseOutlined />}>
                Cancel
              </Button>
            </Space>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default CreateRole;