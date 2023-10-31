import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import ProficiencyBar from "../components/ProficiencyBar";
import { skills } from '../components/Data';
import Gallery from "../components/Gallery";
import { CertificateData } from '../components/DataCertificate';
import Credential from "../components/Certificate";
import { motion } from "framer-motion";


const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [softSkillsClicked, setSoftSkillsClicked] = useState(true);
  const [CertificateClicked,  setCertificateClicked] = useState(true);
  const isPhone = useMediaQuery("(max-width: 687px)"); // For phones
  const isTablet = useMediaQuery("(min-width: 688px) and (max-width: 1059px)"); // For tablets



  
  const initialItems = [
    {
      id: "devSkills",
      subtitle: "",
      title: (
        <a
        href="#_"
        className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group w-40 h-12"
        onClick={() => handleItemClick("devSkills")}
        style={{ lineHeight: "1" }} // Add this line to adjust line-height
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Tech Skills</span>
      </a>
      ),
      content: (
        
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="text-xl mb-5 max-w-screen-xl mx-auto px-4">

          
  <p>Web Development</p>
  <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
    {/* HTML */}
    <ProficiencyBar skillName="html-5" proficiencyLevel="Proficient" skillText="HTML" />
    
    {/* CSS */}
    <ProficiencyBar skillName="css-3" proficiencyLevel="Proficient" skillText="CSS" />
    
    {/* Tailwind CSS */}
    <ProficiencyBar skillName="icons8-tailwindcss-64" proficiencyLevel="Competent" skillText="Tailwind CSS" />

    {/* React */}
    <ProficiencyBar skillName="react" proficiencyLevel="Competent" skillText="React" />
    
    {/* Next.js */}
    <ProficiencyBar skillName="nextjs" proficiencyLevel="Advanced" skillText="Next.js" />

    {/* Node.js */}
    <ProficiencyBar skillName="icons8-node-js-64" proficiencyLevel="Novice" skillText="Node.js" />

    {/* PHP */}
    <ProficiencyBar skillName="icons8-php-64" proficiencyLevel="Novice" skillText="PHP" />

    {/* MongoDB */}
    <ProficiencyBar skillName="icons8-mongodb-a-cross-platform-document-oriented-database-program-64" proficiencyLevel="Novice" skillText="MongoDB" />

    {/* SQL */}
    <ProficiencyBar skillName="icons8-sql-64" proficiencyLevel="Novice" skillText="SQL" />
  </div>
</div>
</motion.div>
      ),
    },
    {
      id: "softSkills",
      subtitle: "",
      title: (
        <a
          href="#_"
          className="px-10 py-3.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block w-40 h-12 border-2 border-purple-600" // Added the border class here
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white">Soft Skills</span>
        </a>
      ),
      content: softSkillsClicked ? <Gallery softskills={skills} /> : null
    },
    {
     
      id: "certificate",
      subtitle: "",
      title: (
        <a href="#_" class="relative inline-flex items-center justify-center inline-block px-5 py-3 overflow-hidden font-bold rounded-md group w-40 h-12">
        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
        <span class="relative w-full text-center text-black transition-colors duration-200 ease-in-out group-hover:text-white">Certificate</span>
        <span class="absolute inset-0 border-2 border-black rounded-md"></span>
      </a>
      
      ),
      content: CertificateClicked ? <Credential credentials={CertificateData} /> : null
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const resetSkills = () => {
    setSelectedId(null);
  };

const handleItemClick = (itemId) => {
  if (selectedId === itemId) {
    setSelectedId(null); // Close the selected item when its title is clicked again
  } else {
    setSelectedId(itemId);
  }
};
const handleSoftSkillsClick = () => {
  setSoftSkillsClicked(!softSkillsClicked);
};
const handleCertificateClick = () => {
  setCertificateClicked(!CertificateClicked);
};


return (
  <div style={{ minHeight: "100vh" }}>
    <section
      id="about"
      className="pt-2 pb-0 mt-20"
      style={{
        minHeight: isAboveLarge ? "600px" : "auto",
      }}
    >



      <div
        className={`md:flex md:justify-between mt-0 md:mt-0 lg:mt-20 ${
          
          isAboveLarge ? "gap-2" : "md:flex-col"
        }`}
        style={{
          minHeight: isAboveLarge ? "400px" : "auto",
          display: "flex",
          flexDirection: isAboveLarge ? "row" : "column",
          justifyContent: isAboveLarge ? "space-evenly" : "center",
        }}
      >
        {/* Image on the left (opposite to the content) */}
        {isAboveLarge && (
          <div className="md:w-1/2 lg:w-1/3 mt-0 md:mt-0 relative">
            <img
               src= {require('../assets/about.jpg')}
              alt="About Me"
              className="w-full h-4/5"
              
            />
          </div>
        )}



        {!isAboveLarge && (
  <div className="md:w-1/2 lg:w-1/3 mt-0 md:mt-0 relative mb-4 items-center justify-center mx-auto">
    <img
      src={require('../assets/about.jpg')}
      alt="About Me"
      className="w-full"
      style={{
        width: isPhone ? '300px' : isTablet ? '500px' : '500px',
        height: isPhone ? '400px' : isTablet ? '500px' : '500px',
        maxWidth: '100%',
      }}
    />
  </div>
  
)}

        <div
          className={`w-full ${
            isAboveLarge ? "md:w-1/2 lg:w-2/3" : "md:w-full"
          } mt-0 md:mt-0 relative`}
          style={{
            minHeight: isAboveLarge ? "300px" : "auto",
            flex: isAboveLarge ? "1" : "0",
            marginBottom: isAboveLarge ? "20px" : "0",
          }}
        >
         

          <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          <div className="text-center">
          <p className="font-playfair font-semibold text-4xl mb-4">
            <span className="text-yellow">About</span> Me
          </p>
          </div>

          {/* Introduction Text */}
          <div className="max-w-screen-lg mx-auto px-4 text-center text-justify">

            <p className="text-lg md:text-xl lg:text-2xl mb-6"> 
            I am a web developer. I love my making web applications. It's challenging, satisfying, and brings out my creativity and innovative skills. 
            I’m making projects and learning more developer tools like framework, version control and other tools.
            From simple websites to advanced web applications. 
            I love the feeling of accomplishment after finishing a project and deploying it.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl mb-6">
            I've made projects in front-end development and currently Learning about back-end to become a full-stack developer. 
            I'm  enthusiastic to learn more methods and techniques to improve my skills as a developer. 
            I'm also looking forward to work and learn from my fellow developers and gain experience and knowledge in the field. 
            I’m excited to contribute to a team and make valuable contributions to my workplace. 
            </p>

            <p className="text-lg md:text-xl lg:text-2xl mb-6">
            I can't wait to begin working as a web developer. 
            I'm confident I have the abilities and motivation to contribute new innovative ideas and perspective. 
           </p>
            

          </div>
          </motion.div>


          <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
          {/* Buttons and content */}
          <div className={`flex ${isPhone ? 'flex-col' : 'flex-row'} flex-wrap justify-center items-center ${isTablet ? 'justify-evenly' : ''}`}>
        {initialItems.map((item, index) => (
    <div
      key={item.id}
      className="relative z-10 text-center mb-5"
    >
      <p
        className={`font-playfair font-semibold ${
          isAboveLarge
            ? "text-xl md:text-2xl lg:text-3xl"
            : "text-lg"
        } mb-2 md-3 lg-4`}
      >
        {item.subtitle}
      </p>
      <div
        onClick={() => handleItemClick(item.id)}
        className="title-clickable"
        style={{
          width: isAboveLarge ? "200px" : "100%",
          margin: "0 auto",
          cursor: "pointer",
        }}
      >
        {item.title}
      </div>
    </div>
      ))}
      </div>
      </motion.div>



  </div>
</div>

      {/* Selected Item */}
      {selectedId && (
        <div
          key={selectedId}
          className={`w-full ${
            isAboveLarge ? "md:w-full" : "md:w-full"
          } mt-2 md-3 relative`}
          style={{
            flex: "1",
            margin: "0 auto",
            marginTop: isAboveLarge ? "0" : "100px",
          }}
        >
          
          <div className="relative z-10 text-center">
            {initialItems.map((item) => {
              if (item.id === selectedId) {
                return (
                  <div key={item.id} className="text-center">
                    <div className={`mt-2`}>{item.content}</div>
                    <div
                      onClick={() => handleItemClick(item.id)}
                      className="title-clickable"
                      style={{
                        width: isAboveLarge ? "200px" : "100%",
                        margin: "0 auto",
                        cursor: "pointer",
                      }}
                    ></div>
                    
                    <p
                      className={`font-playfair font-semibold my-2 ${
                        isAboveLarge
                          ? "text-xl md:text-2xl lg:text-3xl"
                          : "text-lg"
                      }`}
                    >
                      <div className={`py-2`}>{item.subtitle}</div>
                    </p>
                  </div>
                 
                );
              }
              return null;
            })}
          </div>
          </div>
      )}
    </section>
  </div>
);
};

export default MySkills;




