import React, { useState } from "react";
import "./Menu.css"; // Make sure to import your CSS file
import AnchorLink from "react-anchor-link-smooth-scroll";

const CircularMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`circular-menu ${isMenuOpen ? "active" : ""}`}>
      <a className="floating-btn" onClick={toggleMenu}>
        <img
          src={isMenuOpen ? require("../assets/bars (1).png") : require("../assets/menu-burger (1).png")}
          alt={isMenuOpen ? "Close Menu" : "Open Menu"}
        />
      </a>

      <menu className="items-wrapper">
        <AnchorLink href="#home" className="menu-item">
          <img src={require("../assets/home (1).png")} alt="Home" />
        </AnchorLink>
        <AnchorLink href="#skills" className="menu-item">
          <img src={require("../assets/layer (1).png")} alt="Skills" />
        </AnchorLink>
        <AnchorLink href="#projects" className="menu-item">
          <img src={require("../assets/project.png")} alt="Project" />
        </AnchorLink>
        <AnchorLink href="#contact" className="menu-item">
          <img src={require("../assets/contact (2).png")} alt="Contact" />
        </AnchorLink>
      </menu>
    </div>
  );
};

export default CircularMenu;
