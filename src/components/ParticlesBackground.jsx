import Particles from "react-tsparticles";
import particlesConfig from "../components/config/particles-config";

const ParticleBackground = () => {
  return (
    <Particles params={particlesConfig}>
      {/* Other content if needed */}
    </Particles>
  );
};

export default ParticleBackground;
