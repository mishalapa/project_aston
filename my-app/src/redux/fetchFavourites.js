import axios from 'axios'

export const fetchFavorites = (setFunction, ids) => {
	const data = ids.map((simkl) =>
		axios.get(
			`https://api.simkl.com/movies/${simkl}?client_id=5892c4006298023ae6d06488f20e27d41fd08ae18055ab42d5bd76b80318ab7d&extended=full`
		)
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
