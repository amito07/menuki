import "./App.css";
import Footer from "./Components/Footer";
import MobileNav from "./Components/MobileNav";
import Nav from "./Components/Nav";
import RouteComponent from "./Route";
import { useState } from 'react'

function App() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <>
     <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
    <RouteComponent/>
    <Footer/>
    </>
  );
}

export default App;
