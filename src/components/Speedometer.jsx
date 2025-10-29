import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Speedometer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const speed = 950; // Simular 950 Mbps
  const maxSpeed = 1000;
  
  // Rango de la aguja: de -90deg (0) a +90deg (1000)
  const rotationBase = (speed / maxSpeed) * 180 - 90;
  
  // Definimos la animación de la aguja
  const needleVariants = {
    hidden: { rotate: -90 },
    visible: { 
      rotate: rotationBase,
      transition: { duration: 1.5, ease: 'easeOut', delay: 0.5 }
    }
  };

  // Definimos la animación de pulso para el texto
  const textPulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  // Definimos la animación de pulso para la aguja (una vez que está 'visible')
  const needlePulse = {
    rotate: [rotationBase - 1, rotationBase + 1, rotationBase - 1], // Vibra 1 grado
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };


  return (
    <div ref={ref} style={{ textAlign: 'center', color: 'var(--text-primary)' }}>
      <svg width="300" height="180" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ... (Las paths y el gradiente se quedan igual) ... */}
         {/* Arco de fondo */}
         <path
          d="M30 150 A 120 120 0 0 1 270 150"
          stroke="var(--bg-dark)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Arco de velocidad (gradiente) */}
        <motion.path
          d="M30 150 A 120 120 0 0 1 270 150"
          stroke="url(#speedGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? speed / maxSpeed : 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* --- AGUJA MODIFICADA --- */}
        <motion.line
          x1="150"
          y1="150"
          x2="150"
          y2="50"
          stroke="var(--accent-neon)"
          strokeWidth="4"
          strokeLinecap="round"
          variants={needleVariants} // 1. Animación inicial (de -90 a X)
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ transformOrigin: '150px 150px' }}
          // 2. Animación de pulso (una vez que 'visible' termina)
          onAnimationComplete={() => {}} // Truco para permitir una segunda 'animate'
          custom={inView} // Para que se actualice
        />
        {/* Agregamos una segunda aguja solo para la animación de pulso */}
         <motion.line
          x1="150"
          y1="150"
          x2="150"
          y2="50"
          stroke="var(--accent-neon)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ rotate: -90, opacity: 0 }}
          animate={inView ? { rotate: rotationBase, opacity: 1, ...needlePulse } : { opacity: 0 }}
          style={{ transformOrigin: '150px 150px' }}
        />

        {/* ... (Pivote central y etiquetas) ... */}
        <circle cx="150" cy="150" r="8" fill="var(--accent-neon)" />
        <circle cx="150" cy="150" r="4" fill="var(--bg-deep)" />
        <text x="30" y="170" fill="var(--text-secondary)" fontSize="14">0</text>
        <text x="260" y="170" fill="var(--text-secondary)" fontSize="14">1 Gbps</text>
        <defs>
          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-cyan)" />
            <stop offset="100%" stopColor="var(--accent-purple)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* --- TEXTO MODIFICADO --- */}
      <motion.div
        className="display-2 fw-bold text-gradient"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1, ...textPulse } : { opacity: 0 }} // Añade el pulso aquí
        transition={{ duration: 1, delay: 1 }} // Transición de opacidad inicial
      >
        {speed} Mbps
      </motion.div>
      <div className="fs-5 text-secondary">Latencia: 1ms</div>
    </div>
  );
};

export default Speedometer;