import { Button, Form, Input, Select, Typography, Space, Col, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../pages/style/style.css'

function CreateUser() {

    const navigate = useNavigate()
    const listUser = () => [
        navigate("/ListUser")
    ]

    return (
        <div className='content'>
            <Typography.Title level={4}>Create User</Typography.Title>
            <div className='create-user'>
                <Form
                    hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: "Please input your username!" }]}
                            >
                                <Input /></Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}
                            >
                                <Input.Password /></Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="NIK"
                                name="nik"
                                rules={[{ required: true, message: "Please input your NIK!" }]}
                            >
                                <Input /></Form.Item>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[{ required: true, message: "Please input your phone number!" }]}
                            ><Input /></Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "Please input your email!" }]}
                            >
                                <Input /></Form.Item>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Please input your name!" }]}
                            >
                                <Input /></Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Bank Name"
                                name="bankName"
                                rules={[{ required: true, message: "Please input your bank name!" }]}
                            ><Input /></Form.Item>
                            <Form.Item
                                label="Acc Name"
                                name="accName"
                                rules={[{ required: true, message: "Please input your Acc Name!" }]}
                            ><Input /></Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Village Code"
                                name="vilageCode"
                                rules={[{ required: true, message: "Please selected one of them!" }]}
                            ><Select
                                placeholder="Select Village Code"
                                allowClear
                                placement="bottomLeft"
                                listHeight={200}
                                options={[{
                                    value: "AMCT",
                                    label: "AMCT"
                                },
                                {
                                    value: "AMKM",
                                    label: "AMKM"
                                },
                                {
                                    value: "AMSA",
                                    label: "AMSA"
                                },
                                {
                                    value: "AMSM",
                                    label: "AMSM"
                                },
                                {
                                    value: "AMCK",
                                    label: "AMCK"
                                },
                                {
                                    value: "AMKS",
                                    label: "AMKS"
                                },
                                {
                                    value: "AMJA",
                                    label: "AMJA"
                                },
                                {
                                    value: "AMBK",
                                    label: "AMBK"
                                }
                                ]}
                            >
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Acc Number"
                                name="accNumber"
                                rules={[{ required: true, message: "Please input your Acc Number!" }]}
                            ><Input /></Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: "Please input your address!" }]}
                    ><TextArea rows={4} />
                    </Form.Item>
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