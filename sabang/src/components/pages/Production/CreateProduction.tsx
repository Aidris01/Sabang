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
                console.error('Error Ocured: ', error)
                message.error('Error Ocured, Please check the console')
                setLoading(false)
            })
    }, [])
    const onFinish = async (values: any) => {
        try {
            const productionType = values.productionType

            let url = ''
            if (productionType === 'Production') {
                url = '/productions/production'
            }
            else if (productionType === 'Temporary') {
                url = '/productions/temporary'
            }

            axios.post(url, values, config)
                .then((response) => {
                    message.success('Production Added')
                    console.log(response)
                    navigate('/Production')
                }).catch((error) => {
                    console.error('Error Ocured: ', error)
                    message.error('Error Adding Production, Please check the console')
                })
        } catch (error) {
            console.error('Error Ocured: ', error)
            message.error('Error Ocured, Please check the console')
        }
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Production</Typography.Title>
            <div className="main-container">
                <Form
                    className='form-container'
                    autoComplete='off'
                    onFinish={onFinish}
                    hideRequiredMark
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{width: 850}}>
                    <Form.Item
                        label="Factory Name"
                        name="factory"
                        rules={[{ required: true, message: 'Please choose the factory name!' }]}>
                        <Select
                            placeholder='Select the factory'
                            allowClear
                            placement='bottomLeft'
                            listHeight={200}
                            options={getFactory} />
                    </Form.Item>
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
                            ]} />
                    </Form.Item>
                    <Form.Item
                        label='Total(Kg)'
                        name='Total'
                        rules={[{ required: true, message: 'Please enter the total!' }]}>
                        <Input />
                    </Form.Item>
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