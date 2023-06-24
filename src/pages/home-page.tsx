import AboutUs from "../components/about-us";
import Facilities from "../components/facilities";
import Hero from "../components/hero";
import OurServices from "../components/our-services";

function App() {
  return (
    <>
      <Hero />
      <div className="bg-about-us-pattern">
        <div className="flex flex-col gap-20 bg-white bg-opacity-80 px-5 py-20 backdrop-blur">
          <AboutUs />
          <Facilities />
        </div>
      </div>
      <OurServices />
    </>
  );
}

export default App;
