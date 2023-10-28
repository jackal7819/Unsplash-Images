import './index.css';

import App from './App';
import { AppProvider } from './Context';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
	<AppProvider>
		<App />
	</AppProvider>
);
