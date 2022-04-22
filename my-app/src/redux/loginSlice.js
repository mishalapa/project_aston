import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
	name: 'login',
	initialState: {
		user: null,
		isLogin: false,
	},
	reducers: {
		logoutAction(state) {
			state.isLogin = false
			state.user = null
		},
		loginAction(state, payload) {
			state.isLogin = true
			state.user = payload
		},
	},
})

export default loginSlice.reducer
export const { logoutAction, loginAction } = loginSlice.actions
