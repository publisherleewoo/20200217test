import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import Axios from 'axios'


Axios.defaults.baseURL = 'http://localhost:4000';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



ReactDOM.render(<App />, document.getElementById('root'));

 