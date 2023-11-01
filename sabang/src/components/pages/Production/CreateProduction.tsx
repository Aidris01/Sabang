import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, message, Row, Select, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import '../style/style.css'

interface Factory {
    id: number,
    name: string
}

function CreateProduction() {
    useEffect(() => {
        document.title = 'Sabang | Create Production'
      }, [])
    const navigate = useNavigate()
    const Production = () => {
        navigate('/Production')
    }
    const [loading, setLoading] = useState(true)
    const [getFactory, setGetFactory] = useState<Factory[]>([])
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get('/factories', config)
        .then((response) => {
            const format = response.data.map((item: any) => ({
                value: item.id,
                label: item.name
            }))
            setGetFactory(format)
            setLoading(false)
        }).catch((error) => {
            console.error('Error Ocured: ',error)
            message.error('Error Ocured, Please check the console')
            setLoading(false)
        })
    },[])
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Production</Typography.Title>
            <div className="main-container">
                <Form
                    className='form-container'
                    hideRequiredMark
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Factory Name"
                                name="factory"
                                rules={[{ required: true, message: 'Please choose the factory name!' }]}>
                                <Select
                                    placeholder='Select the factory'
                                    allowClear
                                    placement='bottomLeft'
                                    listHeight={200}
                                    options={getFactory}/>
                            </Form.Item>
                            <Form.Item
                                label='Type Weight'
                                name='weight'
                                rules={[{ required: true, message: 'Please choose the weight type!' }]}>
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
                                    ]}/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='Production Type'
                                name='productionType'
                                rules={[{ required: true, message: 'Please choose the production type!' }]}>
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
                                    ]}/>
                            </Form.Item>
                            <Form.Item
                                label='Total'
                                name='Total'
                                rules={[{ required: true, message: 'Please enter the total!' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="button-container">
                        <Space size={10}>
                            <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                Save
                            </Button>
                            <Button className='cancel-btn' danger onClick={Production} icon={<CloseOutlined />}>
                                Cancel
                            </Button>
                        </Space>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default CreateProduction