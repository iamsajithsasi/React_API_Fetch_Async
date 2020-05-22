import React, {useState, useEffect} from 'react';
import './App.css';

import Home from './Home/Home';
import About from './About/About';
import Shop from './Shop/Shop';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">ReactRouter</Link>
              </li>
            </ul>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Users</Link></li>
                {/* <li><Link to="/shop">Shop</Link></li> */}
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/shop" exact component={Shop} /> */}
          <Route path="/shop/:id" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
