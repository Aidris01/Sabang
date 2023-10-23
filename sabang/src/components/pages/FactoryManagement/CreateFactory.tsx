import { Button, Col, Form, Input, Row, Space, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useState } from 'react'
import '../../pages/style/style.css'
import { useNavigate } from 'react-router-dom'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { CloseOutlined, SaveOutlined } from '@ant-design/icons'

const containerStyle = {
  width: '100%',
  height: '365px'
};

function CreateFactory() {
  useEffect(() => {
    document.title = 'Sabang | Create Factory'
  }, [])
  const navigate = useNavigate()
  const factoryManagement = () => {
    navigate("/FactoryManagement")
  }
  const [markerPosition, setMarkerPosition] = useState({ lat: -6.2, lng: 106.816666 });

  const handleMapClick = (e: any) => {
    // Update posisi marker sesuai dengan posisi klik
    setMarkerPosition({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  return (
    <div className='content'>
      <Typography.Title level={4}>Create Factory</Typography.Title>
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
                  onClick={handleMapClick}
                >
                  <Marker position={markerPosition} draggable={true}  />
                </GoogleMap>
              </LoadScript>
            </Col>
          </Row>
          <div className="button-container">
            <Space size={8}>
              <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                Save
              </Button>
              <Button className='cancel-btn' danger onClick={factoryManagement} icon={<CloseOutlined />}>
                Cancel
              </Button>
            </Space>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default CreateFactory