import { List, Divider } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import '../../App.css'

export const History = () => {
	const history = useSelector((state) => state.movies.history)
	const navigate = useNavigate()
	const text = history.slice(1).split(',')

	function openSearchFilm(e) {
		navigate(`/search/${e.target.textContent}`)
	}
	return (
		<div>
			{history && history.length > 0 ? (
				<div>
					<Divider orientation='left'>Query List</Divider>
					<List
						size='large'
						bordered
						dataSource={text}
						renderItem={(item) => <List.Item onClick={openSearchFilm}>{item}</List.Item>}
					/>
				</div>
			) : (
				<p>You did not ask</p>
			)}
		</div>
	)
}
// const user = useSelector((state) => state.login.user)
// const history = JSON.parse(localStorage.getItem(user.payload.username)).history
// const navigate = useNavigate()
// const text = history.split(',')
