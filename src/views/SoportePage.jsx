import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SectionWrapper } from '../components/SectionWrapper';
import InteractiveMap from '../components/InteractiveMap';
import { PhoneCall, Mail, Pin } from 'lucide-react';

function SoportePage() {
  const officeLocation = [-11.564, -77.271]; // Coordenadas de ejemplo (Chancay)

  return (
    <Container style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <SectionWrapper>
        <h1 className="display-2 fw-bold text-center mb-4">
          Centro de <span className="text-gradient">Soporte</span>
        </h1>
        <p className="lead fs-4 text-center text-secondary mb-5">
          Estamos aquí para ayudarte 24/7. Conéctate con nuestro equipo.
        </p>

        <Row className="g-4 align-items-stretch">
          {/* Información de Contacto */}
          <Col lg={4}>
            <div className="glassmorphism p-4 h-100 d-flex flex-column">
              <h3 className="text-gradient fw-bold mb-4">Información Directa</h3>
              
              <div className="d-flex mb-3">
                <PhoneCall size={24} className="text-gradient me-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="mb-0">Teléfono / WhatsApp</h5>
                  <p className_="text-secondary">+51 924 076 526</p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <Mail size={24} className="text-gradient me-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="mb-0">Correo Electrónico</h5>
                  <p className="text-secondary">servitektechnologies@gmail.com</p>
                </div>
              </div>

              <div className="d-flex">
                <Pin size={24} className="text-gradient me-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="mb-0">Oficina (Chancay)</h5>
                  <p className="text-secondary">Av. Ejemplo 123, Perú</p>
                </div>
              </div>
            </div>
          </Col>
          
          {/* Mapa */}
          <Col lg={8}>
            <div 
              className="glassmorphism" 
              style={{ height: '500px', width: '100%', padding: '1rem', overflow: 'hidden' }}
            >
              <InteractiveMap 
                center={officeLocation} 
                zoom={15} 
                markers={[{ pos: officeLocation, name: "Oficina NetFuture" }]} 
              />
            </div>
          </Col>
        </Row>
      </SectionWrapper>
    </Container>
  );
}

export default SoportePage;