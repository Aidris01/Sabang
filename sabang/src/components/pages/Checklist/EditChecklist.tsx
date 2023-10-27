import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Space, Spin, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api/axios'
import '../style/style.css'

interface Checklist {
    title: string,
    type: string
}

function EditChecklist() {
    useEffect(() => {
        document.title = `Sabang | Edit Checklist ${checklistId} `
    }, [])
    const navigate = useNavigate()
    const { checklistId } = useParams<Record<string, string>>();
    const [form] = useForm()
    const initialValues = {
        title: form.getFieldValue('title') || '',
        type: form.getFieldValue('type') || ''
    }
    const [loading, setLoading] = useState(true)
    const [checklist, setChecklist] = useState<Checklist>(
        {
            title: '',
            type: ''
        }
    )
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get(`/checklists/${checklistId}`, config)
            .then((response) => {
                form.setFieldsValue(response.data)
                setChecklist(response.data)
                setLoading(false)
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured')
                setLoading(false)
            })
    }, [token, checklistId, form])
    const onFinish = (values: any) => {
        axios.patch(`/checklists/${checklistId}`, form.getFieldsValue, config)
            .then((response) => {
                message.success('Checklist updated')
                navigate('/Checklist')
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured')
            })
    }
    const handleCancel = () => {
        navigate('/Checklist')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Edit Checklist - {checklistId}</Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Form
                        className='form-container'
                        form={form}
                        onFinish={onFinish}
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        hideRequiredMark
                        initialValues={initialValues}
                        autoComplete='off'
                        name='EditedChecklistForm'>
                        <Form.Item
                            name='title'
                            label='Name'
                            rules={[{ required: true, message: 'Please input the name!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                        name='type'
                        label='Type'
                        rules={[{required: true, message: 'Please input the type!'}]}>
                            <Input />
                        </Form.Item>
                        <div className="button-container">
                            <Space>
                                <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                    Save
                                </Button>
                                <Button className='cancel-btn' danger onClick={handleCancel} icon={<CloseOutlined />}>
                                    Cancel
                                </Button>
                            </Space>
                        </div>
                    </Form>
                </Spin>
            </div>
        </div>
    )
}

export default EditChecklist