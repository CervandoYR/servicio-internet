// src/components/Info.jsx
import React from 'react';
import { Zap, Shield, Wifi } from 'lucide-react';

const benefits = [
  {
    title: "Velocidad Simétrica",
    description: "Sube y descarga a la misma velocidad. Ideal para videollamadas, streaming y gaming.",
    icon: Zap,
    color: "#06b6d4"
  },
  {
    title: "Conexión Estable",
    description: "100% fibra óptica. Sin cortes, sin interferencias, sin excusas.",
    icon: Shield,
    color: "#00d4ff"
  },
  {
    title: "Múltiples Dispositivos",
    description: "Conecta TV, celulares, laptops y consolas sin perder rendimiento.",
    icon: Wifi,
    color: "#a855f7"
  }
];

export default function Info() {
  return (
    <section 
      id="fibra" 
      style={{ 
        padding: '80px 20px 60px',
        background: '#0a0a0f',
        margin: 0
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* TÍTULO ENORME + IMPACTANTE */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ 
            fontSize: '4.2rem',           // ← MÁS GRANDE
            fontWeight: '900',
            color: '#ffffff',
            margin: 0,
            lineHeight: '1.1',
            letterSpacing: '-1px',
          }}>
            ¿Por qué <span style={{
              background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '900'
            }}>Fibra Óptica</span> es el futuro?
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            color: '#b8c5ff',
            maxWidth: '720px',
            margin: '16px auto 0',
            fontWeight: '500'
          }}>
            Olvídate del internet lento. Con <strong style={{ color: '#00d4ff' }}>NetSystems</strong> tienes velocidad real.
          </p>
        </div>

        {/* TARJETAS - COMPACTAS */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px',
          marginBottom: '40px'
        }}>
          {benefits.map((b, i) => (
            <div 
              key={i}
              style={{
                background: '#1a1a2e',
                border: `3px solid ${b.color}`,
                borderRadius: '20px',
                padding: '28px 20px',
                textAlign: 'center',
                boxShadow: `0 0 30px ${b.color}40`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '76px',
                height: '76px',
                margin: '0 auto 18px',
                background: `${b.color}20`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `3px solid ${b.color}`
              }}>
                <b.icon size={34} color={b.color} />
              </div>
              <h3 style={{ 
                color: '#ffffff', 
                fontWeight: '700', 
                margin: '0 0 12px 0',
                fontSize: '1.35rem'
              }}>
                {b.title}
              </h3>
              <p style={{ 
                color: '#e0e7ff', 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                margin: 0
              }}>
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <p style={{
          textAlign: 'center',
          margin: '0',
          color: '#00d4ff',
          fontWeight: '600',
          fontSize: '1rem'
        }}>
          *Instalación gratis + Soporte 24/7
        </p>
      </div>
    </section>
  );
}