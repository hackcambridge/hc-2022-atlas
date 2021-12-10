import logo from "./shared/img/Logo_White.png";
import './App.scss';
import Header from './header/containers/Header';
import Home from './shared/containers/Home';
import MLHBanner from "./header/components/MLHBanner";

function App() {
  const navElements = [
    {name: "About Us", href: "#about-us"},
    {name: "FAQ", href: "#faq"},
    {name: "Our Sponsors", href: "#sponsor-showcase"},
    {name: "Meet the team", href: "#team"}
  ];
  return (
    <div className="App">
      <MLHBanner />
      <Header logoPath={logo} navElements={navElements}/>
      {/* <Router> */}
        <Home path='/'/>
      {/* </Router> */}
    </div>
  );
}

export default App;
