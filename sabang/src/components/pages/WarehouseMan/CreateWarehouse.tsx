import { Button, Col, Form, Input, Row, Space, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import '../../pages/style/style.css'
import { useNavigate } from 'react-router-dom'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import '../../pages/style/style.css'

const containerStyle = {
    width: '500px',
    height: '365px'
};

function CreateWarehouse() {
    const navigate = useNavigate()
    const warehouseManagement = () => {
        navigate("/WarehouseManagement")
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Warehouse</Typography.Title>
            <div className='create-warehouse'>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Please input the name!" }]}>
                                <Input /></Form.Item>
                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[{ required: true, message: "Please input your address!" }]}
                            ><TextArea rows={6} /></Form.Item>
                        </Col>
                        <Col span={12}>
                            <LoadScript
                                googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY!}>
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={{ lat: -6.2, lng: 106.816666 }}
                                    zoom={10}
                                >
                                    <Marker position={{ lat: -6.2, lng: 106.816666 }} />
                                </GoogleMap>
                            </LoadScript>
                        </Col>
                    </Row>
                    <Space size={8}>
                        <Button className='save-btn-warehouse' type='primary' htmlType='submit'>Save</Button>
                        <Button className='cancel-btn-warehouse' danger onClick={warehouseManagement}>Cancel</Button>
                    </Space>
                </Form>
            </div>
        </div>
    )
}

export default CreateWarehouse