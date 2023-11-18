import { Table, Typography } from 'antd'
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
        <div className="main-container">
            <Table 
            size='small'/>
        </div>
    </div>
  )
}

export default DetailICS