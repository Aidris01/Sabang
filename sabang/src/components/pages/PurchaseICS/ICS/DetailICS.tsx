import { CloseOutlined } from '@ant-design/icons'
import { Button, Descriptions, Spin, Table, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function DetailICS() {
  useEffect(() => {
    document.title = `Sabang | Garden Control ${icsId}`
  }, [])
  const { icsId } = useParams<Record<string, string>>();
  const navigate = useNavigate()
  const back = () => {
    navigate('/ICS')
  }
  const column = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },
    {
      key: 'checkName',
      title: 'Checklist',
      dataIndex: 'checklist',
      width: 500
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      width: 200
    },
    {
      key: 'photo',
      title: 'Photo',
      dataIndex: 'photo',
      width: 300
    },
    {
      key: 'note',
      title: 'Note',
      dataIndex: 'note',
      width: 300
    }
  ]
  return (
    <div className='content'>
      <Typography.Title level={4}>Garden Control - {icsId}</Typography.Title>
      <div className="desc-container">
        <Descriptions title='Detail Garden' layout='vertical' className='form-container'>
          <Descriptions.Item label='ID'>1</Descriptions.Item>
          <Descriptions.Item label='Penyadap'>01 - AMCT.01</Descriptions.Item>
          <Descriptions.Item label='ICS'>01 - Dedi</Descriptions.Item>
          <Descriptions.Item label='Long'>107.9896661</Descriptions.Item>
          <Descriptions.Item label='Lat'>-7.4093626</Descriptions.Item>
          <Descriptions.Item label='Time'>2020-02-22 11:08:09</Descriptions.Item>
        </Descriptions>
        <Typography.Title level={5} style={{ marginLeft: 15 }}>Data Checklist - tapper.id</Typography.Title>
        <Spin spinning={false}>
          <Table
            size='small'
            columns={column} />
        </Spin>
        <div className="button-container">
          <Button className='back-btn' icon={<CloseOutlined />} danger onClick={back}>
            Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DetailICS