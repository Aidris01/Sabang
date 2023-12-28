import { Typography } from 'antd'
import React, { useEffect } from 'react'

function GenerateTotal() {
    useEffect(() => {
        document.title = 'Sabang | Generated Total'
    }, [])
    return (
        <div className='content'>
            <Typography.Title level={4}>Generate Total</Typography.Title>
            <div className="main-container">
                Generated Total Table
            </div>
        </div>
    )
}

export default GenerateTotal