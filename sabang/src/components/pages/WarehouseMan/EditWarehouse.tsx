import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Button, Col, Form, Input, message, Row, Space, Spin, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';
import '../style/style.css'

const containerStyle = {
    width: '100%',
    height: '365px'
};

interface Warehouse {
    name: string,
    address: string,
    lat: number,
    lng: number
}

function EditWarehouse() {
    useEffect(() => {
        document.title = `Sabang | Edit Warehouse ${warehouseId}`
    }, [])
    const [form] = useForm()
    const initialValues = {
        name: form.getFieldValue('name') || '',
        address: form.getFieldValue('address') || '',
        lat: form.getFieldValue('lat') || 0,
        lng: form.getFieldValue('lng') || 0
    }
    const navigate = useNavigate()
    const { warehouseId } = useParams<Record<string, string>>();
    const [loading, setLoading] = useState(true)
    const [warehouse, setWarehouse] = useState<Warehouse>(
        {
            name: '',
            address: '',
            lat: 0,
            lng: 0
        }
    )
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const [center, setCenter] = useState({ lat: -6.2, lng: 106.816666 })
    const [markerPosition, setMarkerPosition] = useState({ lat: -6.2, lng: 106.816666 });
    const handleMapClick = (event: { latLng: any }) => {
        const { latLng } = event;
        const lat = latLng.lat();
        const lng = latLng.lng();
        setMarkerPosition({ lat, lng });

        form.setFieldsValue({
            lat: lat,
            lng: lng
        })
    }
    useEffect(() => {
        axios.get(`/warehouses/${warehouseId}`, config)
            .then((response) => {
                const warehouseData = response.data
                form.setFieldsValue(warehouseData)
                setWarehouse(warehouseData)
                const {lat, lng} = warehouseData
                setMarkerPosition({lat, lng})
                setCenter({lat, lng})
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured')
            }).finally(() => {
                setLoading(false)
            })
    }, [token, warehouseId, form])
    const onFinish = (values: any) => {
        const lat = parseFloat(values.lat)
        const lng = parseFloat(values.lng)

        if (isNaN(lat) || isNaN(lng)) {
            message.error('Latitude and Longitude must be valid numbers');
            return;
        }

        const updatedWarehouse = {
            ...values,
            lat,
            lng
        }
        axios.patch(`/warehouses/${warehouseId}`, updatedWarehouse, config)
            .then((response) => {
                message.success('Warehouse Updated')
                navigate('/WarehouseManagement')
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Ocured')
            })
    }
    const handleCancel = () => {
        navigate('/WarehouseManagement')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Edit Warehouse - {warehouseId}</Typography.Title>
            <div className="main-container">
                <Spin spinning={loading}>
                    <Form
                        className='form-container'
                        form={form}
                        onFinish={onFinish}
                        hideRequiredMark
                        initialValues={initialValues}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 19 }}
                        autoComplete='off'
                        name='EditedWarehouseForm'>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label='Name'
                                    name='name'
                                    rules={[{ required: true, message: 'Please input the name!' }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label='Address'
                                    name='address'
                                    rules={[{ required: true, message: 'Please input the address!' }]}>
                                    <TextArea rows={5} autoSize={{ minRows: 4, maxRows: 7 }} />
                                </Form.Item>
                                <Form.Item
                                    label='Lat'
                                    name='lat'>
                                    <Input value={markerPosition.lat}
                                        onChange={(e) => setMarkerPosition({
                                            lat: parseFloat(e.target.value),
                                            lng: markerPosition.lng
                                        })} />
                                </Form.Item>
                                <Form.Item
                                    label='Lng'
                                    name='lng'>
                                    <Input value={markerPosition.lng}
                                        onChange={(e) => setMarkerPosition({
                                            lat: markerPosition.lat,
                                            lng: parseFloat(e.target.value)
                                        })} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <LoadScript
                                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY!}>
                                    <GoogleMap
                                        onClick={handleMapClick}
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}>
                                        {markerPosition && (
                                            <Marker
                                                position={{
                                                    lat: markerPosition.lat,
                                                    lng: markerPosition.lng
                                                }} />)}
                                    </GoogleMap>
                                </LoadScript>
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

export default EditWarehouse