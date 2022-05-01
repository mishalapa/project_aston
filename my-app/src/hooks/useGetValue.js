import { useSelector } from 'react-redux'

const favorites = 'favorites'
const history = 'history'
const user = 'user'
const isLogin = 'isLogin'

export const useGetValue = (item) => {
	switch (item) {
		case favorites: {
			const data = useSelector((state) => state.movies.favorites)
			return data
		}
		case history: {
			const data = useSelector((state) => state.movies.history)
			return data
		}
		case isLogin: {
			const data = useSelector((state) => state.login.isLogin)
			return data
		}
		case user: {
			const data = useSelector((state) => state.login.user)
			return data
		}
		default:
			alert('not action')
	}
}
