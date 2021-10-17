import logo from "./shared/img/hcf-logo-white.png";
import './App.scss';
import Header from './header/containers/Header';
import {Router} from '@reach/router';
import Home from './shared/containers/Home';
import Footer from "./footer/Footer";

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
        <Home path='/'/>
      </Router>
    </div>
  );
}

export default App;
