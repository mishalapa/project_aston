import React from 'react'

import { Link } from 'react-router-dom'

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false,
		}
	}

	static getDerivedStateFromError() {
		return {
			hasError: true,
		}
	}

	componentDidCatch(error, errorInfo) {
		console.log(`${error}
    The error is located at: ${errorInfo.componentStack}`)
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<h1>We are sorry but something went terribly wrong..</h1>
					<p>
						Try to go back to the <Link to='/'>Home page</Link>
					</p>
				</>
			)
		}

		return this.props.children
	}
}
