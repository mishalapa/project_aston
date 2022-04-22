import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { addHistory, fetchMovies } from '../../redux'
import './Search.css'
import { MovieList } from '../Main'

export const Search = () => {
	const { id } = useParams()
	const [value, setValue] = useState(id)
	const dispatch = useDispatch()
	const movies = useSelector((state) => state.movies.movies)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(fetchMovies(value))
	}, [value])

	const onSubmit = () => {
		dispatch(addHistory(value))
		navigate(`/search/${value}`)
	}

	return (
		<div className='searchPanel'>
			<h1>Поиск фильмов...</h1>
			<form className='searchForm' onSubmit={onSubmit}>
				<input
					className='searchForm__input'
					type='text'
					value={value}
					placeholder='Название фильма или сериала'
					onChange={(event) => setValue(event.target.value)}
				/>
			</form>
			<div className='movie__list'>
				{movies.length > 0 ? (
					movies.map((movie, index) => {
						return <MovieList movie={movie} key={index} />
					})
				) : (
					<p style={{ fontSize: '50px' }}>Movie not found</p>
				)}
			</div>
		</div>
	)
}
