import React from 'react';
import logo from './img/logo.svg';
import background from './img/worldmap_white.svg';
import './App.css';
import Header from './containers/Header';
import {Router} from '@reach/router';
import Home from './containers/Home';

function App() {
  const navElements = [
    {name: "About Us", href: "/"},
    {name: "FAQ", href: "/"},
    {name: "Our Sponsors", href: "/"},
    {name: "Meet the team", href: "/"}
  ];
  return (
    <div className="App">
      <Header logoPath={logo} navElements={navElements}/>
      <Router>
        <Home background={background} path='/'/>
      </Router>
    </div>
  );
}

export default App;
