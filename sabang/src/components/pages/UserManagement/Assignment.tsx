import { CloseOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, message, Spin, Typography } from 'antd'
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
        userId: form.getFieldValue('userId') || 0,
        name: form.getFieldValue('name') || '',
        disabled: form.getFieldValue('disabled') || false,
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
    return (
        <div className='content'>
            <Typography.Title level={4}>Assignment - {collectorId}</Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Form
                        className='form-container'
                        form={form}
                        initialValues={initialValues}
                        hideRequiredMark
                        autoComplete='off'
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 22 }}>
                        <Form.Item
                            label='Penyadap'
                            name='isSelected'
                            valuePropName='checked'>
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
                                        const updatedData = {
                                            pengepulId: collectorId,
                                            penyadapId: r.userId,
                                            isSelected: e.target.checked
                                        }
                                        console.log(updatedData)
                                        setPenyadap(updatedPenyadap)
                                        axios.patch(`/users/penyadap-for-pengepul/${collectorId}`, updatedData, config)
                                            .then(() => {
                                                message.success('Assignment Updated')
                                            }).catch((error) => {
                                                console.error('Error Ocured: ', error)
                                                message.error('Error Updating Assignment, Please check the console')
                                            })
                                    }}>
                                    {r.name}
                                </Checkbox>
                            ))}
                        </Form.Item>
                        <div className="button-container">
                            <Button className='cancel-btn' danger onClick={handleCancel} icon={<CloseOutlined />}>
                                Back
                            </Button>
                        </div>
                    </Form>
                </Spin>
            </div>
        </div>
    )
}

export default Assignment