import { createContext, useContext } from 'react';

import { useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleDarkTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	return (
		<AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => useContext(AppContext);