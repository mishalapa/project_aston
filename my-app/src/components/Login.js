import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginAction } from '../app/toolkitSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const dispatch = useDispatch()
	let navigate = useNavigate()
	const onFinish = (values) => {
		if (
			JSON.parse(localStorage.getItem(values.username)).username === values.username &&
			JSON.parse(localStorage.getItem(values.username)).password === values.password
		) {
			dispatch(loginAction(values))
			navigate('/')
		} else {
			console.log('Error', values)
		}
	}
	return (
		<div className='container'>
			<Form name='normal_login' className='login-form' onFinish={onFinish}>
				<Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
					<Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
				</Form.Item>

				<Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
					<Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
				</Form.Item>

				<Form.Item>
					<Button type='primary' htmlType='submit' className='login-form-button'>
						Log in
					</Button>
					Or <Link to='/registration'>register now!</Link>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Login
