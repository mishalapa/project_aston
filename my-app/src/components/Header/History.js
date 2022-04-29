import { List, Divider, Button } from 'antd'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useGetValue } from '../../hooks'
import { removeHistory } from '../../redux'
import { DarkModeContext } from '../Context/darkModeContext'

export const History = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

	const history = useGetValue('history')
	const text = history.slice(1).split(',')

	function openSearchFilm(e) {
		navigate(`/search/${e.target.textContent}`)
	}

	function clearHistory() {
		dispatch(removeHistory())
	}

	function changeColor() {
		toggleDarkMode()
	}

	return (
		<div className={darkMode ? 'history-dark' : 'history-light'}>
			{history && history.length > 0 ? (
				<div>
					<Button className='clear__history' onClick={clearHistory}>
						Clear History
					</Button>
					<Button className='clear__history' onClick={changeColor}>
						ChangeColor
					</Button>
					<Divider orientation='left'>Query List</Divider>
					<List
						size='large'
						bordered
						dataSource={text}
						renderItem={(item) => <List.Item onClick={openSearchFilm}>{item}</List.Item>}
					/>
				</div>
			) : (
				<p className='not__history'>You did not search for anything</p>
			)}
		</div>
	)
}
