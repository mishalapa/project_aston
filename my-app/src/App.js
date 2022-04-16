import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './components/Registration'
import Login from './components/Login'
import { Provider } from 'react-redux'
import store, { persistor } from './app/store'
import Favorites from './components/Favorites'
import History from './components/History'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Header />
					<Routes>
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
