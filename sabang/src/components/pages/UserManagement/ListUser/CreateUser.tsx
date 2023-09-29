import { Button, Form, Input, Select, Typography, Space, Col, Row, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import '../../../pages/style/style.css'

interface VillageData {
    name: string,
    code: string
}
interface RoleData {
    name: string,
    description: string
}

function CreateUser() {
    const [villageData, setVillageData] = useState<VillageData[]>([]);
    const [roleData, setRoleData] = useState<RoleData[]>([])
    const [loading, setLoading] = useState<Boolean>();

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const listUser = () => {
        navigate("/ListUser")
    }
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
        axios.get('/roles', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            const roleData = response.data.map((item: any) => ({
                value: item.id,
                label: `${item.name}`
            }));
            setRoleData(roleData)
            setLoading(false)
        }).catch((error) => {
            console.log("Error Fetching Data: ", error)
            setLoading(false)
        })
    }, [])
    const handleFormSubmit = async (values: any) => {
        try {
            const response = await axios.post('/users', values, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
            message.success("User Added")
            navigate('/ListUser')
        } catch (error) {
            console.error("Error Ocured: ", error)
            message.error('Error Ocured')
        }
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create User</Typography.Title>
            <div className='create-user'>
                <Form
                    onFinish={handleFormSubmit}
                    hideRequiredMark
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: "Please input your username!" }]}>
                                <Input /></Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}>
                                <Input.Password /></Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="NIK"
                                name="nik"
                                rules={[{ required: true, message: "Please input your NIK!" }]}>
                                <Input /></Form.Item>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[{ required: true, message: "Please input your phone number!" }]}>
                                <Input /></Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "Please input your email!" }]}>
                                <Input /></Form.Item>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Please input your name!" }]}>
                                <Input /></Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Bank Name"
                                name="bankName"
                                rules={[{ required: false, message: "Please input your bank name!" }]}
                            ><Input /></Form.Item>
                            <Form.Item
                                label="Acc Name"
                                name="accName"
                                rules={[{ required: false, message: "Please input your Acc Name!" }]}
                            ><Input /></Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Village Code"
                                name="villageId"
                                rules={[{ required: false, message: "Please selected one of them!" }]}>
                                <Select
                                    placeholder="Select Village Code"
                                    allowClear
                                    placement="bottomLeft"
                                    listHeight={200}
                                    options={villageData} />
                                {loading && <div>Loading...</div>}
                            </Form.Item>
                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[{ required: true, message: "Please input your address!" }]}>
                                <TextArea rows={5} autoSize={{ minRows: 3, maxRows: 6 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Acc Number"
                                name="accNumber"
                                rules={[{ required: false, message: "Please input your Acc Number!" }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='Roles'
                                name='userRoles'
                                rules={[{ required: true, message: 'Please input the role!' }]}>
                                <Select
                                    mode='multiple'
                                    placeholder="Select Role(s)"
                                    allowClear
                                    placement="bottomLeft"
                                    listHeight={200}
                                    options={roleData} />
                                {loading && <div>Loading...</div>}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Space size={10}>
                        <Button className='save-btn' type='primary' htmlType='submit'>Save</Button>
                        <Button className='cancel-btn' danger onClick={listUser}>Cancel</Button>
                    </Space>
                </Form>
            </div>
        </div >
    )
}
export default CreateUser