import React, { useCallback, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addHistory } from '../../redux'
import { useGetMoviesQuery } from '../../redux/movieApi'
import { debounce } from '../../utility'

import './search.css'

export const SearchNow = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [value, setValue] = useState('')
	const { data = [] } = useGetMoviesQuery(value)

	const onSubmit = () => {
		dispatch(addHistory(value))
		navigate(`/search/${value}`)
	}

	const onChange = (event) => setValue(event.target.value)

	const debounceOnChange = useCallback(debounce(onChange), [])

	const itemClickHandler = (e) => {
		dispatch(addHistory(e.target.textContent))
		const result = data.filter((el) => el.title === e.target.textContent)
		navigate(`/movies/${result[0].ids.simkl_id}`)
	}

	return (
		<div className='searchPanel'>
			<h1>Поиск фильмов...</h1>
			<form className='searchForm' onSubmit={onSubmit}>
				<input className='searchForm__input' type='text' placeholder='Movie name' onChange={debounceOnChange} />
				<button type='text' onClick={onSubmit}>
					Search
				</button>
				<ul className='autocomplete'>
					{data.length > 0
						? data.map((movie, id) => {
								return (
									<li className='autocomplete__item' key={id} onClick={itemClickHandler}>
										{movie.title}
									</li>
								)
						  })
						: value.length > 0 && <li className='autocomplete__item'>Movie not found</li>}
				</ul>
			</form>
		</div>
	)
}
