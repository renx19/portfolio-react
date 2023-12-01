

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 ">
      <a
        className="hover:opacity-50 transition duration-500 bg-black"
        href="https://www.linkedin.com/in/mark-justin-borja-8583581a1/"
        target="_blank"
        rel="noreferrer"
      >
        <img src ={require('../assets/linkedin.png')}   alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500  bg-black"
        href="https://twitter.com/MJ_Borja_"
        target="_blank"
        rel="noreferrer"
      >
         <img src ={require('../assets/twitter.png')}   alt="twitter-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500  bg-black"
        href="https://www.facebook.com/markjustin.borja.5/"
        target="_blank"
        rel="noreferrer"
      >
      <img src ={require('../assets/facebook.png')}   alt="facebook-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500  bg-black"
        href="https://www.instagram.com/_mj_borja_/"
        target="_blank"
        rel="noreferrer"
      >
        <img src ={require('../assets/instagram.png')}   alt="instragram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;