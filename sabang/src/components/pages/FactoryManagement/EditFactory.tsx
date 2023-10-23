import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, message, Row, Space, Spin, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api/axios'
import '../style/style.css'

interface Factory {
    name: string,
    address: string,
    lat: number,
    lng: number
}

function EditFactory() {
    useEffect(() => {
        document.title = `Sabang | Edit Factory ${factoryId}`
    }, [])
    const [form] = useForm()
    const initialValues = {
        name: form.getFieldValue('name') || '',
        address: form.getFieldValue('address') || '',
        lat: form.getFieldValue('lat') || 0,
        lng: form.getFieldValue('lng') || 0
    }
    const navigate = useNavigate()
    const { factoryId } = useParams<Record<string, string>>();
    const [factory, setFactory] = useState<Factory>(
        {
            name: '',
            address: '',
            lat: 0,
            lng: 0
        }
    )
    const token = localStorage.getItem('token')
    const [loading, setLoading] = useState(true)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get(`/factories/${factoryId}`, config)
            .then((response) => {
                form.setFieldsValue(response.data)
                setFactory(response.data)
                setLoading(false)
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured')
            })
    }, [token, factoryId, form])
    const onFinish = (values: any) => {
        const lat = parseFloat(values.lat)
        const lng = parseFloat(values.lng)

        if (isNaN(lat) || isNaN(lng)) {
            message.error('Latitude and Longitude must be valid numbers');
            return; // Menghentikan operasi jika angka tidak valid
        }

        const updatedFactory = {
            ...values,
            lat,
            lng
        }
        axios.patch(`/factories/${factoryId}`, updatedFactory, config)
            .then((response) => {
                message.success('Factory Updated')
                navigate('/FactoryManagement')
            }).catch((error) => {
                console.error('Erro Ocured: ', error)
                message.error('Error Ocured')
            })
    }
    const handleCancel = () => {
        navigate('/FactoryManagement')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Edit Factory - {factoryId}</Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Form
                        className='form-container'
                        form={form}
                        onFinish={onFinish}
                        hideRequiredMark
                        initialValues={initialValues}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 19 }}
                        autoComplete='off'
                        name='EditedFactoryForm'>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name='name'
                                    label='Name'
                                    rules={[{ required: true, message: 'Please input the name!' }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name='address'
                                    label='Address'
                                    rules={[{ required: true, message: 'Please input the address!' }]}>
                                    <TextArea rows={5} autoSize={{ minRows: 4, maxRows: 7 }} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name='lat'
                                    label='Lat'
                                    rules={[{ required: true, message: 'Please input the latitude!' }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name='lng'
                                    label='Long'
                                    rules={[{ required: true, message: 'Please input the Longitude!' }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
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

export default EditFactory