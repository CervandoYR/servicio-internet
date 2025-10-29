import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { SectionWrapper } from './SectionWrapper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// IMÁGENES (Asegúrate de que estén en src/assets/)
import bannerImg from '../assets/banner-convertido-a-600x222.jpeg';
import fibraImg from '../assets/fibra-convertido-a-851x315.jpeg';
import soporteImg from '../assets/soporte-convertido-a-851x315.jpeg';

const benefits = [
  { id: 1, title: "Velocidad Ultra Rápida", description: "Hasta 600 Mbps simétricos para streaming, gaming y trabajo en Chancay.", image: bannerImg },
  { id: 2, title: "Cobertura Total en Chancay", description: "Conexión estable en todos los barrios, de norte a sur.", image: fibraImg },
  { id: 3, title: "Soporte Local 24/7", description: "Asistencia técnica en Chancay, disponible en cualquier momento.", image: soporteImg }
];

// Componente de icono personalizado para los controles
const IconControl = ({ icon: Icon }) => (
  <div style={{
    background: 'rgba(17, 17, 24, 0.5)',
    backdropFilter: 'blur(5px)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--neon-shadow-light)' // Sombra neón sutil
  }}>
    <Icon size={30} color="var(--accent-neon)" />
  </div>
);

function Benefits() {
  return (
    <SectionWrapper>
      <h2 className="display-4 fw-bold text-center mb-5">
        Beneficios <span className="text-gradient">NetSystems</span>
      </h2>
      <Carousel 
        indicators={false}
        nextIcon={<IconControl icon={ChevronRight} />}
        prevIcon={<IconControl icon={ChevronLeft} />}
        style={{ 
          maxWidth: '800px', // Un ancho máximo para la tarjeta
          margin: '0 auto' 
        }}
      >
        {benefits.map((benefit) => (
          <Carousel.Item key={benefit.id} interval={3000}>
            
            {/* --- CONTENEDOR DE TARJETA --- */}
            {/* Le damos una altura mínima fija para que todos los slides 
              midan lo mismo, incluso si el texto es de diferente longitud.
            */}
            <div 
              className="glassmorphism p-4 p-md-5"
              style={{ minHeight: '450px' }} // Altura mínima fija para la tarjeta
            >
              
              {/* --- 1. IMAGEN (Arriba, 100% de ancho) --- */}
              {/* Usamos las clases 'ratio' de Bootstrap para forzar un 
                aspecto 16:9, que se ve muy bien.
              */}
              <div 
                className=" rounded-3 overflow-hidden mb-4"
                style={{ background: 'rgba(0,0,0,0.1)' }} // Fondo oscuro mientras carga
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  style={{ 
                    objectFit: 'cover', // 'cover' llena el contenedor (ideal si son 16:9)
                    width: '100%',
                    height: '68%'
                  }}
                />
              </div>
              
              {/* --- 2. TEXTO (Debajo, centrado) --- */}
              <div className="text-center">
                <h3 className="fw-bold text-gradient mb-3">{benefit.title}</h3>
                <p className="fs-5 text-secondary mb-0">{benefit.description}</p> 
              </div>

            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </SectionWrapper>
  );
}

export default Benefits;