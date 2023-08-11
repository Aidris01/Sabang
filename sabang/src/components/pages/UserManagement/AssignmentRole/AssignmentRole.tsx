import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../pages/style/style.css'

function AssignmentRole() {
  const navigate= useNavigate()
  const roles = () => {
    navigate("/Roles")
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Assignment Roles</Typography.Title>
      <div className='assignment-role'>
        <Form hideRequiredMark
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input the name!" }]}>
                <Input /></Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: "Please input the description!" }]}>
                <TextArea rows={2} /></Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Rule Name"
                name="ruleName"
                rules={[{ required: true, message: "Please input the rule!" }]}>
                <Input /></Form.Item>
              <Form.Item
                label="Data"
                name="data"
                rules={[{ required: true, message: "Please input the data!" }]}>
                <TextArea rows={4} /></Form.Item>
            </Col>
          </Row>
          <Space size={10}>
            <Button className='save-btn' type='primary' htmlType='submit'>Save</Button>
            <Button className='cancel-btn' danger onClick={roles}>Cancel</Button>
          </Space>
        </Form>
      </div>
    </div>
  )
}

export default AssignmentRole;