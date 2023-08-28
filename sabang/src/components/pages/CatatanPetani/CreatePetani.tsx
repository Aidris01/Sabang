import { MinusCircleOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select, Space, Typography } from 'antd'
import Operation from 'antd/es/transfer/operation'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../pages/style/style.css'

function CreatePetani() {
    const navigate = useNavigate()
    const back = () => {
        navigate('/CatatanPetani')
    }
    return (
        <div className='content'>
            <Typography.Title level={4}>Create Catatan Petani</Typography.Title>
            <div className='create-petani'>
                <Form
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
                                            <Typography.Title style={{marginLeft: 100,}} level={4}>Detail</Typography.Title>
                                            <Button className='remove-btn' type='text' icon={<MinusCircleOutlined />} style={{ color: 'red'}} onClick={() => {remove(field.name)}} />
                                            <Form
                                                style={{ width: 620 }}
                                                hideRequiredMark
                                                labelCol={{ span: 9 }}
                                                wrapperCol={{ span: 16 }}>
                                                <Form.Item
                                                    label='Tanggal'
                                                    name={'tanggal'}
                                                    rules={[{ required: true, message: 'Please select the date!' }]}>
                                                    <DatePicker />
                                                </Form.Item>
                                                <Form.Item
                                                    label='Kegiatan'
                                                    name={'kegiatan'}
                                                    rules={[{ required: true, message: 'Please select farmer activity!' }]}>
                                                    <Select
                                                        placeholder='Select the activity'
                                                        allowClear
                                                        placement='bottomLeft'
                                                        listHeight={200}
                                                        options={[
                                                            {
                                                                value: 'Pelumpingan ijuk',
                                                                label: 'Pelumpingan ijuk'
                                                            },
                                                            {
                                                                value: 'Pelemasan lengan aren',
                                                                label: 'Pelemasan lengan aren'
                                                            },
                                                            {
                                                                value: 'Pemotongan lengan aren',
                                                                label: 'Pemotongan lengan aren'
                                                            }
                                                        ]}
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    label='Bahan'
                                                    name={'bahan'}
                                                    rules={[{ required: true, message: 'Please input the used material!' }]}>
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item
                                                    label='Jumlah'
                                                    name={'jumlah'}
                                                    rules={[{ required: true, message: 'Please input the amount!' }]}>
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item
                                                    label='Alat'
                                                    name={'alat'}
                                                    rules={[{ required: true, message: 'Please select the tool!' }]}>
                                                    <Select
                                                        placeholder='Select the tool'
                                                        allowClear
                                                        placement='bottomLeft'
                                                        listHeight={200}
                                                        options={[
                                                            {
                                                                value: 'Golok',
                                                                label: 'Golok'
                                                            },
                                                            {
                                                                value: 'Paningur',
                                                                label: 'Paningur'
                                                            },
                                                            {
                                                                value: 'Pisau Sadap',
                                                                label: 'Pisau Sadap'
                                                            }
                                                        ]}
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    label='Pencucian'
                                                    name={'pencucian'}
                                                    rules={[{ required: true, message: 'Please select the options!' }]}>
                                                    <Select
                                                        allowClear
                                                        placement='bottomLeft'
                                                        placeholder='Select the options'
                                                        listHeight={200}
                                                        options={[
                                                            {
                                                                value: 'Sudah',
                                                                label: 'Sudah'
                                                            },
                                                            {
                                                                value: 'Belum',
                                                                label: 'Belum'
                                                            }
                                                        ]}
                                                    />
                                                </Form.Item>
                                            </Form>
                                        </Space>
                                    )
                                })}
                                <Form.Item>
                                    <Space>
                                        <Button className='create-btn' onClick={back} danger>Back</Button>
                                        <Button className='create-btn' onClick={() => { add() }}>Add Row</Button>
                                    </Space>
                                    <Button className='save-petani-btn' htmlType='submit' type='primary'>Create</Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Form>
            </div>
        </div>
    )
}

export default CreatePetani