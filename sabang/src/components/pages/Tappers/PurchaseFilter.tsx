import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Select, Space, Typography } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

const { RangePicker } = DatePicker;

function PurchaseFilter() {
    const [dates, setDates] = useState<string[]>([]);
    console.log(dates)
    const navigate = useNavigate()
    const Tappers = () => {
        navigate('/Tappers')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Purchase Filter</Typography.Title>
            <div className='purchase-filter'>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    hideRequiredMark>
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
                        label="Range Date"
                        name="rangeDate"
                        rules={[{ required: true, message: "Please select the date!" }]}>
                        <RangePicker
                            style={{ width: '43.5vw' }}
                            onChange={(values) => {
                                if (values) {
                                    setDates(values.map((item) => moment(item?.toDate()).format('DD-MM-YYYY')));
                                } else {
                                    setDates([])
                                }
                            }}
                        />
                    </Form.Item>
                    <Space size={10}>
                        <Button className='save-btn' type='primary' htmlType='submit' icon={<SearchOutlined />}>
                            Search
                        </Button>
                        <Button className='cancel-btn' danger onClick={Tappers} icon={<CloseOutlined />}>
                            Cancel
                        </Button>
                    </Space>
                </Form>
            </div>
        </div>
    )
}

export default PurchaseFilter