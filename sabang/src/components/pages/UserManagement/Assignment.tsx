import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, message, Space, Spin, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';

interface Penyadap {
    userId: number,
    name: string,
    disabled: boolean,
    isSelected: boolean
}

function Assignment() {
    useEffect(() => {
        document.title = `Sabang | Assignment ${collectorId}`
    }, [])
    const navigate = useNavigate()      
    const [form] = useForm()
    const initialValues = {
        isSelected: form.getFieldValue('isSelected') || false
    }
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
        axios.get(`/users/penyadap-for-pengepul/${collectorId}`, config)
            .then((response) => {
                const penyadapOptions = response.data as Penyadap[]
                setPenyadap(penyadapOptions)
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Fetching Penyadap, Please check the console')
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    const handleCancel = () => {
        navigate('/AssignmentTapper')
    }
    // const onFinish = (values: any) => {
    //     axios.patch(`/users/penyadap-for-pengepul/${collectorId}`, values, config)
    //         .then((response) => {
    //             message.success('Assignment Updated')
    //             navigate('/AssignmentTapper')
    //         }).catch((error) => {
    //             console.error('Error Ocured: ', error)
    //             message.error('Error Updating Assignment, Please check the console')
    //         })
    // }
    return (
        <div className='content'>
            <Typography.Title level={4}>Assignment - {collectorId}</Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Form
                        className='form-container'
                        form={form}
                        initialValues={initialValues}
                        // onFinish={onFinish}
                        hideRequiredMark
                        autoComplete='off'
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 22 }}>
                        <Form.Item
                            label='Penyadap'
                            name='penyadapId'
                            valuePropName='checked'
                            rules={[{ required: false, message: 'Please select the tapper!' }]}>
                            {penyadap.map((r) => (
                                <Checkbox
                                    key={r.userId}
                                    checked={r.isSelected}
                                    disabled={r.disabled}
                                    onChange={(e) => {
                                        const updatedPenyadap = penyadap.map(item => {
                                            if (item.userId === r.userId) {
                                                return { ...item, isSelected: e.target.checked };
                                            }
                                            return item;
                                        });
                                        setPenyadap(updatedPenyadap);
                                    }}>
                                    {r.name}
                                </Checkbox>
                            ))}
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