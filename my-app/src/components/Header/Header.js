import { Button } from 'antd'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../image/video.png'
import { logoutAction } from '../../redux'
import { removeHistory } from '../../redux/moviesSlice'

export const Header = () => {
	const navigate = useNavigate()
	const isLogin = useSelector((state) => state.login.isLogin)
	const user = useSelector((state) => state.login.user)
	const history = useSelector((state) => state.movies.history)
	const dispatch = useDispatch()

	function exitUser() {
		console.log(JSON.parse(localStorage.getItem(user.payload.username)))
		const obj = { username: user.payload.username, password: user.payload.password, history: history }
		localStorage.setItem(user.payload.username, JSON.stringify(obj))
		dispatch(removeHistory())
		dispatch(logoutAction())
		navigate('/')
	}
	function toFavorites() {
		navigate('/favorites')
	}

	return (
		<header className='container'>
			<div className='header'>
				<Link to='/' className='logo'>
					<img src={logo} className='logo__photo' />
					<div className='logo__text'>MovieSearch</div>
				</Link>

				<div>
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
