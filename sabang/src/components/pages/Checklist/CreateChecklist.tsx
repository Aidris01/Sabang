import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Radio, Space, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import '../../pages/style/style.css'

function CreateChecklist() {
    useEffect(() => {
        document.title = 'Sabang | Create Checklist'
    }, [])
    const navigate = useNavigate()
    const checklist = () => {
        navigate("/Checklist")
    }
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const handleFormSubmit = async (values: any) => {
        try {
            const response = await axios.post('/checklists', values, config)
            console.log('Response: ', response)
            message.success('Checklist Added')
            navigate('/Checklist')
        } catch (error) {
            console.error('Error Ocured: ')
            message.error('Error Ocured')
        }
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Checklist</Typography.Title>
            <div className='main-container'>
                <Form
                    className='form-container'
                    onFinish={handleFormSubmit}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    hideRequiredMark
                    style={{ width: 900 }}
                    autoComplete='off'>
                    <Form.Item
                        label="Name"
                        name="title"
                        rules={[{ required: true, message: "Please input the name!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Type"
                        name='type'
                        rules={[{required: true, message: 'Please select type of checklist'}]}>
                        <Radio.Group>
                            <Radio value="text">
                                Text
                            </Radio>
                            <Radio value="image">
                                Image
                            </Radio>
                            <Radio value="check">
                                Check
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <div className="button-container">
                        <Space size={8}>
                            <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                Save
                            </Button>
                            <Button className='cancel-btn' danger onClick={checklist} icon={<CloseOutlined />}>
                                Cancel
                            </Button>
                        </Space>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default CreateChecklist