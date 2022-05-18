import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'antd/dist/antd.min.css'

import { Favorites, History, Registration, Header, Login } from './components/Header'
import { Main, MovieItem } from './components/Main'
import { Search, SearchNow } from './components/Search'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import { DarkModeProvider } from './components/Context/darkModeContext'
import PageNotFound from './components/PageNotFound/PageNotFound'

import './App.css'
import { Auth } from './components/Header/Auth'

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<ErrorBoundary>
						<Header />
						<Routes>
							<Route path='/' element={<Main />}></Route>
							<Route path='/search' element={<SearchNow />}></Route>
							<Route path='/search/:id' element={<Search />}></Route>
							<Route path='/movies' element={<MovieItem />}></Route>
							<Route path='/movies/:simkl_id' element={<MovieItem />}></Route>
							<Route path='/login' element={<Login />}></Route>
							<Route path='/registration' element={<Registration />}></Route>
							<Route
								path='/favorites'
								element={
									<Auth>
										<Favorites />
									</Auth>
								}
							></Route>
							<Route
								path='/history'
								element={
									<Auth>
										<DarkModeProvider>
											<History />
										</DarkModeProvider>
									</Auth>
								}
							></Route>
							<Route path='*' element={<PageNotFound />}></Route>
						</Routes>
					</ErrorBoundary>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}

export default App
