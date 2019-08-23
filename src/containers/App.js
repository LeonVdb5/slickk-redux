import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';

import './App.css';
import VisiblePostList from './VisiblePostList';


const App = () => {
    return (
      <div>
        <VisiblePostList/>
      </div>
    ); 
}

export default App
