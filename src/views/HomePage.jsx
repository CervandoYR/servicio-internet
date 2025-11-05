// src/pages/HomePage.jsx
import React, { Suspense, useEffect } from 'react'; // ← AÑADIDO useEffect
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Lazy load de componentes pesados
const Hero = React.lazy(() => import('../components/Hero'));
const BenefitsMarquee = React.lazy(() => import('../components/Benefits'));
const Plans = React.lazy(() => import('../components/Plans'));
const Info = React.lazy(() => import('../components/Info'));
const ContactForm = React.lazy(() => import('../components/ContactForm'));
const SeoText = React.lazy(() => import('../components/SeoText'));

// Animación de entrada
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" }
};

function HomePage() {
  // --- NOTIFICAR AL NAVBAR CUANDO ESTÁ LISTO ---
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('homepage-ready'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <main id="home" className="overflow-hidden">
      {/* 1. HERO */}
      <Suspense fallback={<div style={{ height: '100vh', background: '#0a0a0f' }} />}>
        <Hero />
      </Suspense>

      {/* 2. BENEFICIOS */}
      <Suspense fallback={<div className="py-5" style={{ height: '600px' }} />}>
        <section id="beneficios" className="py-5">
          <BenefitsMarquee />
        </section>
      </Suspense>

      {/* 3. PLANES */}
      <Suspense fallback={<div className="py-5" style={{ height: '800px' }} />}>
        <section id="planes" className="py-5" style={{ background: '#0a0a0f' }}>
          <Container>
            <motion.div {...fadeInUp} className="text-center mb-5">
              <h2 style={{
                fontSize: '4.5rem',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: '1.05',
                textShadow: '0 0 40px rgba(0, 212, 255, 0.4)'
              }}>
                Planes de <span style={{
                  background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: '900'
                }}>Ultra-Velocidad</span>
              </h2>
              <p style={{
                color: '#c8d6ff',
                fontSize: '1.4rem',
                maxWidth: '800px',
                margin: '0 auto',
                fontWeight: '500'
              }}>
                Elige la conexión del futuro. Simétrica, estable y sin límites.
              </p>
            </motion.div>

            <Plans />

            <p className="text-center mt-5" style={{ color: '#94a3b8', fontSize: '1rem' }}>
              *Verifica disponibilidad de internet en tu zona de Chancay
            </p>
          </Container>
        </section>
      </Suspense>

      {/* 4. INFO */}
      <Suspense fallback={<div className="py-5" style={{ height: '700px' }} />}>
        <section id="fibra" className="py-5">
          <Info />
        </section>
      </Suspense>

      {/* 5. CONTACTO */}
      <Suspense fallback={<div className="py-5" style={{ height: '700px' }} />}>
        <section id="contacto" className="py-5" style={{ background: '#0a0a0f' }}>
          <Container>
            <motion.div {...fadeInUp} className="text-center mb-5">
              <h2 style={{
                fontSize: '4.2rem',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: '1.05'
              }}>
                Contacta a un <span style={{
                  background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: '900'
                }}>Especialista</span>
              </h2>
              <p style={{
                color: '#c8d6ff',
                fontSize: '1.35rem',
                maxWidth: '700px',
                margin: '0 auto',
                fontWeight: '500'
              }}>
                ¿Tienes alguna consulta? Envíanos un mensaje.
              </p>
            </motion.div>

            <ContactForm />
          </Container>
        </section>
      </Suspense>

      {/* 6. SEO TEXT */}
      <Suspense fallback={<div className="py-5" style={{ height: '400px' }} />}>
        <section id="seo" className="py-5">
          <Container>
            <SeoText />
          </Container>
        </section>
      </Suspense>
    </main>
  );
}

export default HomePage;