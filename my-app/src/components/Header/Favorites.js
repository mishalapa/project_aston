import { Button, Card } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as Logo } from '../../image/heard3.svg'
import { addFavorites } from '../../redux/'
import { fetchMovie } from '../../redux/moviesSlice'
const { Meta } = Card

export function Favorites() {
	const favorites = useSelector((state) => state.movies.favorites)
	const movies = useSelector((state) => state.movies.movies)
	console.log(movies)
	console.log(favorites)
	const dispatch = useDispatch()
	const image = `https://simkl.in/posters/${favorites.poster}_m.jpg`

	useEffect(() => {
		dispatch(fetchMovie(favorites[0]))
	}, [])

	function toogle() {
		console.log(favorites)
		dispatch(addFavorites(favorites))
	}

	return (
		<>
			{movies && movies.length > 0 ? (
				<div className='movie__item'>
					<Card hoverable style={{ width: 152 }} cover={<img alt='example' src={image} />}>
						<Meta style={{ fontSize: '16px', textAlign: 'center' }} title={movies.title} description={movies.year} />
						<div className='movie__favorites'>
							<Button>Подробнее</Button>
							<Logo className='favorites__icon' height={'10px'} onClick={toogle} />
						</div>
					</Card>
				</div>
			) : (
				<p>You do not have favorite movies</p>
			)}
		</>
	)
}
