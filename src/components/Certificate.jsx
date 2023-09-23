import { useState } from 'react';
import { CertificateData } from '../components/DataCertificate';
import useMediaQuery from "../hooks/useMediaQuery";

export default function Credential() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < CertificateData.length - 1;
  const isPhone = useMediaQuery("(max-width: 687px)"); // For phones
  const isTablet = useMediaQuery("(min-width: 688px) and (max-width: 1060px)"); // For tablets

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let credentials = CertificateData[index];
  return (
    <div className="text-center">
      <button onClick={handleNextClick} className="mb-4">
    <a href="#_" class="relative px-10 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-black rounded-lg shadow-inner group  ">
      <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
      <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
      <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
      <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Next</span>
    </a>
  </button>
      <h2 className="mb-2 text-2xl">
        <i>{credentials.name} </i>
      </h2>
      <h3 className="mb-4">
        ({index + 1} of {CertificateData.length})
      </h3>
      <button onClick={handleMoreClick} className="mb-4">
      <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group  border-2 border-purple-600">
        <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white"> {showMore ? 'Hide' : 'Show'} details</span>
      </a>
      </button>
      {showMore && <p className="mb-4 mx-80">{credentials.description}</p>}
      <div className="flex justify-center">
        <img
          src={credentials.src}
          alt={credentials.alt}
          style={{
            width: isPhone ? '300px' : isTablet ? '300px' : '500px',
            height: isPhone ? '300px' : isTablet ? '300px' : '500px',
            maxWidth: '100%',
            display: 'block', // To remove extra space below inline images
          }}
        />
      </div>
    </div>
  );
}
