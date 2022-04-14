import React from 'react'
import logo from '../image/video.png'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
	const isRegistr = useSelector((state) => state.isRegistr.isRegistr)
	return (
		<header className='container'>
			<div className='header'>
				<div className='logo'>
					<a href='/'>
						<img src={logo} className='logo__photo' />
					</a>

					<div className='logo__text'>MovieSearch</div>
				</div>
				<div>
					{isRegistr ? null : (
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
