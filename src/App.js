import { useEffect } from "react";
import "../src/assets/icons/font-awesome.css";
import "./App.css";
import Home from "./pages/Home";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
