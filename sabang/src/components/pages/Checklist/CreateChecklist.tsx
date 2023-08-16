import { Button, Form, Input, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function CreateChecklist() {
    const navigate = useNavigate()
    const checklist = () => {
        navigate("/Checklist")
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Checklist</Typography.Title>
            <div className='create-checklist'>
                <Form
                    hideRequiredMark>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please input the name!" }]}>
                        <Input /></Form.Item>
                    <Space size={8}>
                        <Button className='save-btn' type='primary' htmlType='submit'>Save</Button>
                        <Button className='cancel-btn' danger onClick={checklist}>Cancel</Button>
                    </Space>
                </Form>
            </div>
        </div>
    )
}

export default CreateChecklist