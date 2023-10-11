import { CloseOutlined, MinusCircleOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Row, Select, Space, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function CreatePupuk() {
  useEffect(() => {
    document.title = 'Sabang | Create Pupuk'
  }, [])
  const navigate = useNavigate()
  const back = () => {
    navigate('/CatatanPupuk')
  }
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
            name={'petani'}
            rules={[{ required: true, message: 'Please select the farmer!' }]}>
            <Select
              placeholder='Select the farmer'
              allowClear
              placement="bottomLeft"
              listHeight={200}
              options={[
                {
                  value: "amct.01",
                  label: 'amct.01'
                },
                {
                  value: 'amct.02',
                  label: 'amct.02'
                },
                {
                  value: 'amct.03',
                  label: 'amct.03'
                },
                {
                  value: 'amct.04',
                  label: 'amct.04'
                },
                {
                  value: 'amct.05',
                  label: 'amct.05'
                }
              ]}
            />
          </Form.Item>
          <Form.Item
            label='Kode Lahan'
            name={'kodeLahan'}
            rules={[{ required: true, message: 'Please input the farm code!' }]}>
            <Input />
          </Form.Item>
          <Form.List name={"details"}>
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
                              name={'tanggal'}
                              rules={[{ required: true, message: 'Please select the date!' }]}>
                              <DatePicker />
                            </Form.Item>
                            <Form.Item
                              label='Bahan Kompos'
                              name={'bahan'}
                              rules={[{ required: true, message: 'Please select manure material!' }]}>
                              <Select
                                placeholder='Select the material'
                                allowClear
                                placement='bottomLeft'
                                listHeight={200}
                                options={[
                                  {
                                    value: 'Kohe Domba',
                                    label: 'Kohe Domba'
                                  },
                                  {
                                    value: 'Kohe Sapi',
                                    label: 'Kohe Sapi'
                                  }
                                ]}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              label='Berat Kompos'
                              name={'berat'}
                              rules={[{ required: true, message: 'Please input the used material!' }]}>
                              <Input />
                            </Form.Item>
                            <Form.Item
                              label='Tanggal Aplikasi'
                              name={'tanggalAplikasi'}
                              rules={[{ required: true, message: 'Please input the amount!' }]}>
                              <DatePicker />
                            </Form.Item>
                          </Col>
                          <Col span={14}>
                            <Form.Item
                              label='Berat Kompos Aplikasi'
                              name={'beratAplikasi'}
                              rules={[{ required: true, message: 'Please select the tool!' }]}>
                              <Input />
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