import React from "react";
import { motion } from "framer-motion";
import ProjectImage1 from "../assets/Project/reviewer.png";
import ProjectImage2 from "../assets/Project/gallery.png";
import ProjectImage3 from "../assets/Project/FleurDeLis.png";
import ProjectImage4 from "../assets/Project/QuotGenerator.png";
import ProjectImage5 from "../assets/Project/Calculator1.png";
import ProjectImage6 from "../assets/Project/tic-tac.png";
import ProjectImage7 from "../assets/Project/rock-paper-scissors.png";
import ProjectImage8 from "../assets/Project/thorhammer.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const openProjectUrl = (url) => {
  window.open(url, "_blank"); // Open the URL in a new tab
};

const projectsData = [
  { title: "Project 1", imageUrl: ProjectImage1, url: "  https://renx19.github.io/Image-Gallery/" },
  { title: "Project 2", imageUrl: ProjectImage2, url: "https://renx19.github.io/xReviewer/" },
  { title: "Project 3", imageUrl: ProjectImage3, url: "https://renx19.github.io/fleurdelisx.github.io/" },
  { title: "Project 4", imageUrl: ProjectImage4, url: "https://renx19.github.io/quote-generator/" },
  { title: "Project 5", imageUrl: ProjectImage5, url: "https://renx19.github.io/calculator-js/" },
  { title: "Project 6", imageUrl: ProjectImage6, url: "https://renx19.github.io/tick-tac-toe/" },
  { title: "Project 7", imageUrl: ProjectImage7, url: "https://renx19.github.io/rock-paper-scissors/" },
  { title: "Project 8", imageUrl: ProjectImage8, url: "https://renx19.github.io/thor-hammer/" },
  


  // Add more projects with their titles, image URLs, and URLs here
];

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48" style={{ minHeight: "600px" }}>
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-grey">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5"></div>
        </div>
        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => openProjectUrl(project.url)} // Call the openProjectUrl function on click
            >
              <motion.div variants={projectVariant} className="relative">
                <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                  <p className="text-2xl font-playfair">{project.title}</p>
                  <p className="mt-7"></p>
                </div>
                {/* Use the anchor element for clickable images */}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img src={project.imageUrl} alt={project.title} />
                </a>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
