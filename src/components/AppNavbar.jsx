import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Menu, X, Rocket } from 'lucide-react';

function AppNavbar() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 💡 FIX #2: "INICIO" NO FUNCIONA ---
  // Se añade window.scrollTo(0, 0) para forzar el scroll al inicio
  // en cada navegación.
  const handleNav = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // <--- AÑADIDO
    setExpanded(false);
  };

  const scrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setExpanded(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -20 },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Navbar
      fixed="top"
      expand="lg"
      variant="dark"
      className={`py-3 glassmorphism ${scrolled ? 'scrolled-nav' : ''}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{
        borderBottom: scrolled ? '1px solid var(--accent-neon)' : '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'border-color 0.3s ease'
      }}
    >
      <Container fluid="lg">
        {/* --- 💡 FIX #1: CURSOR --- (Añadido al Brand también) */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold d-flex align-items-center" 
          style={{ 
            fontSize: '1.5rem', 
            color: 'var(--text-primary)', 
            cursor: 'pointer' // <--- AÑADIDO
          }}
          onClick={() => setExpanded(false)} // Cierra el menú si se hace clic en el logo en móvil
        >
          <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <Rocket size={28} className="me-2 text-gradient" />
          </motion.div>
          NetSystems {/* Tu nombre original era NetFuture, lo cambié a NetSystems como en el Brand */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={expanded ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {expanded ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </AnimatePresence>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* --- Versión de escritorio (animada) --- */}
            <div className="d-none d-lg-flex">
              {/* --- 💡 FIX #1: CURSOR --- (Añadido style={{ cursor: 'pointer' }}) */}
              <Nav.Link as={motion.div} whileHover={{ color: 'var(--accent-neon)', scale: 1.1 }} onClick={() => handleNav('/')} style={{ cursor: 'pointer' }}>Inicio</Nav.Link>
              <Nav.Link as={motion.div} whileHover={{ color: 'var(--accent-neon)', scale: 1.1 }} onClick={() => scrollToSection('plans')} style={{ cursor: 'pointer' }}>Planes</Nav.Link>
              <Nav.Link as={motion.div} whileHover={{ color: 'var(--accent-neon)', scale: 1.1 }} onClick={() => handleNav('/cobertura')} style={{ cursor: 'pointer' }}>Cobertura</Nav.Link>
              <Nav.Link as={motion.div} whileHover={{ color: 'var(--accent-neon)', scale: 1.1 }} onClick={() => handleNav('/conocenos')} style={{ cursor: 'pointer' }}>Conócenos</Nav.Link>
              <Nav.Link as={motion.div} whileHover={{ color: 'var(--accent-neon)', scale: 1.1 }} onClick={() => handleNav('/soporte')} style={{ cursor: 'pointer' }}>Soporte</Nav.Link>
            </div>
            
            {/* --- Versión móvil (animada) --- */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  className="d-lg-none w-100 text-center"
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* --- 💡 FIX #1: CURSOR --- (Añadido style={{ cursor: 'pointer' }}) */}
                  <Nav.Link as={motion.div} variants={mobileLinkVariants} onClick={() => handleNav('/')} style={{ cursor: 'pointer' }}>Inicio</Nav.Link>
                  <Nav.Link as={motion.div} variants={mobileLinkVariants} onClick={() => scrollToSection('plans')} style={{ cursor: 'pointer' }}>Planes</Nav.Link>
                  <Nav.Link as={motion.div} variants={mobileLinkVariants} onClick={() => handleNav('/cobertura')} style={{ cursor: 'pointer' }}>Cobertura</Nav.Link>
                  <Nav.Link as={motion.div} variants={mobileLinkVariants} onClick={() => handleNav('/conocenos')} style={{ cursor: 'pointer' }}>Conócenos</Nav.Link>
                  <Nav.Link as={motion.div} variants={mobileLinkVariants} onClick={() => handleNav('/soporte')} style={{ cursor: 'pointer' }}>Soporte</Nav.Link>
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