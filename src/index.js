import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import Axios from 'axios'


Axios.defaults.baseURL = 'https://hstudy.herokuapp.com'; // 로그인부분
// Axios.defaults.baseURL = 'http://localhost:4000/'; // 로그인부분
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.withCredentials = true;


ReactDOM.render(<App />, document.getElementById('root'));

 