import { Button, Col, Form, Input, message, Row, Select, Space, Typography, } from 'antd'
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../../../api/axios';
import '../../style/style.css'

interface UserData {
    name: string,
    nik: string,
    phone: string,
    address: string,
    email: string,
    bankName: string,
    accName: string,
    accNumber: string,
    villageId: string
}
interface VillageData {
    name: string,
    code: string
}
interface RoleData {
    name: string,
    description: string
}

function EditUser() {
    const [form] = useForm()
    const initialValues = {
        name: form.getFieldValue('name') || '',
        nik: form.getFieldValue('nik') || '',
        phone: form.getFieldValue('phone') || '',
        address: form.getFieldValue('address') || '',
        email: form.getFieldValue('email') || '',
        villageId: form.getFieldValue('villageId') || ''
    }
    const navigate = useNavigate()
    const { userId } = useParams<Record<string, string>>();
    const [userData, setUserData] = useState<UserData>(
        {
            name: '',
            nik: '',
            phone: '',
            address: '',
            email: '',
            bankName: '',
            accName: '',
            accNumber: '',
            villageId: ''
        }
    );
    const token = localStorage.getItem('token')
    const [villageData, setVillageData] = useState<VillageData[]>([]);
    const [roleData, setRoleData] = useState<RoleData[]>([])
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        axios.get('/villages', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            const formattedData = response.data.map((item: any) => ({
                value: item.id,
                label: `${item.code} ${item.name}`
            }));
            setVillageData(formattedData)
            setLoading(false)
        }).catch((error) => {
            console.log("Error Fetching Data: ", error)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        axios.get(`/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            form.setFieldsValue(response.data)
            setUserData(response.data)
        }).catch((error) => {
            message.error('Error Ocured', error)
        })
    }, [token, userId])
    useEffect(() => {
        axios.get('/roles', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            const formattedRole = response.data.map((item: any) => ({
                value: item.id,
                label: `${item.name}`
            }));
            setRoleData(formattedRole)
            setLoading(false)
        }).catch((error) => {
            console.log("Error Fetching Data: ", error)
            setLoading(false)
        })
    }, [])

    const onFinish = (values: any) => {
        axios.patch(`/users/${userId}`, form.getFieldsValue(), {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            message.success('User Updated')
            navigate('/ListUser')
        }).catch((error) => {
            message.error("Error Ocured")
            console.error('Error Ocured: ', error)
        })
    }
    const handleCancel = () => {
        navigate('/ListUser')
    }

    if (!userData) {
        return <div>Loading...</div>
    }

    return (
        <div className='content'>
            <Typography.Title level={4}>Edit User - {userId}</Typography.Title>
            <div className="edit-user">
                <Form
                    form={form}
                    hideRequiredMark
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    name='EditedUserForm'
                    onFinish={onFinish}
                    initialValues={initialValues}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: "Please enter your name!" }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='nik'
                                label='NIK'
                                rules={[{ required: true, message: 'Please enter your nik!' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name='phone'
                                label='Phone'
                                rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name='villageId'
                                label='Village ID'
                                rules={[{ required: false, message: 'Please select the village code!' }]}>
                                <Select
                                    placeholder="Select Village Code"
                                    allowClear
                                    placement="bottomLeft"
                                    listHeight={200}
                                    options={villageData} />
                                {loading && <div>Loading...</div>}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name='email'
                                label='Email'
                                rules={[{ required: true, message: 'Please enter your email!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                            name='userRoles'
                            label='Roles'
                            rules={[{required: true, message: 'Please select the role'}]}>
                                <Select 
                                mode='multiple'
                                placeholder="Select Village Code"
                                allowClear
                                placement="bottomLeft"
                                listHeight={200}
                                options={roleData}/>
                                {loading && <div>Loading...</div>}
                            </Form.Item>
                            <Form.Item
                                name='address'
                                label='Address'
                                rules={[{ required: true, message: 'Please enter your address!' }]}>
                                <TextArea rows={5} autoSize={{ minRows: 4, maxRows: 7 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name='bankName'
                                label='Bank Name'
                                rules={[{ required: true, message: 'Please input the bank name!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                            name='accName'
                            label='Acc Name'
                            rules={[{required: true, message: 'Please input your account name!'}]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                            name='accNumber'
                            label='Acc Number'
                            rules={[{required: true, message: 'Please input your account number!'}]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Space>
                        <Button className='save-btn' type='primary' htmlType='submit'>
                            Save
                        </Button>
                        <Button className='cancel-btn' danger onClick={handleCancel}>
                            Cancel
                        </Button>
                    </Space>
                </Form>
            </div>
        </div>
    )
}
export default EditUser