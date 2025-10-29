import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Wifi, Download, Upload } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import styled from 'styled-components';

// IMÁGENES (Asegúrate de que estén en src/assets/)
import routerImg from '../assets/routerwifi.jpg';
import premiumImg from '../assets/premium.jpg';
import gamerImg from '../assets/gamer.webp';

// --- DATOS ACTUALIZADOS (de tu archivo Vue) ---
const plansData = [
  { 
    name: "INTERNET 100% FIBRA", 
    speed: 200, 
    price: 50, 
    image: routerImg, 
    link: "https://wa.link/ce4m72",
    features: ["Streaming HD", "Home Office"],
    popular: false
  },
  { 
    name: "INTERNET 100% FIBRA", 
    speed: 400, 
    price: 60, 
    image: premiumImg, 
    link: "https://wa.link/50xpu4",
    features: ["Streaming 4K", "Gaming Pro", "Múltiples Dispositivos"],
    popular: true // Marcado como popular
  },
  { 
    name: "INTERNET 100% FIBRA", 
    speed: 600, 
    price: 90, 
    image: gamerImg, 
    link: "https://wa.link/zzahue",
    features: ["Streaming 8K", "VR/AR", "Uso Intensivo"],
    popular: false
  }
];

// Estilos para la tarjeta (sin cambios)
const PlanCard = styled(Tilt)`
  position: relative;
  overflow: hidden;
  padding: 2.5rem 2rem;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: box-shadow 0.4s ease, border-color 0.4s ease;

  &:hover {
    border-color: var(--accent-neon);
    box-shadow: var(--neon-shadow);
  }

  .badge-popular {
    position: absolute;
    top: 20px;
    right: -30px;
    transform: rotate(45deg);
    background: var(--accent-neon);
    color: var(--bg-deep);
    padding: 5px 30px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    box-shadow: var(--neon-shadow-light);
  }

  .plan-speed { font-size: 4rem; font-weight: 800; }
  .plan-price { font-size: 3rem; font-weight: 700; }
  .plan-img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    border-radius: 8px;
    margin: 1rem 0;
  }
`;

const AnimatedCounter = ({ end, prefix = "", suffix = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <span ref={ref}>
      {inView ? <CountUp end={end} prefix={prefix} suffix={suffix} duration={2} /> : <span>{prefix}0{suffix}</span>}
    </span>
  );
};

const Plans = () => {
  
  // --- MÉTODO ACTUALIZADO (de tu archivo Vue) ---
  const selectPlan = (plan) => {
    window.open(plan.link, "_blank", "noopener,noreferrer");
  };

  return (
    <Row className="g-4 justify-content-center">
      {plansData.map((plan, index) => (
        <Col md={6} lg={4} key={index}>
          <PlanCard
            className="glassmorphism"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
          >
            {plan.popular && <div className="badge-popular neon-glow">Más Popular</div>}
            
            <h3 className="fw-bold fs-2 mb-3">{plan.name}</h3>
            
            <div className="d-flex align-items-baseline mb-3">
              <div className="plan-speed text-gradient">
                <AnimatedCounter end={plan.speed} />
              </div>
              <span className="fs-4 text-secondary ms-2">Mbps</span>
            </div>
            
            <img src={plan.image} alt={plan.name} className="plan-img" />

            <ul className="list-unstyled mb-4 text-start">
              {plan.features.map((feature, i) => (
                <li key={i} className="d-flex align-items-center mb-2">
                  <CheckCircle size={18} className="me-2" style={{ color: 'var(--accent-cyan)' }} />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-baseline mb-4 mt-auto">
              <div className="plan-price">
                <AnimatedCounter end={plan.price} prefix="S/ " />
              </div>
              <span className="text-secondary ms-2">/mes</span>
            </div>

            <AnimatedButton className="w-100" onClick={() => selectPlan(plan)}>
              ¡Contrata Ahora!
            </AnimatedButton>
          </PlanCard>
        </Col>
      ))}
    </Row>
  );
};

export default Plans;