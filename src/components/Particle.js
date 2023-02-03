import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import '../App.css';

export const Particle = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
