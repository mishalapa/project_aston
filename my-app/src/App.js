import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './components/Registration'
import Login from './components/Login'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/registration' element={<Registration />}></Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
