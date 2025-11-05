// src/components/BenefitsMarquee.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Zap, MapPin, Headphones } from 'lucide-react';

// IMÁGENES
import bannerImg from '../assets/banner-convertido-a-600x222.jpeg';
import fibraImg from '../assets/fibra-convertido-a-851x315.jpeg';
import soporteImg from '../assets/soporte-convertido-a-851x315.jpeg';

const benefits = [
  {
    title: "Velocidad Ultra Rápida",
    description: "600 Mbps simétricos. Gaming, streaming y trabajo sin lag.",
    image: bannerImg,
    icon: Zap,
    color: "#06b6d4"
  },
  {
    title: "Cobertura Total en Chancay",
    description: "Fibra óptica en todos los barrios. Conexión estable siempre.",
    image: fibraImg,
    icon: MapPin,
    color: "#00d4ff"
  },
  {
    title: "Soporte Local 24/7",
    description: "Técnicos en Chancay. Solucionamos tu problema en horas.",
    image: soporteImg,
    icon: Headphones,
    color: "#a855f7"
  }
];

// Duplicamos 3 veces para fluidez
const marqueeItems = [...benefits, ...benefits, ...benefits];

export default function BenefitsMarquee() {
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const speed = 60; // px/s
  const itemWidth = 500; // 460px + 40px gap
  const totalWidth = itemWidth * benefits.length;
  const animationRef = useRef(null);

  // Transformación infinita
  const xTransform = useTransform(x, (v) => {
    const normalized = ((v % totalWidth) + totalWidth) % totalWidth;
    return -normalized;
  });

  // Animación manual con requestAnimationFrame
  useEffect(() => {
    let lastTime = 0;

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered) {
        x.set(x.get() - (speed * delta) / 1000);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, x, speed]);

  return (
    <section className="py-5" style={{ background: '#0a0a0f' }}>
      <div className="container">
        {/* TÍTULO - MÁS GRANDE Y CON MEJOR UX */}
        <div className="text-center mb-5">
          <h2 style={{
            fontSize: '4.8rem',           // ← ENORME (antes 3.2rem)
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: '1.05',
            letterSpacing: '-1.5px',
          }}>
            Beneficios <span style={{
              background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '900',
            }}>NetSystems</span>
          </h2>
          <p style={{
            color: '#c8d6ff',
            fontSize: '1.4rem',           // ← Subtítulo más grande
            maxWidth: '800px',
            margin: '0 auto',
            fontWeight: '500',
            letterSpacing: '0.3px'
          }}>
            Internet de verdad, hecho para Chancay
          </p>
        </div>

        {/* MARQUEE - PAUSA SOLO EN TARJETAS */}
        <div style={{ overflow: 'hidden', position: 'relative', padding: '2rem 0' }}>
          <motion.div
            style={{
              x: xTransform,
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {marqueeItems.map((item, i) => (
              <div
                key={i}
                style={{
                  minWidth: '460px',
                  maxWidth: '460px',
                  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(20, 20, 35, 0.9))',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: `3px solid ${item.color}`,
                  boxShadow: `0 12px 40px rgba(0, 0, 0, 0.4)`,
                  flexShrink: 0,
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  setIsHovered(true);
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px ${item.color}60`;
                }}
                onMouseLeave={(e) => {
                  setIsHovered(false);
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(0, 0, 0, 0.4)`;
                }}
              >
                {/* IMAGEN */}
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '64px',
                    height: '64px',
                    background: `${item.color}30`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `3px solid ${item.color}`,
                    boxShadow: `0 0 30px ${item.color}70`
                  }}>
                    <item.icon size={30} color={item.color} />
                  </div>
                </div>

                {/* TEXTO */}
                <div style={{ padding: '1.8rem 1.6rem' }}>
                  <h3 style={{
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    margin: '0 0 0.6rem 0',
                    lineHeight: '1.2'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#e8f0ff',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}