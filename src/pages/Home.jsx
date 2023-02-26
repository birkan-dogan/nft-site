import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import About from "../components/layouts/About";
import Speciality from "../components/layouts/Speciality";
import dataCard from "../assets/data/data-card";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Speciality data={dataCard} />
    </div>
  );
};

export default Home;
