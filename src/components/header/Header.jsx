import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/data/logo";
import menus from "../../assets/data/menu";
import Button from "../button/ButtonOne";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [menuActive, setMenuActive] = useState(null);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY > 100));
    return () => {
      setScroll({});
    };
  }, []);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      id="header_main"
      className={`header js-header ${scroll ? "is-fixed" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__body d-flex justify-content-between">
              <div className="header__logo">
                <Link to="/">
                  <img src={logo} alt="" id="site-logo" />
                </Link>
              </div>
              <div className="header__right" onClick={handleMenuActive}>
                <nav
                  id="main-nav"
                  className={`main-nav ${menuActive ? "active" : ""}`}
                  onClick={handleMenuActive}
                >
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, index) => (
                      <li
                        key={index}
                        className="menu-item"
                        onClick={handleMenuActive}
                      >
                        <a href={data.links}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="button">
                  <Button />
                </div>
                <div
                  className={`mobile-button ${menuActive ? "active" : ""} `}
                  onClick={handleMenuActive}
                >
                  {menuActive ? (
                    <RxCross1 className="menu-icon" />
                  ) : (
                    <GiHamburgerMenu className="menu-icon" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
