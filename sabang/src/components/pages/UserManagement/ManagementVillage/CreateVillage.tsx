import { Button, Form, Input, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../pages/style/style.css'

function CreateVillage() {
    const navigate = useNavigate()
    const managementVillage = () => {
        navigate("/ManagementVillage")
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Village</Typography.Title>
            <div className='create-village'>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    hideRequiredMark>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please input the village name!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Village Code"
                        name="villageCode"
                        rules={[{ required: true, message: "Please input the village code !" }]}>
                        <Input />
                    </Form.Item>
                </Form>
                <Space size={10}>
                    <Button className='save-btn' type='primary' htmlType='submit'>Save</Button>
                    <Button className='cancel-btn' danger onClick={managementVillage}>Cancel</Button>
                </Space>
            </div>
        </div>
    )
}

export default CreateVillage