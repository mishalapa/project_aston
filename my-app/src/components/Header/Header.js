import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { useGetValue } from '../../hooks'
import logo from '../../image/video.png'
import { logoutAction, removeFavorite, removeHistory } from '../../redux'

export const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const isLogin = useGetValue('isLogin')
	const user = useGetValue('user')
	const history = useGetValue('history')
	const favorites = useGetValue('favorites')

	function exitUser() {
		const data = {
			username: user.payload.username,
			password: user.payload.password,
			history: history,
			favorites: favorites,
		}

		localStorage.setItem(user.payload.username, JSON.stringify(data))

		dispatch(removeHistory())
		dispatch(removeFavorite())
		dispatch(logoutAction())

		navigate('/')
	}

	function toFavorites() {
		navigate('/favorites')
	}

	return (
		<header className='container'>
			<div className='header__logo'>
				<Link to='/' className='logo'>
					<img src={logo} className='logo__photo' />
					<div className='logo__text'>MovieSearch</div>
				</Link>

				<div className='header__menu'>
					{isLogin ? (
						<>
							<p className='user'>user:{user.payload.username}</p>
							<Link to='/favorites' className='button__regist'>
								<Button onClick={toFavorites}>Favorites</Button>
							</Link>
							<Link to='/history' className='button__regist'>
								<Button>History</Button>
							</Link>
							<Button onClick={exitUser} className='exit'>
								Exit
							</Button>
						</>
					) : (
						<>
							<Link to='/login' className='link'>
								<Button>Login</Button>
							</Link>
							<Link to='/registration' className='link'>
								<Button>Registration</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	)
}
