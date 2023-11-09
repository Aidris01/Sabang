import { Table, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DetailVillage() {
    useEffect(() => {
        document.title = `Sabang | Detail Village - ${code} `
    },[])
    const {code} = useParams<Record<string, string>>();
  return (
    <div className='content'>
        <Typography.Title level={4}>Detail Village - {code}</Typography.Title>
        <div className="main-container">
            <Table
            size='small' />
        </div>
    </div>
  )
}

export default DetailVillage