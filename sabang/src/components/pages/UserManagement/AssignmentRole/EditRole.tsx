import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Space, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../style/style.css'

interface RoleData {
    name: string,
    description: string
}

function EditRole() {
    useEffect(() => {
        document.title = `Sabang | Edit Role ${roleId}`
      }, [])
    const navigate = useNavigate()
    const { roleId } = useParams<Record<string, string>>();
    const [form] = useForm()
    const initialValues = {
        name: form.getFieldValue('name') || '',
        description: form.getFieldValue('description') || ''
    }
    const [roleData, setRoleData] = useState<RoleData>(
        {
            name: '',
            description: ''
        }
    )
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get(`/roles/${roleId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            form.setFieldsValue(response.data)
            setRoleData(response.data)
        }).catch((error) => {
            console.error('Error Ocured: ', error)
            message.error('Error Fetching Data')
        })
    }, [token, roleId, form])

    const onFinish = (values: any) => {
        axios.patch(`/roles/${roleId}`, form.getFieldsValue(), {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            message.success('Role Updated')
            navigate('/Roles')
            console.log(roleData)
        }).catch((error) => {
            message.error("Error Ocured")
            console.error('Error Ocured: ', error)
        })
    }
    const handleCancel = () => {
        navigate('/Roles')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Edit Role - {roleId}</Typography.Title>
            <div className="main-container">
                <Form
                    className='form-container'
                    form={form}
                    hideRequiredMark
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    name='EditedUserForm'
                    onFinish={onFinish}
                    initialValues={initialValues}
                    style={{width: 800}}>
                    <Form.Item
                        name='name'
                        label='Name'
                        rules={[{ required: true, message: 'Please input the role name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='description'
                        label='Description'
                        rules={[{ required: true, message: 'Please input the description' }]}>
                        <TextArea rows={2} autoSize={{ minRows: 3, maxRows: 6 }} />
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

export default EditRole