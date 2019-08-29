import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import './App.css';
import Nav from '../components/Nav';
import VisiblePostList from './VisiblePostList';
import Login from './Login';


const App = () => {
    return (
      <div className="app-main-container">
          <div className="nav">
            <Route component={ Nav }/>
          </div>
          <div className="main-container">
            <Switch>
            <Route exact path="/" component={ VisiblePostList }/>
            <Route path="/products" component={ VisiblePostList }/>
            <Route path="/hairstyles" component={ VisiblePostList }/>
            <Route path="/login" component={ Login }/>
            </Switch>
          </div>
      </div>
    ); 
}

export default App


// <div className="footer">
// </div>