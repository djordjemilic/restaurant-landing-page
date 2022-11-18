import "./App.scss";
import AboutUs from "./components/about-us/about-us.component";
import Brands from "./components/brands/brands.component";
import Facts from "./components/facts/facts.component";
import Home from "./components/home/home.component";
import SpecialDishes from "./components/special-dishes/special-dishes.component";
import Specialities from "./components/specialities/specialities.component";
import Reservation from "./components/reservation/reservation.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
      <Home />
      <Brands />
      <Specialities />
      <AboutUs />
      <Facts />
      <SpecialDishes />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
