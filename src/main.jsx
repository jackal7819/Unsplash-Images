import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import { AppProvider } from './Context';
import React from 'react';
import ReactDOM from 'react-dom/client';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<AppProvider>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</AppProvider>
);
