import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import AnimatedButton from './AnimatedButton';
import Speedometer from './Speedometer'; // El velocímetro animado

const Hero = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center"
      style={{
        minHeight: '100vh',
        paddingTop: '80px', // Offset del navbar
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Container>
        <Row className="align-items-center g-5">
          {/* Columna de Texto */}
          <Col lg={7}>
            <motion.h1
              className="display-1 fw-bolder mb-3"
              style={{ letterSpacing: '-2px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Internet de
              <br />
              <span className="text-gradient">Ultra-Velocidad</span>
            </motion.h1>

            <div className="display-6 fw-semibold text-secondary mb-4">
              <TypeAnimation
                sequence={[
                  'para Gaming.',
                  2000,
                  'para Streaming 8K.',
                  2000,
                  'para Teletrabajo.',
                  2000,
                  '100% Fibra Óptica.',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: 'var(--text-secondary)' }}
              />
            </div>
            
            <motion.p 
              className="lead fs-4 text-secondary mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conectividad premium para quienes exigen el máximo rendimiento.
              Experimenta la baja latencia y la velocidad simétrica que solo NetFuture te ofrece.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <AnimatedButton onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Planes
              </AnimatedButton>
            </motion.div>
          </Col>
          
          {/* Columna del Velocímetro */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, type: 'spring' }}
            >
              <Speedometer />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Hero;