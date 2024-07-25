import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../assets/css/bootstrap.min.css";
import "../assets/css/slick.css";
import "../assets/css/animate.css";
import "../assets/css/style.css";
import logo from "../assets/img/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNavBar = () => {
    setNavOpen(!navOpen);
  };

  const closeNavBar = () => {
    setNavOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop - 50 &&
        window.scrollY < sectionTop + sectionHeight - 50
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    closeNavBar(); // Close the nav bar after clicking a link
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`st-site-header st-style1 ${
        isScrolled ? "st-sticky-active" : "st-transparent-header"
      } st-fixed-header`}
    >
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <a className="st-site-branding" href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="st-main-header-right">
              <nav
                className={`st-nav ${navOpen ? "responsive_nav" : ""}`}
                ref={navRef}
              >
                <ul className="st-nav-list st-onepage-nav">
                  <li>
                    <a
                      href="#home"
                      className={
                        activeSection === "home"
                          ? "st-smooth-move active"
                          : "st-smooth-move"
                      }
                      onClick={() => handleClick("home")}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className={
                        activeSection === "about"
                          ? "st-smooth-move active"
                          : "st-smooth-move"
                      }
                      onClick={() => handleClick("about")}
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#portfolio"
                      className={
                        activeSection === "portfolio"
                          ? "st-smooth-move active"
                          : "st-smooth-move"
                      }
                      onClick={() => handleClick("portfolio")}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className={
                        activeSection === "contact"
                          ? "st-smooth-move active"
                          : "st-smooth-move"
                      }
                      onClick={() => handleClick("contact")}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <div className="sp-phone">
                      <svg viewBox="0 0 513.64 513.64">
                        <g>
                          <g>
                            <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                          </g>
                        </g>
                      </svg>
                      <div className="sp-phone-no">+27 79 945 3446</div>
                    </div>
                  </li>
                </ul>
              </nav>

              <button className="nav-btn" onClick={toggleNavBar}>
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
