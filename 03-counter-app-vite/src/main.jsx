//Para reenderizar app
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloApp} from './HelloApp';
import {FirstApp} from './FirstApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloApp/>
        <FirstApp/>
    </React.StrictMode>
)