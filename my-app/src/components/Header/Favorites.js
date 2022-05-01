import React, { useEffect, useState } from 'react'

import { fetchFavorites } from '../../redux'
import MovieFavorites from '../Main/MovieFavorites'

import { useGetValue } from '../../hooks'

export function Favorites() {
	const favorites = useGetValue('favorites')
	const [movies, setMovies] = useState(null)

	useEffect(() => {
		fetchFavorites(setMovies, favorites)
	}, [favorites])

	return (
		<div className='movie__list'>
			{movies?.length > 0 ? (
				movies.map((movie) => {
					return <MovieFavorites movie={movie} key={movie.simkl_id} />
				})
			) : (
				<p className='not__history'>No Movies</p>
			)}
		</div>
	)
}
