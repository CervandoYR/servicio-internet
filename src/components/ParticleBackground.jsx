import React, { useCallback } from 'react';
import Particles from 'react-tsparticles'; // O 'react-particles' si es el que tienes
import { loadLinksPreset } from 'tsparticles-preset-links';

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  const options = {
    preset: 'links',
    background: {
      color: {
        // SOLUCIÓN: Usamos el color HEX directo en lugar de 'var(--bg-deep)'
        value: '#0a0a0f', 
      },
    },
    particles: {
      color: {
        // SOLUCIÓN: Usamos el color HEX directo
        value: '#06b6d4', // Este era --accent-cyan
      },
      links: {
        // SOLUCIÓN: Usamos el color HEX directo
        color: '#00D1FF', // Este era --accent-neon
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
      },
      opacity: {
        value: 0.5,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.8,
          },
        },
        push: {
          quantity: 2,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Detrás de todo
      }}
    />
  );
}

// Usamos React.memo para evitar que se re-renderice innecesariamente
export default React.memo(ParticleBackground);