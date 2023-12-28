import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Space, Spin, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../style/style.css'

interface Price {
    sugarLevel: number,
    price: number
}

function EditPrice() {
    useEffect(() => {
        document.title = `Sabang | Detail Price ${priceId}`
    }, [])
    const { priceId } = useParams<Record<string, string>>();
    const [form] = useForm()
    const initialValues = {
        sugarLevel: form.getFieldValue('sugarLevel') || 0,
        price: form.getFieldValue('price') || 0
    }
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [price, setPrice] = useState<Price>(
        {
            sugarLevel: 0,
            price: 0
        }
    )
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get(`/price_lists/${priceId}`, config)
            .then((response) => {
                form.setFieldsValue(response.data)
                setPrice(response.data)
                setLoading(false)
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured, Please check the console')
                setLoading(false)
            })
    }, [token, priceId, form])

    const onFinish = (values: any) => {
        const sugarLevel = parseFloat(values.sugarLevel)
        const price = parseFloat(values.price)

        const updatedData = {
            sugarLevel,
            price
        }
        axios.patch(`/price_lists/${priceId}`, updatedData, config)
            .then((response) => {
                message.success('Price Updated')
                navigate('/PriceList')
                console.log(response)
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured, Please check the console')
            })
    }
    const handleCancel = () => {
        navigate('/PriceList')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}></Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Form
                        className='form-container'
                        form={form}
                        hideRequiredMark
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        name='EditedPriceForm'
                        onFinish={onFinish}
                        initialValues={initialValues}
                        style={{ width: 900 }}
                        autoComplete='off'>
                        <Form.Item
                            label='Sugar Level'
                            name='sugarLevel'
                            rules={[{ required: true, message: 'Please input the sugar level!' }]}>
                            <Input type='number' />
                        </Form.Item>
                        <Form.Item
                            label='Price'
                            name='price'
                            rules={[{ required: true, message: 'Please input the price!' }]}>
                            <Input type='number' />
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

export default EditPrice