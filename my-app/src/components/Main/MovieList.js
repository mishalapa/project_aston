import { Button, Card } from 'antd'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useGetValue } from '../../hooks'
import { toggleFavourite } from '../../redux'

const { Meta } = Card

const MovieList = (movie) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const favorites = useGetValue('favorites')
	const isLogin = useGetValue('isLogin')

	const image = `https://simkl.in/posters/${movie.movie.poster}_m.jpg`

	const [like, setLike] = useState(favorites.includes(movie.movie.ids.simkl_id))

	function openFilm() {
		navigate(`/movies/${movie.movie.ids.simkl_id}`)
	}

	function toogle() {
		setLike(!like)
		dispatch(toggleFavourite(movie.movie.ids.simkl_id))
	}

	return (
		<div className='movie__item'>
			<Card hoverable className='movie__wrapper' cover={<img className='card__image' alt='example' src={image} />}>
				<Meta className='movie__title' title={movie.movie.title} description={movie.movie.year} />
				<div className='movie__favorites'>
					<Button onClick={openFilm}>Подробнее</Button>

					{like
						? isLogin && <AiTwotoneHeart onClick={toogle} transform={'scale(2)'} />
						: isLogin && <AiOutlineHeart onClick={toogle} transform={'scale(1.8)'} />}
				</div>
			</Card>
		</div>
	)
}

MovieList.propTypes = {
	movie: PropTypes.object,
}

export default MovieList
