import Nav from "./components/Nav";
import Partner from "./components/Partner";
import Sliders from "./components/Sliders";
import Restaurants from "./components/Restaurants";
import BrandSection from "./components/BrandSection";
import "./App.css";
function App() {
  return (
    <>
      <section>
        <Nav />
      </section>
      <section>
        <Sliders />
      </section>
      <section>
        <Partner />
      </section>
      <section>
        <Restaurants/>
      </section>
      <section>
        <BrandSection/>
      </section>
    </>
  );
}

export default App;
