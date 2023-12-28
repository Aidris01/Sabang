import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography, Space, Col, Row, message, Checkbox } from 'antd';
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
    id: number
}

function CreateUser() {
    useEffect(() => {
        document.title = 'Sabang | Create User'
    }, [])
    const [villageData, setVillageData] = useState<VillageData[]>([]);
    const [roleOptions, setRoleOptions] = useState<RoleData[]>([])
    const [loading, setLoading] = useState<Boolean>();

    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const navigate = useNavigate()
    const listUser = () => {
        navigate("/ListUser")
    }
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
            console.log("Error Fetching Data: ", error)
            setLoading(false)
        })
    }, [])
    useEffect(() => {
        axios.get('/roles', config)
        .then((response) => {
            const roleData = response.data as RoleData[];
            setRoleOptions(roleData);
            setLoading(false)
        }).catch((error) => {
            console.log("Error Fetching Data: ", error)
            setLoading(false)
        })
    }, [])
    const handleFormSubmit = async (values: any) => {
        try {
            const response = await axios.post('/users', values, config)
            console.log(response)
            message.success("User Added")
            navigate('/ListUser')
        } catch (error) {
            console.error("Error Ocured: ", error)
            message.error('Error Ocured,Please check the console')
        }
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create User</Typography.Title>
            <div className='main-container'>
                <Form
                    className='form-container'
                    onFinish={handleFormSubmit}
                    hideRequiredMark
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 19 }}
                    autoComplete='off'>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: "Please input your username!" }]}>
                                <Input placeholder='exp: johnDoe' />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}>
                                <Input.Password />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="NIK"
                                name="nik"
                                rules={[{ required: true, message: "Please input your NIK!" }]}>
                                <Input placeholder='exp: 3277020101010032' />
                            </Form.Item>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[{ required: true, message: "Please input your phone number!" }]}>
                                <Input placeholder='exp: 082123456789' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "Please input your email!" }]}>
                                <Input placeholder='exp: Your@email.com' />
                            </Form.Item>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Please input your name!" }]}>
                                <Input placeholder='exp: John Doe' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Bank Name"
                                name="bankName"
                                rules={[{ required: true, message: "Please input your bank name!" }]}>
                                <Input placeholder='exp: Mandiri, BNI' />
                            </Form.Item>
                            <Form.Item
                                label="Acc Name"
                                name="accName"
                                rules={[{ required: true, message: "Please input your Acc Name!" }]}>
                                <Input placeholder='exp: John Doe' />
                            </Form.Item>
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
                                <TextArea rows={5} autoSize={{ minRows: 3, maxRows: 6 }} 
                                placeholder='exp: Jl.ABC no.3'/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Acc Number"
                                name="accNumber"
                                rules={[{ required: true, message: "Please input your Acc Number!" }]}>
                                <Input placeholder='exp: 0085678901' />
                            </Form.Item>
                            <Form.Item
                                label='Roles'
                                name='userRoles'
                                rules={[{ required: false, message: 'Please input the role!' }]}>
                                <Checkbox.Group options={roleOptions.map(r => ({ value: r.id, label: r.name }))} />
                                {loading && <div>Loading...</div>}
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="button-container">
                        <Space size={10}>
                            <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                Save
                            </Button>
                            <Button className='cancel-btn' danger onClick={listUser} icon={<CloseOutlined />}>
                                Cancel
                            </Button>
                        </Space>
                    </div>
                </Form>
                <Form>
                    
                </Form>
            </div>
        </div >
    )
}

export default CreateUser