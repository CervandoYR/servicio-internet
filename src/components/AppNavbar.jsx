// src/components/AppNavbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Rocket, Menu, X, Zap, Sparkles, Phone, Info } from 'lucide-react';

function AppNavbar({ isLoading }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef(null);
  const isScrolling = useRef(false);
  const toggleAnimation = useAnimation();

  const sections = [
    { id: 'home', label: 'Inicio', path: '/', icon: Rocket },
    { id: 'beneficios', label: 'Beneficios', path: '/', icon: Sparkles },
    { id: 'planes', label: 'Planes', path: '/', icon: Zap },
    { id: 'fibra', label: 'Fibra Óptica', path: '/', icon: Info },
    { id: 'contacto', label: 'Contacto', path: '/', icon: Phone },
    { id: 'cobertura', label: 'Cobertura', path: '/cobertura' },
    { id: 'conocenos', label: 'Conócenos', path: '/conocenos' },
    { id: 'soporte', label: 'Soporte', path: '/soporte' },
  ];

  // --- OBSERVER MEJORADO CON LÓGICA DE PRIORIDAD ---
  const setupObserver = () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    const isMobile = window.innerWidth < 992;
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) {
          return;
        }
        
        // Filtrar solo las secciones que están significativamente visibles
        const visibleSections = entries.filter(entry => 
          entry.isIntersecting && entry.intersectionRatio > 0.3
        );
        
        if (visibleSections.length === 0) {
          // Si no hay secciones visibles, verificar si estamos cerca del top
          if (window.pageYOffset < 100) {
            setActiveSection('home');
          }
          return;
        }
        
        // ORDENAR por porcentaje de visibilidad (mayor primero)
        visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        
        const mostVisibleSection = visibleSections[0];
        
        // LÓGICA MEJORADA: Solo cambiar si la sección más visible tiene al menos 40% de visibilidad
        if (mostVisibleSection.intersectionRatio >= 0.4) {
          const newActiveSection = mostVisibleSection.target.id;
          
          // EVITAR CAMBIOS INNECESARIOS: No cambiar a "home" si estamos claramente en otra sección
          if (newActiveSection === 'home') {
            // Solo activar "home" si realmente estamos en la parte superior
            const scrollPosition = window.pageYOffset;
            const homeElement = document.getElementById('home');
            if (homeElement && scrollPosition > homeElement.offsetHeight * 0.3) {
              return;
            }
          }
          
          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }
        }
      },
      {
        // THRESHOLDS MÁS ESTRICTOS para evitar cambios bruscos
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        // MÁRGENES MÁS CONSERVADORES - menos espacio negativo arriba para evitar detectar home prematuramente
        rootMargin: isMobile ? '-80px 0px -30% 0px' : '-100px 0px -30% 0px'
      }
    );

    // Observar secciones
    sections.forEach(sec => {
      if (sec.path === '/') {
        const element = document.getElementById(sec.id);
        if (element) {
          observerRef.current.observe(element);
        }
      }
    });
  };

  // --- SCROLL MEJORADO ---
  const scrollTo = (sectionId) => {
    isScrolling.current = true;
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Forzar sección activa inmediatamente
    setActiveSection(sectionId);
    
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const isMobile = window.innerWidth < 992;
        const offset = isMobile ? 80 : 90;
        const elementTop = el.getBoundingClientRect().top;
        const offsetTop = elementTop + window.pageYOffset - offset;
        
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        
        // Reconectar observer después de que termine el scroll
        setTimeout(() => {
          isScrolling.current = false;
          setupObserver();
        }, 1200);
        
      } else {
        isScrolling.current = false;
        setupObserver();
      }
    }, 150);
  };

  // --- MANEJADORES DE NAVEGACIÓN ---
  const handleDesktopNav = (item) => {
    if (item.path && item.path !== '/') {
      navigate(item.path, { state: { prevPath: location.pathname } });
    } else {
      scrollToSection(item.id);
    }
  };

  const handleMobileNav = (item) => {
    if (item.path && item.path !== '/') {
      navigate(item.path, { state: { prevPath: location.pathname } });
    } else {
      scrollToSection(item.id);
    }
    setExpanded(false);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { targetSection: sectionId } });
    } else {
      scrollTo(sectionId);
    }
  };

  // --- EFECTO PRINCIPAL MEJORADO ---
  useEffect(() => {
    const cleanup = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
    
    const targetSection = location.state?.targetSection;
    
    if (location.pathname === '/' && targetSection) {
      setActiveSection(targetSection);
      const scrollTimer = setTimeout(() => {
        scrollTo(targetSection);
        navigate(location.pathname, { replace: true, state: null });
      }, 200);
      return () => {
        clearTimeout(scrollTimer);
        cleanup();
      };
    } else if (location.pathname !== '/') {
      const active = sections.find(s => s.path === location.pathname);
      if (active) setActiveSection(active.id);
      return cleanup;
    } else {
      if (!isLoading) {
        const timer = setTimeout(() => {
          setupObserver();
        }, 800);
        return () => {
          clearTimeout(timer);
          cleanup();
        };
      }
    }
    
    return cleanup;
  }, [location.pathname, location.state, isLoading]);

  // --- DETECCIÓN DE SCROLL MANUAL MEJORADA ---
  useEffect(() => {
    if (location.pathname !== '/') return;

    let scrollTimeout;
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (isScrolling.current) return;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.pageYOffset;
        
        if (Math.abs(currentScrollY - lastScrollY) < 50) return;
        
        lastScrollY = currentScrollY;

        const viewportHeight = window.innerHeight;
        const viewportCenter = viewportHeight / 2;
        
        let closestSection = activeSection;
        let smallestDistance = Infinity;

        sections.forEach(sec => {
          if (sec.path === '/') {
            const element = document.getElementById(sec.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              
              const elementCenter = rect.top + (rect.height / 2);
              const distance = Math.abs(elementCenter - viewportCenter);
              
              if (rect.bottom > 0 && rect.top < viewportHeight) {
                if (distance < smallestDistance) {
                  smallestDistance = distance;
                  closestSection = sec.id;
                }
              }
            }
          }
        });

        if (closestSection === 'home' && currentScrollY > 300) {
          return;
        }

        if (closestSection !== activeSection) {
          setActiveSection(closestSection);
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [location.pathname, activeSection]);

  // --- RESIZE HANDLER ---
  useEffect(() => {
    const handleResize = () => {
      if (location.pathname === '/' && !isLoading) {
        setTimeout(() => {
          setupObserver();
        }, 400);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location.pathname, isLoading]);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      variant="dark"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      className="glassmorphism"
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: 'rgba(10, 10, 15, 0.95)',
        borderBottom: '1px solid #00d4ff40',
        zIndex: 1000,
        height: '80px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease 0.5s'
      }}
    >
      <Container fluid="lg">
        {/* LOGO */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="d-flex align-items-center" 
          onClick={() => {
            setExpanded(false);
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
            }
          }}
        >
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <motion.div 
              animate={{ rotate: [0, -15, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem' }}
            >
              <Rocket 
                size={32} 
                style={{ color: '#00d4ff', filter: 'drop-shadow(0 0 12px #00d4ff80)' }} 
              />
            </motion.div>
            <span style={{
              fontSize: '1.7rem',
              fontWeight: '900',
              background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2'
            }}>
              NetSystems
            </span>
          </motion.div>
        </Navbar.Brand>

        {/* TOGGLE BUTTON */}
        <motion.div animate={toggleAnimation} className="d-lg-none">
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            style={{ 
              border: '1px solid rgba(0, 212, 255, 0.2)',
              background: 'rgba(0, 212, 255, 0.1)',
              borderRadius: '12px',
              padding: '0.5rem 0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={expanded ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {expanded ? <X size={28} color="#00d4ff" /> : <Menu size={28} color="#ffffff" />}
              </motion.div>
            </AnimatePresence>
            {!expanded && (
              <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '1rem' }}>
                Menú
              </span>
            )}
          </Navbar.Toggle>
        </motion.div>

        {/* MENÚ */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* MENÚ DESKTOP */}
            <div className="d-none d-lg-flex gap-1">
              {sections.map((item, i) => {
                const Icon = item.icon;
                let active;
                
                if (item.path && item.path !== '/') {
                  active = location.pathname === item.path;
                } else {
                  active = activeSection === item.id;
                }

                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ position: 'relative' }}
                  >
                    <Nav.Link
                      as="div"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDesktopNav(item);
                      }}
                      style={{
                        color: active ? '#00d4ff' : '#e0e7ff',
                        fontWeight: active ? '700' : '500',
                        fontSize: '1.05rem',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '12px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        userSelect: 'none'
                      }}
                    >
                      {Icon && <Icon size={18} />}
                      {item.label}
                      
                      {active && (
                        <motion.div
                          layoutId="active-underline"
                          initial={false}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '10%',
                            right: '10%',
                            height: '3px',
                            background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
                            borderRadius: '3px',
                          }}
                        />
                      )}
                    </Nav.Link>
                  </motion.div>
                );
              })}
            </div>

            {/* MENÚ MÓVIL */}
            <AnimatePresence>
              {expanded && (
                <motion.div 
                  className="d-lg-none w-100 mt-3" 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    zIndex: 1001
                  }}
                >
                  <div style={{
                    background: 'rgba(15, 15, 25, 0.98)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '0 0 16px 16px',
                    margin: '0',
                    padding: '1.5rem',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    borderTop: 'none',
                    overflow: 'hidden'
                  }}>
                    {sections.map((item, i) => {
                      const Icon = item.icon;
                      
                      let active;
                      if (item.path && item.path !== '/') {
                        active = location.pathname === item.path;
                      } else {
                        active = activeSection === item.id;
                      }

                      return (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -30 }} 
                          animate={{ opacity: 1, x: 0 }} 
                          transition={{ delay: i * 0.05 }} 
                          className="mb-3"
                        >
                          <div
                            onClick={() => handleMobileNav(item)}
                            style={{
                              color: active ? '#00d4ff' : '#ffffff',
                              fontSize: '1.4rem',
                              fontWeight: active ? '700' : '500',
                              padding: '0.8rem 1rem',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              userSelect: 'none',
                              background: active ? 'rgba(0, 212, 255, 0.1)' : 'transparent'
                            }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              {Icon && <Icon size={22} />}
                              {item.label}
                            </span>
                            {active && <Zap size={20} color="#00d4ff" />}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;