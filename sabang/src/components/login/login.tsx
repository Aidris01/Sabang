import 'antd/dist/reset.css';
import { Button, Form, Input } from 'antd';
import bg from './img/bg.jpg';
import './login.css';
import { useNavigate } from 'react-router-dom';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

function Login() {

    const navigate = useNavigate();
    const signIn = () => {
        navigate("/Dashboard")
    }
    return (
        <div>
            <div className='parent-container'>
                <div className='login-form'>
                    <h3>Selamat Datang Kembali</h3>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        key='/'
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" onClick={signIn}>
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <img className='login-image' src={bg} alt='login.jpg' />
            </div>
        </div>
    )
}

export default Login;