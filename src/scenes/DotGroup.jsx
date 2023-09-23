import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex flex-col gap-6 fixed top-[45%] right-7">
      <AnchorLink
        href="#home"
        className={`custom-link ${selectedPage === "home" ? "" : ""} transition-transform transform hover:scale-110 hover:bg-yellow hover:rounded-full`}
        onClick={() => setSelectedPage("home")}
      >
        <img
          src={require('../assets/home.png')}
          alt="Home"
        />
      </AnchorLink>

      <AnchorLink
        href="#skills"
        className={`custom-link ${selectedPage === "skills" ? "" : ""} w-5 h-5 transition-transform transform hover:scale-110 hover:bg-yellow hover:rounded-full`}
        onClick={() => setSelectedPage("skills")}
      >
        <img
          src={require('../assets/layers.png')}
          alt="Skills"
          className={`w-5 h-5`}
        />
      </AnchorLink>

      <AnchorLink
        href="#projects"
        className={`custom-link ${selectedPage === "projects" ? "" : ""} w-5 h-5 transition-transform transform hover:scale-110 hover:bg-yellow hover:rounded-full`}
        onClick={() => setSelectedPage("projects")}
      >
        <img
          src={require('../assets/project.png')}
          alt="Projects"
          className={`w-5 h-5`}
        />
      </AnchorLink>

      <AnchorLink
        href="#contact"
        className={`custom-link ${selectedPage === "contact" ? "" : ""} w-5 h-5 transition-transform transform hover:scale-110 hover:bg-yellow hover:rounded-full`}
        onClick={() => setSelectedPage("contact")}
      >
        <img
          src={require('../assets/contact.png')}
          alt="Contact"
          className={`w-5 h-5`}
        />
      </AnchorLink>
    </div>
  );
};

export default DotGroup;
