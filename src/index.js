import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Login from './Login';


ReactDOM.render(<Navbar   />,document.getElementById('navbar') );
ReactDOM.render(<Login   />,document.getElementById('login') );
