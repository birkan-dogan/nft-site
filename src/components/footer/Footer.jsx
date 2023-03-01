import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/data/logo";
import "./footer.css";

const Footer = function () {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () =>
    window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

  useEffect(function () {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer__body">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
              <p className="desc fs-18" data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="social">
                <li data-aos="fade-up" data-aos-duration="1000">
                  <Link to={"/"}>
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <Link to={"/"}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-duration="1600">
                  <Link to={"/"}>
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__bottom">
              <p className="fs-16">Copyright © {new Date().getFullYear()}</p>
              <ul>
                <li>
                  <Link to={"/"}>Terms & Condition</Link>
                </li>
                <li>
                  <Link to={"/"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"/"}>Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {isVisible && (
        <Link onClick={scrollToTop} to={"/"} id="scroll-top">
          <h4 style={{ paddingTop: "8px" }}>⬆</h4>
        </Link>
      )}
    </>
  );
};

export default Footer;
