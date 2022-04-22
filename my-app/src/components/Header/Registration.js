import { Form, Input, Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginAction } from '../../redux'

export const Registration = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onSubmit = (identification) => {
		localStorage.setItem(identification.username, JSON.stringify(identification))
		dispatch(loginAction(identification))
		navigate('/')
	}

	return (
		<div className='container'>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={onSubmit}
				autoComplete='off'
				className='form__reg'
			>
				<Form.Item label='Username' name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
					<Input />
				</Form.Item>

				<Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
