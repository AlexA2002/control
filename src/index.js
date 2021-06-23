import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from "@auth0/auth0-react";

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider 
        Domain = "alexbolanos.eu.auth0.com" 
        clientId = "nQIT18xWyNVjjGn1ehKUkgew8AqCGvPd" 
        redirectUri = {window.location.origi}
        >
            <App/>
        </Auth0Provider>
    </React.StrictMode>,

 document.getElementById('root')
);