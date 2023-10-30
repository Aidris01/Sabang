import { Button, Col, Form, Input, Row, Space, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import '../../pages/style/style.css'

const containerStyle = {
    width: '100%',
    height: '365px'
};

function CreateWarehouse() {
    useEffect(() => {
        document.title = 'Sabang | Create Warehouse'
    }, [])
    const navigate = useNavigate()
    const warehouseManagement = () => {
        navigate("/WarehouseManagement")
    }
    const center = { lat: -6.2, lng: 106.816666 }
    const [markerPosition, setMarkerPosition] = useState({lat: -6.2, lng: 106.816666});
    const handleMapClick = (event: {latLng: any}) => {
        const {latLng} = event;
        const lat = latLng.lat();
        const lng = latLng.lng();
        setMarkerPosition({lat, lng});
    }
    console.log(markerPosition)
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Warehouse</Typography.Title>
            <div className='main-container'>
                <Form
                    className='form-container'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Please input the name!" }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[{ required: true, message: "Please input your address!" }]}>
                                <TextArea rows={6} />
                            </Form.Item>
                            <Form.Item
                            label='Lat'
                            name='lat'>
                                <Input value={markerPosition.lat} />
                            </Form.Item>
                            <Form.Item
                            label='Lng'
                            name='lng'>
                                <Input value={markerPosition.lng} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <LoadScript
                                googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY!}>
                                <GoogleMap
                                    onClick={handleMapClick}
                                    mapContainerStyle={containerStyle}
                                    center={markerPosition || center}
                                    zoom={10}>
                                    {markerPosition && (
                                        <Marker 
                                        position={{
                                            lat: markerPosition.lat,
                                            lng: markerPosition.lng
                                        }}/>
                                    )}
                                </GoogleMap>
                            </LoadScript>
                        </Col>
                    </Row>
                    <div className="button-container">
                        <Space size={8}>
                            <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                Save
                            </Button>
                            <Button className='cancel-btn' danger onClick={warehouseManagement} icon={<CloseOutlined />}>
                                Cancel
                            </Button>
                        </Space>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default CreateWarehouse