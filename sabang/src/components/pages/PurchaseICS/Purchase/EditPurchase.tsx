import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Select, Space, Spin, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../style/style.css'

interface PurchaseData {
    penyadapId: number,
    purchaserId: number,
    ph: number,
    sugarLevel: number,
    volume: number,
    lat: number,
    lng: number,
    amount: number
}
interface Penyadap {
    id: number,
    name: string
}

function EditPurchase() {
    useEffect(() => {
        document.title = `Sabang | Edit User ${purchaseId} `
    }, [])
    const { purchaseId } = useParams<Record<string, string>>();
    const [loading, setLoading] = useState(true)
    const [form] = useForm();
    const initialValues = {
        penyadapId: form.getFieldValue('penyadapId') || 0,
        purchaseId: form.getFieldValue('purchaserId') || 0,
        sugarLevel: form.getFieldValue('sugarLevel') || 0,
        volume: form.getFieldValue('volume') || 0,
        amount: form.getFieldValue('amount') || 0,
        lat: form.getFieldValue('lat') || 0,
        lng: form.getFieldValue('lng') || 0,
        ph: form.getFieldValue('ph') || 0
    }
    const navigate = useNavigate()
    const handleCancel = () => {
        navigate('/Purchase')
    }
    const [penyadap, setPenyadap] = useState<Penyadap[]>([])
    const [purchase, setPurchase] = useState<PurchaseData>(
        {
            penyadapId: 0,
            purchaserId: 0,
            sugarLevel: 0,
            volume: 0,
            amount: 0,
            lat: 0,
            lng: 0,
            ph: 0
        }
    )
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get(`/purchases/${purchaseId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            form.setFieldsValue(response.data)
            setPurchase(response.data)
            setLoading(false)
        }).catch((error) => {
            console.error('Error Ocured: ', error)
            message.error('Error Ocured')
            setLoading(false)
        })
    }, [token, form, purchaseId])
    useEffect(() => {
        axios.get('/users/penyadap', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            const format = response.data.map((item: any) => ({
                value: item.id,
                label: item.name
            }))
            setPenyadap(format)
            setLoading(false)
        })
    }, [])
    const onFinish = (values: any) => {
        axios.patch(`/purchases/${purchaseId}`, form.getFieldsValue(), {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            message.success('Puchase Updated')
            navigate('/Purchase')
        }).catch((error) => {
            message.error('Error Ocured')
            console.error('Error Ocured: ', error)
        })
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Edit Purchase - {purchaseId}</Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Form
                        className='form-container'
                        form={form}
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 22 }}
                        hideRequiredMark
                        onFinish={onFinish}
                        initialValues={initialValues}>
                        <Form.Item
                            label='Penyadap'
                            name='penyadapId'
                            rules={[{ required: true, message: 'Please select the tapper!' }]}>
                            <Select
                                placeholder='Select Tapper'
                                allowClear
                                placement="bottomLeft"
                                listHeight={200}
                                options={penyadap} />
                        </Form.Item>
                        <Form.Item
                            label='Purchaser'
                            name='purchaserId'>
                            <Select />
                        </Form.Item>
                        <Form.Item
                            label='Sugar Level'
                            name='sugarLevel'
                            rules={[{ required: true, message: 'Please input the sugar level!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='Volume'
                            name='volume'
                            rules={[{ required: true, message: 'Please input the volume!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='PH'
                            name='ph'
                            rules={[{ required: true, message: 'Please input the ph!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='Amount'
                            name='amount'>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='Lat'
                            name='lat'>
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label='Long'
                            name='lng'>
                            <Input disabled />
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

export default EditPurchase