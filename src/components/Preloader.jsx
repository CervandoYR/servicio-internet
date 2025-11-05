import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { Container } from 'react-bootstrap';

// Estilos en línea para simplicidad
const preloaderStyle = {
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  background: '#0a0a0f', // El fondo oscuro de tu app
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

function Preloader() {
  return (
    <motion.div
      style={preloaderStyle}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Animación de salida
      transition={{ duration: 0.5 }}
    >
      <Container className="text-center">
        {/* Animación del Cohete */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut'
          }}
        >
          <Rocket 
            size={64} 
            style={{ 
              color: '#00d4ff', 
              filter: 'drop-shadow(0 0 20px #00d4ff)' 
            }} 
          />
        </motion.div>
        
        {/* Texto de Carga */}
        <motion.p
          style={{
            color: '#e0e7ff',
            fontSize: '1.2rem',
            fontWeight: '500',
            marginTop: '20px',
            letterSpacing: '1px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Cargando NetSystems...
        </motion.p>
      </Container>
    </motion.div>
  );
}

export default Preloader;