import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { addHistory } from '../../redux'
import './search.css'
import MovieList from '../Main/MovieList'
import { debounce } from '../../utility'
import { useGetMoviesQuery } from '../../redux/movieApi'

export const Search = () => {
	const { id = '' } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [value, setValue] = useState(id)
	const { data = [] } = useGetMoviesQuery(value)

	const onChange = (event) => {
		setValue(event.target.value)
	}

	const debounceOnChange = useCallback(debounce(onChange), [])

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
					placeholder='Название фильма или сериала'
					onChange={debounceOnChange}
				/>
			</form>
			<div className='movie__list'>
				{data && data.length > 0 ? (
					data.map((movie, index) => {
						return <MovieList movie={movie} key={index} />
					})
				) : (
					<p style={{ fontSize: '50px' }}>Movie not found</p>
				)}
			</div>
		</div>
	)
}
