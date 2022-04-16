import React from 'react'
import logo from '../image/video.png'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { unregistrAction } from '../app/toolkitSlice'

const Header = () => {
	const navigate = useNavigate()
	const isRegistr = useSelector((state) => state.toolkit.isRegistr)
	const isLogin = useSelector((state) => state.toolkit.isLogin)
	const user = useSelector((state) => state.toolkit.user)
	const dispatch = useDispatch()
	function exitUser() {
		dispatch(unregistrAction(null))
		navigate('/')
	}
	return (
		<header className='container'>
			<div className='header'>
				<Link to='/' className='logo'>
					<img src={logo} className='logo__photo' />
					<div className='logo__text'>MovieSearch</div>
				</Link>

				<div>
					{isRegistr || isLogin ? (
						<>
							<p className='user'>user:{user.payload.username}</p>
							<Link to='/favorites' className='button__regist'>
								<Button>Favorites</Button>
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

export default Header
