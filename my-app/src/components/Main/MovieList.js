import { Button, Card } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as Logo } from '../../image/heard3.svg'
import { addFavorites } from '../../redux'

const { Meta } = Card

export const MovieList = (movie) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const image = `https://simkl.in/posters/${movie.movie.poster}_m.jpg`

	function openFilm() {
		navigate(`/movies/${movie.movie.ids.simkl_id}`)
	}

	function toogleFavorites() {
		console.log(movie.movie)
		dispatch(addFavorites(movie.movie))
	}

	return (
		<div className='movie__item'>
			<Card hoverable style={{ width: 152 }} cover={<img className='card__image' alt='example' src={image} />}>
				<Meta style={{ fontSize: '16px', textAlign: 'center' }} title={movie.movie.title} description={movie.movie.year} />
				<div className='movie__favorites'>
					<Button onClick={openFilm}>Подробнее</Button>
					<Logo className='favorites__icon' height={'10px'} onClick={toogleFavorites} />
				</div>
			</Card>
		</div>
	)
}
