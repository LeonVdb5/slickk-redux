import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import './App.css';
import Nav from '../components/Nav';
import VisiblePostList from './VisiblePostList';
import Login from './Login';


const App = ({ match: { params } }) => {
    return (
      <div className="app-main-container">
          <div className="nav">
            <Route component={ Nav }/>
          </div>
          <div className="main-container">
            <Switch>
            <Route 
              exact path="/" 
              render={(props) => <VisiblePostList {...props} holdFilter='all-holds' shineFilter='all-shines' lengthFilter='all-lengths' typeFilter='all-types' />}
            />
            <Route 
              path="/products" 
              render={(props) => <VisiblePostList {...props} holdFilter={params.filter1 || 'all-holds'} shineFilter={params.filter2 || 'all-shines'} lengthFilter='all-lengths' typeFilter='all-types' />}
            />
            <Route 
              path="/hairstyles" 
              render={(props) => <VisiblePostList {...props} holdFilter={'all-holds'} shineFilter={'all-shines'} lengthFilter={params.filter1 || 'all-lengths'} typeFilter={params.filter2 || 'all-types'} />}
            />
            <Route path="/login" component={ Login }/>
            </Switch>
          </div>
      </div>
    ); 
}

export default App


// <div className="footer">
// </div>