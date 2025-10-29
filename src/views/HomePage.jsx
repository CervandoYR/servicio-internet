import React from 'react';
import { Container } from 'react-bootstrap';
import { SectionWrapper } from '../components/SectionWrapper';

// Importar todas las secciones
import Hero from '../components/Hero';
import Benefits from '../components/Benefits'; // <-- NUEVO
import Plans from '../components/Plans';
import Info from '../components/Info'; // <-- NUEVO
import ContactForm from '../components/ContactForm';
import SeoText from '../components/SeoText'; // <-- NUEVO

function HomePage() {
  return (
    <div id="home">
      {/* 1. HERO (No usa SectionWrapper para carga instantánea) */}
      <Hero /> 

      {/* 2. BENEFICIOS (Carrusel) */}
      <Container id="benefits" className="my-5 py-5">
        <Benefits />
      </Container>
      
      {/* 3. PLANES (Tarjetas 3D) */}
      <Container id="plans" className="my-5 py-5" style={{ minHeight: '100vh' }}>
        <SectionWrapper>
          <h2 className="display-3 fw-bold text-center mb-4">
            Planes de <span className="text-gradient">Ultra-Velocidad</span>
          </h2>
          <p className="lead fs-4 text-center text-secondary mb-5">
            Elige la conexión del futuro. Simétrica, estable y sin límites.
          </p>
          <Plans />
           <p className="text-center text-secondary mt-4">
            *Verifica disponibilidad de internet en tu zona de Chancay
          </p>
        </SectionWrapper>
      </Container>

      {/* 4. INFO (Por qué Fibra) */}
      <Container id="info" className="my-5 py-5">
        <Info />
      </Container>

      {/* 5. CONTACTO (Formulario) */}
      <Container id="contacto" className="my-5 py-5">
        <SectionWrapper>
          <h2 className="display-3 fw-bold text-center mb-4">
            Contacta a un <span className="text-gradient">Especialista</span>
          </h2>
          <p className="lead fs-4 text-center text-secondary mb-5">
             ¿Tienes alguna consulta? Envíanos un mensaje.
          </p>
          <ContactForm />
        </SectionWrapper>
      </Container>
      
      {/* 6. TEXTO SEO (Final) */}
      <Container id="seo" className="my-5 py-5">
        <SeoText />
      </Container>

    </div>
  );
}

export default HomePage;