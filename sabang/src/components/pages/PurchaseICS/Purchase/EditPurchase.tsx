import { Form, Spin, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../../api/axios'
import '../../style/style.css'

interface PurchaseData {
    penyadapId: string,
    purchaserId: string,
    ph: number,
    sugarLevel: number,
    volume: number
}

function EditPurchase() {
    useEffect(() => {
        document.title = `Sabang | Edit User ${purchaseId} `
    },[])
    const {purchaseId} = useParams<Record<string, string>>();
    const [loading, setLoading] = useState(true)
    const [form] = useForm();
    const initialValues = {
        penyadapId: form.getFieldValue('penyadapId') || '',
        purchaseId: form.getFieldValue('purchaserId') || '',
        sugarLevel: form.getFieldValue('sugarLevel') || 0,
        volume: form.getFieldValue('volume') || 0,
        ph: form.getFieldValue('ph') || 0
    }
    const navigate = useNavigate()
    const [purchase, setPurchase] = useState<PurchaseData>(
        {
            penyadapId: '',
            purchaserId: '',
            sugarLevel: 0,
            volume: 0,
            ph: 0
        }
    )
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get(`/puchase/${purchaseId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            form.setFieldsValue(response.data)
            setPurchase(response.data)
            setLoading(false)
        })
    },[])
  return (
    <div className='content'>
        <Typography.Title level={4}>Edit Purchase - {purchaseId}</Typography.Title>
        <div className="main-container">
            <Spin spinning={loading}>
                <Form
                className='form-container'
                hideRequiredMark>

                </Form>
            </Spin>
        </div>
    </div>
  )
}

export default EditPurchase