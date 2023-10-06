import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Input, Space, Typography } from 'antd'
import React, { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../style/style.css'

function CreateUserBulk() {
  const navigate = useNavigate()
  const [file, setFile] = useState<File | null>(null)

  const createBulk = () => {
    navigate("/ListUser")
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile); // Menyimpan file yang dipilih dalam state
    }
  }

  return (
    <div className='content'>
      <Typography.Title level={4}>Create User Bulk</Typography.Title>
      <div className='create-user-bulk'>
        <Input
          className='input-container'
          style={{ marginLeft: 15, marginRight: 10, width: 955 }}
          type='file'
          accept='.csv'
          onChange={handleFileChange} />
        <div className="button-container">
          <Space size={10}>
            <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>Save</Button>
            <Button className='cancel-btn' danger onClick={createBulk} icon={<CloseOutlined />}>Cancel</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default CreateUserBulk