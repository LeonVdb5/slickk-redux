import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';

import './App.css';
import Nav from '../components/Nav';
import VisiblePostList from './VisiblePostList';


const App = () => {
    return (
      <div className="app-main-container">
        <div className="nav">
          <Nav />
        </div>
        <div className="main-container">
          <VisiblePostList />
        </div>
      </div>
    ); 
}

export default App
