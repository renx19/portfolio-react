import React from 'react';
import htmlImage from '../assets/dev/html-5.png';
import cssImage from '../assets/dev/css-3.png';
import tailwindImage from '../assets/dev/icons8-tailwindcss-64.png';
import ReactImage from '../assets/dev/react.png';
import NextJSImg from '../assets/dev/nextjs.png';
import NodeJSImg from '../assets/dev/icons8-node-js-64.png';
import SQL from '../assets/dev/icons8-sql-64.png';
import PHPImg from '../assets/dev/icons8-php-64.png';
import MONGODB from '../assets/dev/icons8-mongodb-a-cross-platform-document-oriented-database-program-64.png';
// Import images for other skills here

const ProficiencyBar = ({ skillName, proficiencyLevel, skillText }) => {
  // Define the proficiency levels and their corresponding percentages
  const proficiencyLevels = {
    Novice: 20,
    Advanced: 40,
    Competent: 60,
    Proficient: 80,
    Expert: 100,
  };

  // Calculate the proficiency percentage
  const proficiencyPercentage = proficiencyLevels[proficiencyLevel];

  // Map skill names to image sources
  const skillImages = {
    'html-5': htmlImage,
    'css-3': cssImage,
    'icons8-tailwindcss-64': tailwindImage,
    react: ReactImage,
    nextjs: NextJSImg,
    'icons8-node-js-64': NodeJSImg,
    'icons8-sql-64': SQL,
    'icons8-php-64': PHPImg,
    'icons8-mongodb-a-cross-platform-document-oriented-database-program-64': MONGODB,
  };

  return (
    <div className="text-center">
      <div className="relative py-4">
      <div className='ml-7'> <img src={skillImages[skillName]} alt={skillName} /> </div> 
      </div>
      <p>{skillText}</p> {/* Add the skill text below the image */}
      {/* Proficiency Bar */}
      <div className="proficiency-bar relative w-32 h-6 bg-gray-300 rounded-full mt-2 overflow-hidden transition-all duration-300 hover:bg-rose">
        <div
          className="proficiency-level absolute h-full bg-cyan"
          style={{
            width: `${proficiencyPercentage}%`,
            // Check if proficiency level is Novice
            background: proficiencyLevel === 'Novice' ? 'bg-cyan' : 'bg-gray-300',
          }}
        ></div>
        {/* Proficiency Text */}
        <div className="proficiency-text absolute inset-0 flex justify-center items-center text-center text-violet">
          {proficiencyLevel}
        </div>
      </div>
    </div>
  );
};

export default ProficiencyBar;
