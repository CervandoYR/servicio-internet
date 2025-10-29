import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, ChevronDown, Wifi, Zap, Signal } from 'lucide-react';
import { Collapse } from 'react-bootstrap';
import styled from 'styled-components';

// Estilos para el botón flotante y el modal
const FaqWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1050;
`;

const FaqToggle = styled(motion.button)`
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  color: var(--text-primary);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--neon-shadow);
`;

const FaqBox = styled(motion.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px;
  max-height: 80vh;
  overflow-y: auto;
  
  /* Estilos glassmorphism */
  background: rgba(17, 17, 24, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;

  @media (max-width: 576px) {
    width: 90vw;
  }
`;

const faqData = [
  { icon: Wifi, q: "¿Qué hacer si mi internet no funciona?", a: "Primero, reinicia tu router (ONT) desenchufándolo por 30 segundos. Si el problema persiste, contáctanos." },
  { icon: Zap, q: "¿Por qué mi velocidad no es la contratada?", a: "Factores como la distancia, dispositivos conectados o pruebas por WiFi (en lugar de cable) pueden afectar. Contáctanos para una revisión." },
  { icon: Signal, q: "¿Cómo mejorar mi señal WiFi?", a: "Coloca el router en un lugar central y elevado, lejos de obstrucciones. Considera un extensor de red si tu casa es muy grande." }
];

function AppQuestions() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FaqWrapper>
      <AnimatePresence>
        {showFAQ && (
          <FaqBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-gradient fw-bold mb-0">Preguntas Frecuentes</h4>
              <motion.button 
                onClick={() => setShowFAQ(false)} 
                className="btn-close btn-close-white"
                whileHover={{ scale: 1.2, rotate: 90 }}
              ></motion.button>
            </div>
            
            <ul className="list-unstyled mb-0">
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <li key={index} className="mb-2">
                    <div 
                      onClick={() => toggleAnswer(index)}
                      className="d-flex justify-content-between align-items-center p-3"
                      style={{ 
                        background: 'rgba(0,0,0,0.2)', 
                        borderRadius: '8px', 
                        cursor: 'pointer' 
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <faq.icon size={20} className="text-gradient me-2 flex-shrink-0" />
                        <span className="fw-semibold">{faq.q}</span>
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown size={20} className="text-secondary" />
                      </motion.div>
                    </div>
                    <Collapse in={isOpen}>
                      <div>
                        <p className="text-secondary p-3 mb-0" style={{ background: 'rgba(0,0,0,0.1)', borderRadius: '0 0 8px 8px' }}>
                          {faq.a}
                        </p>
                      </div>
                    </Collapse>
                  </li>
                );
              })}
            </ul>

          </FaqBox>
        )}
      </AnimatePresence>

      <FaqToggle
        onClick={() => setShowFAQ(!showFAQ)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={showFAQ ? 'x' : 'help'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {showFAQ ? <X size={30} /> : <HelpCircle size={30} />}
          </motion.div>
        </AnimatePresence>
      </FaqToggle>
    </FaqWrapper>
  );
}

export default AppQuestions;