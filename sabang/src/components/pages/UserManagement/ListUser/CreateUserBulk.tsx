import { CloseOutlined, SaveOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Space, Typography, Upload } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/style.css';

function CreateUserBulk() {
  useEffect(() => {
    document.title = 'Sabang | Create Bulk';
  }, []);
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);

  const createBulk = () => {
    navigate('/ListUser');
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    console.log('Selected file:', file);
  };

  const handleFileChange = (info: any) => {
    if (info.fileList.length > 0) {
      const selectedFile = info.fileList[0].originFileObj;
      setFile(selectedFile);
    }
  };

  return (
    <div className='content'>
      <Typography.Title level={4}>Create User Bulk</Typography.Title>
      <div className='main-container'>
        <Form name="createUserBulk" onFinish={onFinish} hideRequiredMark>
          <Form.Item name="file" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
            <div className="input-upload">
              <Upload.Dragger
                className='input-container'
                accept='.csv'
                name="file"
                onChange={handleFileChange}
                style={{borderRadius: 1, border: 'dashed 1px rgba(46, 46, 46, 0.5)'}}>
                <UploadOutlined />
                <br />
                Upload File .csv
              </Upload.Dragger>
            </div>
          </Form.Item>
          <div className="button-container">
            <Space size={10}>
              <Button className='save-btn' type='primary' htmlType='submit' icon={<SaveOutlined />}>
                Save
              </Button>
              <Button className='cancel-btn' danger onClick={createBulk} icon={<CloseOutlined />}>
                Cancel
              </Button>
            </Space>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreateUserBulk;
