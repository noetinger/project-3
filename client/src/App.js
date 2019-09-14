import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Nav from './components/Nav';
// import search from './pages/search';
// import Bookshelf from './pages/Bookshelf';
// import NoMatch from './pages/NoMatch'
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={search}/>
        <Route exact path="/search" component={search}/>
        <Route exact path="/bookshelf" component={Bookshelf}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);

export default App;
