import "./App.scss";
import AboutUs from "./components/about-us/about-us.component";
import Brands from "./components/brands/brands.component";
import Home from "./components/home/home.component";
import Specialities from "./components/specialities/specialities.component";

function App() {
  return (
    <div>
      <Home />
      <Brands />
      <Specialities />
      <AboutUs />
    </div>
  );
}

export default App;
