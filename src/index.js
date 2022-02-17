import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from  './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

