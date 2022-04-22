import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addHistory, fetchMovies } from '../../redux'

import './Search.css'

export const SearchNow = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const movies = useSelector((state) => state.movies.movies)

	useEffect(() => {
		dispatch(fetchMovies(value))
	}, [value])

	const onSubmit = () => {
		dispatch(addHistory(value))
		navigate(`/search/${value}`)
	}

	const itemClickHandler = (e) => {
		dispatch(addHistory(e.target.textContent))
		dispatch(fetchMovies(e.target.textContent))
		const result = movies.filter((el) => el.title === e.target.textContent)
		navigate(`/movies/${result[0].ids.simkl_id}`)
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
				<button type='text' onClick={onSubmit}>
					Search
				</button>
				<ul className='autocomplete'>
					{movies && movies.length > 0 ? (
						movies.map((movie, index) => {
							return (
								<li className='autocomplete__item' key={index} onClick={itemClickHandler}>
									{movie.title}
								</li>
							)
						})
					) : (
						<li className='autocomplete__item'>Movie not found</li>
					)}
				</ul>
			</form>
		</div>
	)
}
