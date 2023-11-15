import { CloseOutlined, PrinterOutlined } from '@ant-design/icons'
import { Button, message, Space, Typography } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import axios from '../../api/axios'
import '../style/style.css'

function PrintBarcode() {
    useEffect(() => {
        document.title = `Sabang | Print Barcode ${productionId}`
    }, [])
    const { productionId } = useParams<Record<string, string>>()
    const [barcode, setBarcode] = useState('')
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const navigate = useNavigate()
    const back = () => {
        navigate('/Production')
    }
    useEffect(() => {
        axios.get(`/productions/generate/${productionId}`, config)
            .then((response) => {
                setBarcode(response.data)
            }).catch((error) => {
                console.error('Error Ocured: ', error)
                message.error('Error Fetching Barcode, Please check the console')
            })
    }, [])
    const imgUrl = `http://192.168.102.151:3001/productions/generate/${productionId}`
    const printRef = useRef(null)
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    })
    return (
        <div className='content'>
            <Typography.Title level={4}>Print Barcode - {productionId}</Typography.Title>
            <div className="main-container">
                <div ref={printRef} className='img-container'>
                    <img className='barcode' src={imgUrl} />
                </div>
                <div className="button-container">
                    <Space>
                        <Button className='save-btn' onClick={handlePrint} type='primary' icon={<PrinterOutlined />}>
                            Print
                        </Button>
                        <Button className='back-btn' danger onClick={back} icon={<CloseOutlined />}>
                            Back
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default PrintBarcode