import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import About from "../components/layouts/About";
import Speciality from "../components/layouts/Speciality";
import dataCard from "../assets/data/data-card";
import Portfolio from "../components/layouts/Portfolio";
import dataPortfolio from "../assets/data/portfolioData";
import Monteno from "../components/layouts/Monteno";
import dataMontono from "../assets/data/data-montono";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Speciality data={dataCard} />
      <Portfolio data={dataPortfolio} />
      <Monteno data={dataMontono} />
    </div>
  );
};

export default Home;
