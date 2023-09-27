import { Button, Form, Input, message, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../../pages/style/style.css'

function CreateVillage() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const managementVillage = () => {
        navigate("/ManagementVillage")
    }

    const handleFormSubmit = async (values: any) => {
        try {
            const response = await axios.post('/villages', values, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("Response Server: ", response.data)
            message.success("Village Added")
            navigate('/ManagementVillage')
        } catch (error) {
            console.error("Error Ocured: ", error)
            message.error('Error Ocured')
        }
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Village</Typography.Title>
            <div className='create-village'>
                <Form
                    onFinish={handleFormSubmit}
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
                        name="code"
                        rules={[{ required: true, message: "Please input the village code !" }]}>
                        <Input />
                    </Form.Item>
                    <Space size={10}>
                        <Button className='save-btn-village' type='primary' htmlType='submit'>
                            Save
                        </Button>
                        <Button className='cancel-btn-village' danger onClick={managementVillage}>
                            Cancel
                        </Button>
                    </Space>
                </Form>
            </div>
        </div>
    )
}

export default CreateVillage