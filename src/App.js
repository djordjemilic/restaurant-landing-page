import "./App.scss";
import AboutUs from "./components/about-us/about-us.component";
import Brands from "./components/brands/brands.component";
import Facts from "./components/facts/facts.component";
import Home from "./components/home/home.component";
import SpecialDishes from "./components/special-dishes/special-dishes.component";
import Specialities from "./components/specialities/specialities.component";

function App() {
  return (
    <div>
      <Home />
      <Brands />
      <Specialities />
      <AboutUs />
      <Facts />
      <SpecialDishes />
    </div>
  );
}

export default App;
