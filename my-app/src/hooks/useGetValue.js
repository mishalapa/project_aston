import { useSelector } from 'react-redux'

const favorites = 'favorites'
const history = 'history'
const user = 'user'
const isLogin = 'isLogin'

export const useGetValue = (item) => {
	if (item == favorites) {
		const data = useSelector((state) => state.movies.favorites)
		return data
	}
	if (item == history) {
		const data = useSelector((state) => state.movies.history)
		return data
	}
	if (item == isLogin) {
		const data = useSelector((state) => state.login.isLogin)
		return data
	}
	if (item == user) {
		const data = useSelector((state) => state.login.user)
		return data
	}
}
