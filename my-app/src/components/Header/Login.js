import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { loginAction } from '../../redux'

export const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [formPropsUser, setFormPropsUser] = useState({})
	const [formPropsPassword, setFormPropsPassword] = useState({})

	const onSubmit = (identification) => {
		const user = localStorage.getItem(identification.username)
		if (!user) {
			setFormPropsUser({ validateStatus: 'error', help: 'User not registered' })
		} else if (user && JSON.parse(user).password != identification.password) {
			setFormPropsPassword({ validateStatus: 'error', help: 'Password is not correct' })
		} else if (
			JSON.parse(user).username === identification.username &&
			JSON.parse(user).password === identification.password
		) {
			dispatch(loginAction(identification))
			navigate('/')
		} else {
			console.log('Error', identification)
		}
	}

	return (
		<div className='container'>
			<Form name='normal_login' className='login__form' onFinish={onSubmit}>
				<Form.Item {...formPropsUser} name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
					<Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
				</Form.Item>

				<Form.Item
					{...formPropsPassword}
					name='password'
					rules={[{ required: true, message: 'Please input your Password!' }]}
				>
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
