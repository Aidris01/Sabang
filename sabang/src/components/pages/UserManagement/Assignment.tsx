import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, message, Space, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';

interface Penyadap {
    id: number,
    name: string
}

function Assignment() {
    useEffect(() => {
        document.title = `Sabang | Assignment ${collectorId} `
    }, [])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const { collectorId } = useParams<Record<string, string>>();
    const [penyadap, setPenyadap] = useState<Penyadap[]>([])
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get('/users/penyadap', config).then((response) => {
            const penyadapOptions = response.data as Penyadap[]
            setPenyadap(penyadapOptions)
            setLoading(false)
        }).catch((error) => {
            console.error('Error Ocured: ', error)
            message.error('Error Fetching Penyadap, Please check the console')
            setLoading(false)
        })
    }, [])
    const handleCancel = () => {
        navigate('/AssignmentTapper')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Assignment - {collectorId}</Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Form
                        className='form-container'
                        hideRequiredMark
                        autoComplete='off'
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 22 }}>
                        <Form.Item
                            label='Penyadap'
                            name='penyadapId'
                            rules={[{ required: true, message: 'Please select the tapper!' }]}>
                            <Checkbox.Group options={
                                penyadap.map(r => ({ value: r.id, label: r.name }))} />
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

export default Assignment