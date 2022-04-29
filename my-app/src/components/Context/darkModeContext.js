import { createContext, useState } from 'react'

const defaultState = {
	darkMode: false,
	toggleDarkMode: () => console.log(),
}
const DarkModeContext = createContext(defaultState)

const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
	}
	return (
		<div>
			<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
		</div>
	)
}

export { DarkModeContext, DarkModeProvider }
