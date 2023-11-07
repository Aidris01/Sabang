import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, message, Row, Select, Space, Spin, Typography, } from 'antd'
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
    villageId: string,
    userRoles: any[]
}
interface VillageData {
    name: string,
    code: string
}
interface RoleData {
    name: string,
    id: number
}

function EditUser() {
    useEffect(() => {
        document.title = `Sabang | Edit User ${userId}`
    }, [])
    const [form] = useForm()
    const initialValues = {
        name: form.getFieldValue('name') || '',
        nik: form.getFieldValue('nik') || '',
        phone: form.getFieldValue('phone') || '',
        address: form.getFieldValue('address') || '',
        email: form.getFieldValue('email') || '',
        villageId: form.getFieldValue('villageId') || '',
        userRoles: form.getFieldValue('userRoles') || []
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
            villageId: '',
            userRoles: []
        }
    );
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const [villageData, setVillageData] = useState<VillageData[]>([]);
    const [roleOptions, setRoleOptions] = useState<RoleData[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/users/${userId}`, config)
            .then((response) => {
                const userRolesData = response.data.userRoles.map((role: { roleId: any; }) => role.roleId);
                const combinedData = {
                    ...response.data,
                    userRoles: userRolesData
                }
                console.log(combinedData)
                form.setFieldsValue(combinedData)
                setUserData(response.data)
                setLoading(false)
            }).catch((error) => {
                message.error('Error Fetching Data, Please check the console', error)
                setLoading(false)
            })
    }, [token, userId, form])
    useEffect(() => {
        axios.get('/villages', config)
            .then((response) => {
                const formattedData = response.data.map((item: any) => ({
                    value: item.id,
                    label: `${item.code} ${item.name}`
                }));
                setVillageData(formattedData)
                setLoading(false)
            }).catch((error) => {
                message.error('Error Fetching Village, Please check the console')
                console.log("Error Fetching Vilage: ", error)
                setLoading(false)
            })
    }, [token])
    useEffect(() => {
        axios.get('/roles', config)
            .then((response) => {
                const roleData = response.data as RoleData[];
                setRoleOptions(roleData);
                setLoading(false)
            }).catch((error) => {
                message.error('Error Fetching Roles, Please check the console')
                console.log("Error Fetching Roles: ", error)
                setLoading(false)
            })
    }, [token])

    const onFinish = (values: any) => {
        axios.patch(`/users/${userId}`, form.getFieldsValue(), config)
            .then((response) => {
                message.success('User Updated')
                navigate('/ListUser')
            }).catch((error) => {
                message.error("Error Ocured, Please check the console")
                console.error('Error Ocured: ', error)
            })
    }
    const handleCancel = () => {
        navigate('/ListUser')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Edit User - {userId}</Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Form
                        className='form-container'
                        form={form}
                        hideRequiredMark
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 19 }}
                        name='EditedUserForm'
                        onFinish={onFinish}
                        initialValues={initialValues}
                        autoComplete='off'>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: "Please enter your name!" }]}>
                                    <Input placeholder='exp: John Doe' />
                                </Form.Item>
                                <Form.Item
                                    name='nik'
                                    label='NIK'
                                    rules={[{ required: true, message: 'Please enter your nik!' }]}>
                                    <Input placeholder='exp: 327702.....' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name='phone'
                                    label='Phone'
                                    rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                                    <Input placeholder='exp: 082.....' />
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
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name='email'
                                    label='Email'
                                    rules={[{ required: true, message: 'Please enter your email!' }]}>
                                    <Input placeholder='exp: Your@email.com' />
                                </Form.Item>
                                <Form.Item
                                    name='userRoles'
                                    label='Roles'
                                    rules={[{ required: false, message: 'Please select the role' }]}>
                                    <Checkbox.Group options={
                                        roleOptions.map(r => ({ value: r.id, label: r.name }))
                                    } />
                                </Form.Item>
                                <Form.Item
                                    name='address'
                                    label='Address'
                                    rules={[{ required: true, message: 'Please enter your address!' }]}>
                                    <TextArea rows={5} autoSize={{ minRows: 4, maxRows: 7 }}
                                        placeholder='exp: Jl.ABC' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name='bankName'
                                    label='Bank Name'
                                    rules={[{ required: true, message: 'Please input the bank name!' }]}>
                                    <Input placeholder='exp: Mandiri, BNI' />
                                </Form.Item>
                                <Form.Item
                                    name='accName'
                                    label='Acc Name'
                                    rules={[{ required: true, message: 'Please input your account name!' }]}>
                                    <Input placeholder='exp: John Doe' />
                                </Form.Item>
                                <Form.Item
                                    name='accNumber'
                                    label='Acc Number'
                                    rules={[{ required: true, message: 'Please input your account number!' }]}>
                                    <Input placeholder='exp: 008......' />
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

export default EditUser