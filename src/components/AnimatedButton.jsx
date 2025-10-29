import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styled from 'styled-components'; // Usaremos styled-components para este botón complejo

// Styled-components es genial para esto. Si no quieres agregarlo, 
// puedes lograrlo con CSS puro y clases, pero es más verboso.
// npm install styled-components

const ButtonWrapper = styled(motion.button)`
  position: relative;
  padding: 0.8rem 1.8rem;
  padding-right: 4rem; /* Espacio para el icono */
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;

  /* El 'glow' de fondo */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
    filter: blur(15px);
    opacity: 0.7;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  /* El icono */
  .icon-wrapper {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  /* Animaciones de Hover */
  &:hover {
    &::before {
      opacity: 1;
    }
    .icon-wrapper {
      transform: translateY(-50%) rotate(45deg);
    }
  }
`;

const AnimatedButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
      <motion.div className="icon-wrapper">
        <ArrowRight size={20} color="var(--text-primary)" />
      </motion.div>
    </ButtonWrapper>
  );
};

export default AnimatedButton;