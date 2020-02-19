import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



ReactDOM.render(<App />, document.getElementById('root'));
 