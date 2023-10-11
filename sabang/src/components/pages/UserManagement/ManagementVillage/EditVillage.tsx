import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Space, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../style/style.css'

interface Village {
    name: string;
    code: string;
}

function EditVillage() {
    const navigate = useNavigate()
    const { villageId } = useParams<Record<string, string>>();
    const [villageData, setVillageData] = useState<Village>({ name: '', code: '' });
    const token = localStorage.getItem('token')
    const [form] = useForm();
    const initialValues = {
        name: form.getFieldValue('name') || '',
        code: form.getFieldValue('code') || ''
    }
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(`/villages/${villageId}`, config)
            .then((response) => {
                form.setFieldsValue(response.data)
                setVillageData(response.data)
            }).catch((error) => {
                message.error('Error Ocured')
                console.error(error)
            })
    }, [token, villageId])

    const onFinish = (values: any) => {
        axios.patch(`/villages/${villageId}`, form.getFieldsValue(), config)
            .then((response) => {
                message.success('Village Updated')
                navigate('/ManagementVillage')
            }).catch((error) => {
                message.error('Error Ocured')
                console.error('Error Ocured: ', error)
            })
    }

    const handleCancel = () => {
        navigate('/ManagementVillage')
    }

    if (!villageData) {
        return <div>Loading...</div>
    }

    return (
        <div className='content'>
            <Typography.Title level={4}>Edit Village - {villageId}</Typography.Title>
            <div className="main-container">
                <Form
                    className='form-container'
                    form={form}
                    hideRequiredMark
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    name='EditVillageForm'
                    onFinish={onFinish}
                    initialValues={initialValues}
                    style={{width: 800}}>
                    <Form.Item
                        name='name'
                        label='Name'
                        rules={[{ required: true, message: 'Please input the name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='code'
                        label='Village Code'
                        rules={[{ required: true, message: 'Please input the code!' }]}>
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
            </div>
        </div>
    )
}
export default EditVillage