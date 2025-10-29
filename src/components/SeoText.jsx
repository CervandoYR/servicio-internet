import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import AnimatedButton from './AnimatedButton';

function SeoText() {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionWrapper>
      <div className="glassmorphism p-4 p-md-5" style={{ border: '1px dashed var(--accent-cyan)' }}>
        <h2 className="fw-bold mb-3" style={{ fontSize: '1.8rem' }}>
          Internet de <span className="text-gradient">Fibra Óptica en Chancay</span> con NetSystems
        </h2>
        <p className="text-secondary">
          Descubre el mejor <strong>servicio de internet en Chancay</strong> con NetSystems, líder en tecnología de 
          <strong> fibra óptica</strong>. Ofrecemos conexión rápida y confiable para hogares, negocios y gamers en 
          toda la región.
        </p>
        <h3 className="fw-bold text-primary mt-4 mb-3" style={{ fontSize: '1.4rem' }}>Ventajas de Nuestro Servicio</h3>
        <ul className="text-secondary" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li className="mb-1"><strong>Velocidad ultrarrápida</strong>: Hasta 600 Mbps para streaming y gaming.</li>
          <li className="mb-1"><strong>Cobertura total en Chancay</strong>: Desde el centro hasta zonas rurales.</li>
          <li className="mb-1"><strong>Instalación gratis</strong>: Sin costos adicionales al contratar.</li>
          <li className="mb-1"><strong>Soporte local 24/7</strong>: Asistencia técnica personalizada.</li>
        </ul>
        <h3 className="fw-bold text-primary mt-4 mb-3" style={{ fontSize: '1.4rem' }}>¿Por Qué Elegirnos?</h3>
        <p className="text-secondary">
          En NetSystems, nos comprometemos a brindar el mejor <strong>wifi en Chancay</strong> con tecnología de 
          punta. Nuestra red de <strong>fibra óptica en Chancay</strong> asegura 
          estabilidad para todos tus dispositivos.
        </p>
        <AnimatedButton onClick={scrollToPlans} className="mt-3">
          Contacta Ahora
        </AnimatedButton>
      </div>
    </SectionWrapper>
  );
}

export default SeoText;