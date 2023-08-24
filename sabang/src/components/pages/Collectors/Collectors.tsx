import { Button, DatePicker, Form, Select, Typography } from 'antd'
import React from 'react'
import '../../pages/style/style.css'

function PurchaseFilter() {
    return (
        <div className='content'>
            <Typography.Title level={4}>Collector</Typography.Title>
            <div className='collector'>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    hideRequiredMark>
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
                                value: "iing.pengepul",
                                label: "iing.pengepul"
                            },
                            {
                                value: "ampp.01 - yayat pengepul",
                                label: "ampp.01 - yayat pengepul"
                            },
                            {
                                value: "ampp.02 - maman pengepul",
                                label: "ampp.02 - maman pengepul"
                            }
                            ]}
                        >
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Range Date"
                        name="rangeDate"
                        rules={[{ required: true, message: "Please select the date!" }]}>
                        <DatePicker
                        style={{ width: '35.5vw' }}
                        />
                    </Form.Item>
                        <Button className='save-btn' type='primary' htmlType='submit'>Save</Button>
                </Form>
            </div>
        </div>
    )
}

export default PurchaseFilter