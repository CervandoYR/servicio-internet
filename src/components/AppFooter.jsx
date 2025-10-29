import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const SocialIcon = ({ href, icon: Icon }) => (
  <Nav.Link
    as={motion.a}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, color: 'var(--accent-neon)' }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="p-2"
    style={{ color: 'var(--text-secondary)' }}
  >
    <Icon size={24} />
  </Nav.Link>
);

function AppFooter() {
  return (
    <footer 
      className="pt-5 pb-4 mt-5" 
      style={{ 
        background: 'var(--bg-dark)', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <Container>
        <Row>
          {/* Contacto */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase fw-bold text-gradient mb-3">NetFuture</h5>
            <p className="text-secondary">
              Conectando tu mundo a la velocidad de la luz.
            </p>
            <p className="text-secondary mb-1">
              <MessageCircle size={16} className="me-2" /> servitektechnologies@gmail.com
            </p>
            <p className="text-secondary">
              RUC: 20603694067
            </p>
          </Col>

          {/* Enlaces (ejemplo) */}
          <Col md={2} className="mb-4">
            <h5 className="text-uppercase fw-bold text-primary mb-3">Servicios</h5>
            <Nav className="flex-column">
              <Nav.Link href="#plans" className="p-0 text-secondary">Planes Hogar</Nav.Link>
              <Nav.Link href="#plans" className="p-0 text-secondary mt-1">Planes Empresa</Nav.Link>
            </Nav>
          </Col>
          
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase fw-bold text-primary mb-3">Legal</h5>
             <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 text-secondary">Términos y Condiciones</Nav.Link>
              <Nav.Link href="#" className="p-0 text-secondary mt-1">Política de Privacidad</Nav.Link>
            </Nav>
          </Col>

          {/* Redes Sociales */}
          <Col md={3} className="mb-4 text-md-end">
            <h5 className="text-uppercase fw-bold text-primary mb-3">Síguenos</h5>
            <div className="d-flex justify-content-md-end">
              <SocialIcon href="https://www.facebook.com/servitektechnologies" icon={Facebook} />
              <SocialIcon href="#" icon={Instagram} />
              <SocialIcon href="https://www.linkedin.com/in/william-javier-yactayo-cervantes-b8115198/" icon={Linkedin} />
            </div>
          </Col>
        </Row>
        
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Row>
          <Col className="text-center text-secondary" style={{ fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} NetFuture (Servitek Technologies S.R.L). Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AppFooter;