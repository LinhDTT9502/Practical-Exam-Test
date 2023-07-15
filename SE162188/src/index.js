import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="298458591622-2elmpddr4h3fhji6urt5gj6r2luv874m.apps.googleusercontent.com">
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</GoogleOAuthProvider>
	</React.StrictMode>
);

