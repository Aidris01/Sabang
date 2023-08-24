import { Button, Col, Form, Input, Row, Select, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/style.css'

function CreateProduction() {
    const navigate = useNavigate()
    const Production = () => {
        navigate('/Production')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Production</Typography.Title>
            <div className="create-production">
                <Form
                    hideRequiredMark
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Factory Name"
                                name="factory"
                                rules={[{ required: true, message: 'Please choose the factory name!' }]}
                            >
                                <Select
                                    placeholder='Select the factory'
                                    allowClear
                                    placement='bottomLeft'
                                    listHeight={200}
                                    options={[
                                        {
                                            value: 'Mandalasari',
                                            label: 'Mandalasari'
                                        },
                                        {
                                            value: 'Bunikasih',
                                            label: 'Bunikasih'
                                        }
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                label='Type Weight'
                                name='weight'
                                rules={[{ required: true, message: 'Please choose the weight type!' }]}
                            >
                                <Select
                                    placeholder='Select the weight type'
                                    allowClear
                                    placement='bottomLeft'
                                    listHeight={200}
                                    options={[
                                        {
                                            value: 'Kilogram',
                                            label: 'Kilogram'
                                        },
                                        {
                                            value: 'Gram',
                                            label: 'Gram'
                                        }
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='Production Type'
                                name='productionType'
                                rules={[{ required: true, message: 'Please choose the production type!' }]}
                            >
                                <Select
                                    placeholder='Select the production type'
                                    allowClear
                                    placement='bottomLeft'
                                    listHeight={200}
                                    options={[
                                        {
                                            value: 'Production',
                                            label: 'Production'
                                        },
                                        {
                                            value: 'Temporary',
                                            label: 'Temporary'
                                        }
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                label='Total'
                                name='Total'
                                rules={[{ required: true, message: 'Please enter the total!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Space size={10}>
                        <Button className='save-btn' type='primary' htmlType='submit'>Save</Button>
                        <Button className='cancel-btn' danger onClick={Production}>Cancel</Button>
                    </Space>
                </Form>
            </div>
        </div>
    )
}

export default CreateProduction