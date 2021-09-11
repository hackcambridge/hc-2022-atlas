import React from 'react';
import logo from './img/logo.svg';
import background from './img/worldmap_white.svg';
import './App.css';
import Header from './containers/Header';
import MovingBackground from './containers/MovingBackground';

function App() {
  const navElements = [
    {name: "About Us", href: "/"},
    {name: "FAQ", href: "/"},
    {name: "Our Sponsors", href: "/"},
    {name: "Meet the team", href: "/"}
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header logoPath={logo} navElements={navElements}/>
      <div id="content">
        <MovingBackground background={background}>
          {/* TEST BACKGROUND */}
          <div style={{height: "120vh"}}></div>
        </MovingBackground>
      </div>
    </div>
  );
}

export default App;
