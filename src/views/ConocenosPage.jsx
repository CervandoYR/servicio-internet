import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SectionWrapper } from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Rocket, Eye, ShieldCheck, Zap } from 'lucide-react';
// Asume que tienes imágenes en src/assets/
// import teamImg from '../assets/team.jpg';

function ConocenosPage() {

  const values = [
    { icon: Rocket, title: "Innovación", text: "Buscamos constantemente la última tecnología para ofrecerte la mejor conexión." },
    { icon: ShieldCheck, title: "Confiabilidad", text: "Nuestra red de fibra garantiza un servicio estable y seguro para tu tranquilidad." },
    { icon: Zap, title: "Velocidad", text: "Obsesionados con la baja latencia y el rendimiento simétrico." }
  ];

  return (
    <Container style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <SectionWrapper>
        {/* Sección Hero de "Conócenos" */}
        <Row className="align-items-center g-5 mb-5">
          <Col lg={6}>
            <h1 className="display-2 fw-bold mb-4">
              Impulsando la <span className="text-gradient">Próxima Era</span> de Conectividad
            </h1>
            <p className="lead fs-4 text-secondary">
              NetFuture no es solo un ISP. Somos un equipo de ingenieros y visionarios 
              dedicados a construir la infraestructura de internet del mañana, hoy.
            </p>
          </Col>
          <Col lg={6}>
            {/* <motion.img 
              src={teamImg} 
              alt="Nuestro Equipo" 
              className="img-fluid rounded-3 glassmorphism p-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            /> */}
            <div 
              className="img-fluid rounded-3 glassmorphism p-2 d-flex align-items-center justify-content-center"
              style={{ height: '350px', border: '1px dashed var(--accent-cyan)' }}
            >
              <p className="text-secondary"></p>
            </div>
          </Col>
        </Row>

        {/* Misión y Visión */}
        <Row className="g-4 mb-5">
          <Col md={6}>
            <div className="glassmorphism p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <Rocket size={32} className="text-gradient me-3" />
                <h2 className="fw-bold mb-0">Misión</h2>
              </div>
              <p className="text-secondary">
                Proveer acceso a internet de ultra-alta velocidad, confiable y de baja latencia 
                a cada hogar y negocio en nuestra área de cobertura, eliminando la brecha digital.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="glassmorphism p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <Eye size={32} className="text-gradient me-3" />
                <h2 className="fw-bold mb-0">Visión</h2>
              </div>
              <p className="text-secondary">
                Ser el estándar de oro en conectividad, reconocidos por nuestra innovación 
                tecnológica y un soporte al cliente que redefine la industria.
              </p>
            </div>
          </Col>
        </Row>

        {/* Valores */}
        <h2 className="text-center display-4 fw-bold mb-5">Nuestros <span className="text-gradient">Valores</span></h2>
        <Row className="g-4">
          {values.map((item, index) => (
            <Col lg={4} key={index}>
              <motion.div
                className="glassmorphism p-4 text-center h-100"
                whileHover={{ y: -10, boxShadow: 'var(--neon-shadow)' }}
              >
                <item.icon size={48} className="text-gradient mb-3" />
                <h4 className="fw-bold">{item.title}</h4>
                <p className="text-secondary">{item.text}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
        
        {/* Puedes añadir la sección de Clientes aquí si lo deseas */}

      </SectionWrapper>
    </Container>
  );
}

export default ConocenosPage;