import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState, useEffect } from "react";
import "../components/Spin.css"
import Particle from '../components/Particle'
import '../components/Particle.css'
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [isSpinning, setIsSpinning] = useState(false);
  


  useEffect(() => {
    // Start spinning after a delay
    const spinTimeout = setTimeout(() => {
      setIsSpinning(true);
    }, 1000);

    return () => clearTimeout(spinTimeout);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}> 
       <Particle    />
    <section
    
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 "
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full "
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              
              src= {require('../assets/profile1.png')} 
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src= {require('../assets/profile1.png')} 
          />
        )}
       
      </div> 
    


      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Mark Justin Borja
            <span
              className="xs:relative xs:text-white xs:font-semibold z-20 xs:before:
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
           
            </span>
          </p>

          <p className="mt-10 mb-7 text-5m text-center md:text-start text-3xl">
           Web Developer
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

      <AnchorLink
       className="relative inline-block text-lg group w-36 h-12 mb-4" 
         onClick={() => setSelectedPage("contact")}
      href="#contact"
>
  <span className="relative z-10 block w-full h-full px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
    <span className="relative">Contact Me</span>
      </span>
     <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
        </AnchorLink>



        <AnchorLink
      className="rounded-md w-36 h-12 px-5 py-3 m-4 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white flex items-center justify-center" 
      onClick={() => setSelectedPage("contact")}
       href="#contact"
      >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Hire Me</span>
      </AnchorLink>


        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"  
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
        <div className="relative mt-5 md:mt-8 flex flex-row space-x-3">
  <img
    src={require('../assets/shuriken-removebg-preview.png')}
    alt="Spinning Image"
    className={`your-image-class ${isSpinning ? "animate-spin-slow" : ""}`}
  
  />

  <img
    src={require('../assets/shuriken-removebg-preview.png')}
    alt="Spinning Image"
    className={`your-image-class ${isSpinning ? "animate-spin-medium" : ""}`}
  />

  <img
    src={require('../assets/shuriken-removebg-preview.png')}
    alt="Spinning Image"
    className={`your-image-class ${isSpinning ? "animate-spin-fast" : ""}`} 
  />
</div>


      </div>
    </section>
    </div>

  
  );
};

export default Landing;
