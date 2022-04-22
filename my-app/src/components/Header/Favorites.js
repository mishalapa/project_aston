import { Button, Card } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as Logo } from '../../image/heard3.svg'
import { addFavorites } from '../../redux/'

const { Meta } = Card

export function Favorites() {
	const favorites = useSelector((state) => state.movies.favorites)
	const dispatch = useDispatch()
	const image = `https://simkl.in/posters/${favorites.poster}_m.jpg`

	function toogleFavorites() {
		console.log(favorites)
		dispatch(addFavorites(favorites))
	}

	return (
		<>
			{favorites && favorites.length > 0 ? (
				<div className='movie__item'>
					<Card hoverable style={{ width: 152 }} cover={<img alt='example' src={image} />}>
						<Meta style={{ fontSize: '16px', textAlign: 'center' }} title={favorites.title} description={favorites.year} />
						<div className='movie__favorites'>
							<Button>Подробнее</Button>
							<Logo className='favorites__icon' height={'10px'} onClick={toogleFavorites} />
						</div>
					</Card>
				</div>
			) : (
				<p>You do not have favorite movies</p>
			)}
		</>
	)
}
