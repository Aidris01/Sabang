import { CloseOutlined, MinusCircleOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, message, Row, Select, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import '../../pages/style/style.css'

interface Penyadap {
  id: number,
  name: string
}

function CreatePupuk() {
  useEffect(() => {
    document.title = 'Sabang | Create Pupuk'
  }, [])
  const navigate = useNavigate()
  const back = () => {
    navigate('/CatatanPupuk')
  }
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const [penyadap, setPenyadap] = useState<Penyadap[]>([])
  useEffect(() => {
    axios.get('/users/penyadap', config)
    .then((response) => {
      const formatData = response.data.map((item: any) => ({
        value: item.id,
        label: item.name
      }))
      setPenyadap(formatData)
    }).catch((error) => {
      console.error('Error Ocured: ',error)
      message.error('Error Fetching Penyadap, Please check the console')
    })
  },[])
  return (
    <div className='content'>
      <Typography.Title level={4}>Create Catatan Pupuk</Typography.Title>
      <div className='main-container'>
        <Form
          className='form-container'
          style={{ width: 700 }}
          hideRequiredMark
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}>
          <Form.Item
            label='Petani'
            name='petani'
            rules={[{ required: true, message: 'Please select the farmer!' }]}>
            <Select
              placeholder='Select the farmer'
              allowClear
              placement="bottomLeft"
              listHeight={200}
              options={penyadap} />
          </Form.Item>
          <Form.Item
            label='Kode Lahan'
            name='kodeLahan'
            rules={[{ required: true, message: 'Please input the farm code!' }]}>
            <Input />
          </Form.Item>
          <Form.List name="details">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => {
                  return (
                    <Space key={field.key} direction="vertical" size={10}>
                      <Typography.Title style={{ marginLeft: 100, }} level={4}>Detail</Typography.Title>
                      <Button className='remove-btn' type='text' icon={<MinusCircleOutlined />} style={{ color: 'red' }} onClick={() => { remove(field.name) }} />
                      <Form
                        style={{ width: 700 }}
                        hideRequiredMark
                        labelCol={{ span: 9 }}
                        wrapperCol={{ span: 16 }}>
                        <Row gutter={16}>
                          <Col span={12}>
                            <Form.Item
                              label='Tanggal'
                              name='tanggal'
                              rules={[{ required: true, message: 'Please select the date!' }]}>
                              <DatePicker style={{width: 210}} />
                            </Form.Item>
                            <Form.Item
                              label='Bahan Kompos'
                              name='bahan'
                              rules={[{ required: true, message: 'Please select manure material!' }]}>
                              <Select
                                placeholder='Select the material'
                                allowClear
                                placement='bottomLeft'
                                listHeight={100}
                                options={[
                                  {
                                    value: 'Kohe Domba',
                                    label: 'Kohe Domba'
                                  },
                                  {
                                    value: 'Kohe Sapi',
                                    label: 'Kohe Sapi'
                                  }
                                ]} />
                            </Form.Item>
                            <Form.Item
                              label='Berat Aplikasi'
                              name='beratAplikasi'
                              rules={[{ required: true, message: 'Please select the tool!' }]}>
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              label='Berat Kompos'
                              name='berat'
                              rules={[{ required: true, message: 'Please input the used material!' }]}>
                              <Input />
                            </Form.Item>
                            <Form.Item
                              label='Tanggal Aplikasi'
                              name='tanggalAplikasi'
                              rules={[{ required: true, message: 'Please input the amount!' }]}>
                              <DatePicker style={{width: 210}} />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </Space>
                  )
                })}
                <Form.Item>
                  <div className="button-container">
                    <Space>
                      <Button className='create-btn' onClick={back} danger icon={<CloseOutlined />}>
                        Back
                      </Button>
                      <Button className='create-btn' onClick={() => { add() }} icon={<PlusOutlined />}>
                        Add Row
                      </Button>
                      <Button className='create-btn' htmlType='submit' type='primary' icon={<SaveOutlined />}>
                        Save
                      </Button>
                    </Space>
                  </div>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </div>
  )
}

export default CreatePupuk