//Para reenderizar app
import React from 'react';
import ReactDOM from 'react-dom/client';
/* import {HelloApp} from './HelloApp'; */
import {FirstApp} from './FirstApp';
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/*   <HelloApp/> */}
        <FirstApp title="hola mundo" subTitle={456}/>
    </React.StrictMode>
)