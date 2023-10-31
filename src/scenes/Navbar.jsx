import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import Menu from "../components/CircularMenu";
import 'tailwindcss/tailwind.css';


const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false); // Define isMenuToggled state here
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = selectedPage === "home" ? "" : "bg-grey";

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position and section offsets here
      // Replace these with your actual section IDs
      const homeOffset = 0;
      const skillsOffset = document.getElementById("about")?.offsetTop || 0;
      const projectsOffset = document.getElementById("projects")?.offsetTop || 0;
      const contactOffset = document.getElementById("contact")?.offsetTop || 0;

      const scrollPosition = window.scrollY;

      if (scrollPosition < skillsOffset) {
        setSelectedPage("home");
      } else if (scrollPosition < projectsOffset) {
        setSelectedPage("about");
      } else if (scrollPosition < contactOffset) {
        setSelectedPage("projects");
      } else {
        setSelectedPage("contact");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setSelectedPage]);

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">MJ</h4>

        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <>
            {/* Wrap the Menu component in a div and use Flexbox to align it */}
            
            <Menu isMenuToggled={isMenuToggled} setIsMenuToggled={setIsMenuToggled} setSelectedPage={setSelectedPage} />
        
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
