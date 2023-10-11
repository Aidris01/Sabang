import { SaveOutlined } from '@ant-design/icons';
import { Button, Form, Select, Typography } from 'antd';
import React from 'react';
import '../../pages/style/style.css'

function AssignmentTapper() {
  return (
    <div className='content'>
      <Typography.Title level={4}>Assignment Tapper</Typography.Title>
      <div className='assignment-tapper'>
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
              placeholder="Select Tapper"
              allowClear
              placement="bottomLeft"
              listHeight={200}
              options={[{
                value: "amct.01",
                label: "amct.01"
              },
              {
                value: "amct.02",
                label: "amct.02"
              },
              {
                value: "amct.03",
                label: "amct.03"
              },
              {
                value: "amkm.01",
                label: "amkm.01"
              },
              {
                value: "amkm.02",
                label: "amkm.02"
              },
              {
                value: "amkm.03",
                label: "amkm.03"
              },
              {
                value: "amsa.01",
                label: "amsa.01"
              },
              {
                value: "amsa.02",
                label: "amsa.02"
              }
              ]}
            >
            </Select>
          </Form.Item>
          <Form.Item
            label="Collector Name"
            name="collectorName"
            rules={[{ required: true, message: "Please select the collector!" }]}>
            <Select
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