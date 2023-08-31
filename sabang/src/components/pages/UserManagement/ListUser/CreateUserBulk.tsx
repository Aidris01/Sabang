import { Button, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateUserBulk() {

    const navigate = useNavigate()
    const createBulk = () => {
      navigate("/ListUser")
    }

    return (
      <div className='content'>
        <Typography.Title level={4}>Create User Bulk</Typography.Title>
        <div className='create-user-bulk'>
          <Space size={10}>
            <Button className='save-bulk-btn' type='primary' htmlType='submit'>Save</Button>
            <Button className='cancel-bulk-btn' danger onClick={createBulk}>Cancel</Button>
          </Space>
        </div>
      </div>
    )
  }

  export default CreateUserBulk