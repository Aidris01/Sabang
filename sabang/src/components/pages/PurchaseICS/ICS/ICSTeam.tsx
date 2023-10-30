import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select, Space, Typography } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../style/style.css'

const { RangePicker } = DatePicker;

function ICSTeam() {
    useEffect(() => {
        document.title = 'Sabang | ICS Team'
    }, [])
    const [dates, setDates] = useState<string[]>([]);
    const navigate = useNavigate()
    const ICS = () => {
        navigate('/ICS')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>ICS Team</Typography.Title>
            <div className='main-container'>
                <Form
                    className='form-container'
                    hideRequiredMark
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ width: 800 }}>
                    <Form.Item
                        label='Tapper'
                        name='tapper'
                        rules={[{ required: true, message: 'Please select the tapper!' }]}>
                        <Select
                            placeholder="Select Tapper"
                            allowClear
                            placement="bottomLeft"
                            listHeight={200}
                            options={[
                                {
                                    value: 'Erwin',
                                    label: 'Erwin'
                                },
                                {
                                    value: 'amct.01',
                                    label: 'amct.01'
                                },
                                {
                                    value: 'amct.02',
                                    label: 'amct.02'
                                },
                                {
                                    value: 'amct.03',
                                    lable: 'amct.03'
                                }
                            ]} />
                    </Form.Item>
                    <Form.Item
                        label='Purchaser'
                        name='purchaser'
                        rules={[{ required: true, message: 'Please select the purchaser!' }]}>
                        <Select
                            placeholder="Select Purchaser"
                            allowClear
                            placement="bottomLeft"
                            listHeight={200}
                            options={[
                                {
                                    value: 'Santi Prasinta',
                                    label: 'Santi Prasinta'
                                }
                            ]} />
                    </Form.Item>
                    <Form.Item
                        label='Jumlah Kilo'
                        name='jumlahKilo'
                        rules={[{ required: true, message: 'Please input the weight!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Persentase'
                        name='persentase'
                        rules={[{ required: true, message: 'Please input the persentage!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Range Date'
                        name='rangeDate'
                        rules={[{ required: true, message: 'Please select the date!' }]}>
                        <RangePicker
                            style={{ width: 505 }}
                            onChange={(values) => {
                                if (values) {
                                    setDates(values.map((item) => moment(item?.toDate()).format('DD-MM-YYYY')));
                                } else {
                                    setDates([])
                                }
                            }} />
                    </Form.Item>
                    <div className="button-container">
                        <Space size={10}>
                            <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                                Save
                            </Button>
                            <Button className='cancel-btn' danger onClick={ICS} icon={<CloseOutlined />}>
                                Cancel
                            </Button>
                        </Space>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default ICSTeam