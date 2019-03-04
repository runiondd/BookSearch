import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/Nav';
import Search from "./pages/searchResults";
import Saved from "./pages/savedList";
import NoMatch from "./pages/searchResults";
import Jumbo from './components/JumboT';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div>
      <Router>
      <div>
        <NavBar />
        <Jumbo />
        <SearchBar />

        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
          <Route exact path="/books/:id" component={Search} />
          <Route component={NoMatch} /> }
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
