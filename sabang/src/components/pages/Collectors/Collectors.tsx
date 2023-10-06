import React, { useState } from 'react';
import moment from 'moment';
import { Button, DatePicker, Form, Select, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../../pages/style/style.css';

const { RangePicker } = DatePicker;

function PurchaseFilter() {
    const [dates, setDates] = useState<string[]>([]);
    console.log(dates)

    return (
        <div className='content'>
            <Typography.Title level={4}>Collector</Typography.Title>
            <div className='collector'>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    hideRequiredMark
                >
                    <Form.Item
                        label="Collector Name"
                        name="collectorName"
                        rules={[{ required: true, message: "Please select the collector!" }]}
                    >
                        <Select
                            placeholder="Select Collector"
                            allowClear
                            placement="bottomLeft"
                            listHeight={200}
                            options={[
                                {
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
                        />
                    </Form.Item>
                    <Form.Item
                        label="Range Date"
                        name="rangeDate"
                        rules={[{ required: true, message: "Please select the date!" }]}
                    >
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
                    <Button className='save-collector-btn' type='primary' htmlType='submit' icon={<SearchOutlined />}>
                        Search
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default PurchaseFilter;
