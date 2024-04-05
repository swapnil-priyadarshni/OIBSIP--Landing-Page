import { useState } from "react";
import "./Navbar1.css";

function Navbar1() {
  const [active, setActive] = useState("nav_menu");
  const [icon, setIcon] = useState("nav_toggler");
  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");

    if (icon === "nav_toggler") {
      setIcon("nav_toggler toggle");
    } else setIcon("nav_toggler");
  };
  return (
    <>
      <nav className="nav">
        <a href="#" className="nav_brand">
          <h3> BetterHealth</h3>
        </a>
        <ul className={active}>
          <li className="nav_items">
            <a href="#" className="nav_links">
              Home
            </a>
          </li>
          <li className="nav_items">
            <a
              href="https://en.wikipedia.org/wiki/Mental_health"
              target=" "
              className="nav_links"
            >
              Know More
            </a>
          </li>
          <li className="nav_items">
            <a
              href="https://screening.mhanational.org/screening-tools/"
              target=" "
              className="nav_links"
            >
              Get Help
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
