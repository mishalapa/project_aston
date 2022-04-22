import 'antd/dist/antd.css'
import React from 'react'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { Favorites, History, Registration, Header, Login } from './components/Header'
import { Main, MovieItem } from './components/Main'
import { Search, SearchNow } from './components/Search'

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<Main />}></Route>
						<Route path='/search' element={<SearchNow />}></Route>
						<Route path='/search/:id' element={<Search />}></Route>
						<Route path='/movies' element={<MovieItem />}></Route>
						<Route path='/movies/:simkl_id' element={<MovieItem />}></Route>
						<Route path='/login' element={<Login />}></Route>
						<Route path='/registration' element={<Registration />}></Route>
						<Route path='/favorites' element={<Favorites />}></Route>
						<Route path='/history' element={<History />}></Route>
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}

export default App
