import { Descriptions, Table, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DetailICS() {
    useEffect(() => {
        document.title = `Sabang | Detail ICS ${ics}`
    }, [])
    const {ics} = useParams<Record<string, string>>();
  return (
    <div className='content'>
        <Typography.Title level={4}>Assignment - {ics}</Typography.Title>
        <div className="desc-container">
            <Descriptions title='Detail ICS' layout='vertical' className='form-container'>
              <Descriptions.Item label='ID'>1</Descriptions.Item>
            </Descriptions>
            <Typography.Title level={5} style={{marginLeft: 15}}>Detail</Typography.Title>
            <Table 
            size='small'/>
        </div>
    </div>
  )
}

export default DetailICS