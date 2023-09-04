import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import bg from './img/bg.jpg';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

interface LoginValues {
    username: string;
    password: string;
}

function Login() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: LoginValues) => {
        try {
            setLoading(true);
            const response = await axios.post('auth/login', values);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', response.data.username)
                navigate('/Dashboard');
            } else {
                console.log('Authentication failed.',response.data.error);
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='parent-container'>
                <div className='login-form'>
                    <h3>Selamat Datang Kembali</h3>
                    <Form
                        hideRequiredMark
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input 
                            id='username'
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                            id='password'
                            />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <img className='login-image' src={bg} alt='login.jpg' />
            </div>
        </div>
    );
}

export default Login;
