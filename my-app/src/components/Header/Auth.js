import React from 'react'

import { Navigate } from 'react-router-dom'

import { useGetValue } from '../../hooks/useGetValue'

export const Auth = ({ children }) => {
	const auth = useGetValue('isLogin')
	if (!auth) {
		return <Navigate to='/login' />
	}

	return children
}
