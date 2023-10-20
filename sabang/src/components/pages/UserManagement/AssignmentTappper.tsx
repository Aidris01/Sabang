import { SaveOutlined } from '@ant-design/icons';
import { Button, Form, message, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import '../../pages/style/style.css'

interface PenyadapData {
  id: number,
  name: string
}

function AssignmentTapper() {
  useEffect(() => {
    document.title = 'Sabang | Assignment Tapper'
  }, [])

  const [penyadap, setPenyadap] = useState<PenyadapData[]>([])

  const token = localStorage.getItem('token')
  useEffect(() => {
    axios.get('/users/penyadap', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      const formattedData = response.data.map((item: any) => ({
        value: item.id,
        label: item.name
      }))
      setPenyadap(formattedData)
    }).catch((error) => {
      console.error('Error Ocured: ',error)
      message.error('Error Ocured')
    })
  },[])
  return (
    <div className='content'>
      <Typography.Title level={4}>Assignment Tapper</Typography.Title>
      <div className='main-container'>
        <Form
          className='form-container'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          hideRequiredMark
          style={{ width: 800 }}>
          <Form.Item
            label="Tapper Name"
            name="tapperName"
            rules={[{ required: true, message: "Please select the tapper!" }]}>
            <Select
              showSearch
              placeholder="Select Tapper"
              allowClear
              placement="bottomLeft"
              listHeight={200}
              options={penyadap}
            >
            </Select>
          </Form.Item>
          <Form.Item
            label="Collector Name"
            name="collectorName"
            rules={[{ required: true, message: "Please select the collector!" }]}>
            <Select
              showSearch
              placeholder="Select Collector"
              allowClear
              placement="bottomLeft"
              listHeight={200}
              options={[{
                value: "ling.pengepul",
                label: "ling.pengepul"
              },
              {
                value: "amct.pengepul",
                label: "amct.pengepul"
              },
              {
                value: "amsa.pengepul",
                label: "amsa.pengepul"
              }
              ]}
            >
            </Select>
          </Form.Item>
          <div className="button-container">
            <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default AssignmentTapper;