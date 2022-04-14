const defaultState = {
	isRegistr: false,
	user: null,
}

const LOGIN = 'LOGIN'

export const registrationReducer = (state = defaultState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, isRegistr: true, user: action.payload }

		default:
			return state
	}
}

export const loginAction = (payload) => ({ type: LOGIN, payload })
