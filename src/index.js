import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from  './App';
import Header from './components/Header';
import Footer from './components/Footer';

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

