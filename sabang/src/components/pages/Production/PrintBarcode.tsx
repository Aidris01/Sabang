import { Typography } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PrintBarcode() {
    useEffect(() => {
        document.title = `Sabang | Print Barcode ${productionId}`
    }, [])
    const { productionId } = useParams<Record<string, string>>()
    return (
        <div className='content'>
            <Typography.Title level={4}>Print Barcode - {productionId}</Typography.Title>
            <div className="main-container"></div>
        </div>
    )
}

export default PrintBarcode