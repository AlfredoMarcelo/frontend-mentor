//Para reenderizar app
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloApp, Jugador} from './HelloApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloApp/>
        <Jugador/>
    </React.StrictMode>
)