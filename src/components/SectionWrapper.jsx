import React from 'react';
import { motion } from 'framer-motion';

// Este es un High-Order Component (HOC)
// Envuelve cualquier sección y le da la animación de "aparecer" al hacer scroll
export const SectionWrapper = ({ children, className = '' }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }} // Se activa cuando el 25% es visible, 1 vez
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`py-5 ${className}`} // Espaciado vertical de Bootstrap
    >
      {children}
    </motion.section>
  );
};