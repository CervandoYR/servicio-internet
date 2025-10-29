import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { Gauge, Wifi, Database } from 'lucide-react'; // Iconos de Lucide

const infoData = [
  { id: 1, title: "Velocidad Simétrica", description: "Descarga y sube archivos a la misma velocidad sin interrupciones.", icon: Gauge },
  { id: 2, title: "Mayor Conectividad", description: "Conecta más dispositivos sin perder rendimiento en tu red wifi.", icon: Wifi },
  { id: 3, title: "Mayor Estabilidad", description: "Red 100% fibra óptica, sin interferencias ni pérdidas de señal.", icon: Database }
];

function Info() {
  return (
    <SectionWrapper>
      <h2 className="display-4 fw-bold text-center mb-3">
        ¿Por qué elegir <span className="text-gradient">Fibra Óptica?</span>
      </h2>
      <p className="lead fs-4 text-center text-secondary mb-5">
        Nuestra tecnología está un paso adelante.
      </p>
      <Row className="g-4">
        {infoData.map((item) => (
          <Col md={4} key={item.id}>
            <motion.div
              className="glassmorphism p-4 text-center h-100"
              whileHover={{ y: -10, boxShadow: 'var(--neon-shadow)' }}
            >
              <item.icon size={48} className="text-gradient mb-4" />
              <h4 className="fw-bold mb-3">{item.title}</h4>
              <p className="text-secondary">{item.description}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
}

export default Info;