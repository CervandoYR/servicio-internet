import React from 'react';
import { Container } from 'react-bootstrap';
import { SectionWrapper } from '../components/SectionWrapper';
import InteractiveMap from '../components/InteractiveMap'; // Componente nuevo

function CoberturaPage() {
  // Coordenadas de ejemplo (Chancay)
  const center = [-11.564, -77.271];
  
  // Puedes obtener estos datos de una API
  const coverageAreas = [
    { pos: [-11.564, -77.271], name: "Centro de Chancay" },
    { pos: [-11.57, -77.275], name: "Puerto de Chancay" },
    { pos: [-11.55, -77.26], name: "Zona Norte" },
  ];

  return (
    <Container style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <SectionWrapper>
        <h1 className="display-2 fw-bold text-center mb-4">
          Mapa de <span className="text-gradient">Cobertura</span>
        </h1>
        <p className="lead fs-4 text-center text-secondary mb-5">
          Nuestra red de fibra óptica se expande cada día. 
          Verifica si ya estamos en tu zona.
        </p>
        
        {/* El mapa ocupa todo el ancho */}
        <div 
          className="glassmorphism" 
          style={{ height: '600px', width: '100%', padding: '1rem', overflow: 'hidden' }}
        >
          <InteractiveMap center={center} zoom={14} markers={coverageAreas} />
        </div>
      </SectionWrapper>
    </Container>
  );
}

export default CoberturaPage;