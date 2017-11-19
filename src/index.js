import React from 'react';
import ReactDOM from 'react-dom';
import './Pages/Login/index.css';
import Login from './Pages/Login/index.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './styles/semantic.min.css'


ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>, 
    document.getElementById('root'));

registerServiceWorker();
