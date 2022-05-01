import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

export const fetchFavorites = (setFunction, ids) => {
	const data = ids.map((simkl) =>
		axios.get(`https://api.simkl.com/movies/${simkl}?client_id=${CLIENT_ID}&extended=full`)
	)

	Promise.all(data).then((response) => {
		const moviesData = response.map((result) => {
			if (result) {
				return {
					title: result.data.title,
					year: result.data.year,
					poster: result.data.poster,
					simkl_id: result.data.ids.simkl,
				}
			}
		})
		setFunction(moviesData)
	})
}
