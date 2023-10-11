import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function CreateChecklist() {
    useEffect(() => {
        document.title = 'Sabang | Create Checklist'
      }, [])
    const navigate = useNavigate()
    const checklist = () => {
        navigate("/Checklist")
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Checklist</Typography.Title>
            <div className='main-container'>
                <Form
                    className='form-container'
                    hideRequiredMark
                    style={{ width: 950 }}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please input the name!" }]}>
                        <Input /></Form.Item>
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