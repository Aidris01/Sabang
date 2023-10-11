import { Typography } from 'antd'
import React, { useEffect } from 'react'
import '../../pages/style/style.css'
import error from './error.png'

function NotFound() {
  useEffect(() => {
    document.title = 'Sabang | Not Found :('
  }, [])
  return (
    <div className='content'>
        <Typography.Title level={4}>Pages Not Found (Please Try Another Page)</Typography.Title>
        <div>
          <img className='not-found' src={error} alt='404_Not_Found.png' />
        </div>
    </div>
  )
}

export default NotFound