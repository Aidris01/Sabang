import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Space, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../../pages/style/style.css'

function CreateVillage() {
    useEffect(() => {
        document.title = 'Sabang | Create Village'
      }, [])
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
            <div className='main-container'>
                <Form
                    className='form-container'
                    onFinish={handleFormSubmit}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    hideRequiredMark
                    style={{width: 900}}>
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
                    <div className="button-container">
                        <Space size={10}>
                            <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                Save
                            </Button>
                            <Button className='cancel-btn' danger onClick={managementVillage} icon={<CloseOutlined />}>
                                Cancel
                            </Button>
                        </Space>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default CreateVillage