import { Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../style/style.css'

function EditPurchase() {
    useEffect(() => {
        document.title = `Sabang | Edit User ${purchaseId} `
    },[])
    const {purchaseId} = useParams<Record<string, string>>();
    const [form] = useForm();
  return (
    <div className='content'>
        <Typography.Title level={4}>Edit Purchase - {purchaseId}</Typography.Title>
        <div className="main-container"></div>
    </div>
  )
}

export default EditPurchase