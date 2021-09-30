import React, { useLayoutEffect } from 'react';
import logo from "./shared/img/hcf-logo-white.png";
import background from './shared/img/worldmap_white.svg';
import './App.scss';
import Header from './header/containers/Header';
import {Router} from '@reach/router';
import Home from './shared/containers/Home';
import { useController } from 'react-scroll-parallax';

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
