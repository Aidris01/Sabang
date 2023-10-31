import { Button, Col, Form, Input, message, Row, Space, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useMemo, useState } from 'react'
import '../../pages/style/style.css'
import { useNavigate } from 'react-router-dom'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { latLng2Tile } from 'google-map-react'
import { useForm } from 'antd/es/form/Form'
import axios from '../../api/axios'

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
  const [form] = useForm()
  const token = localStorage.getItem('token')
  const center = useMemo(() => ({ lat: -6.2, lng: 106.816666 }), [])
  const [markerPosition, setMarkerPosition] = useState({ lat: -6.2, lng: 106.816666 })
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
  const handleFormSubmit = async (values: any) => {
    try {
      const response = await axios.post('/factories', values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response)
      message.success('Factory Added')
      navigate('/FactoryManagement')
    } catch (error) {
      console.error('Error Ocured: ',error)
      message.error('Error Ocured, Please check the console')
    }
  }
  return (
    <div className='content'>
      <Typography.Title level={4}>Create Factory</Typography.Title>
      <div className='main-container'>
        <Form
          form={form}
          onFinish={handleFormSubmit}
          autoComplete='off'
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
                      }} />
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