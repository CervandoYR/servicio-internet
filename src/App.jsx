// src/App.jsx
import React, { useEffect, Suspense, lazy, useState } from 'react'; // <-- AÑADIR useState
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTES PRINCIPALES ---
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import ParticleBackground from './components/ParticleBackground';
import Preloader from './components/Preloader'; // <-- 1. IMPORTAR PRELOADER

// Lazy load del componente de FAQ flotante
const AppQuestions = lazy(() => import('./components/AppQuestions'));

// Animación de transición de página (sin cambios)
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function App() {
  const location = useLocation();

  // --- 2. AÑADIR ESTADO DE CARGA ---
  const [isLoading, setIsLoading] = useState(true);

  // --- 3. TEMPORIZADOR PARA EL PRELOADER ---
  useEffect(() => {
    // Un tiempo fijo. 1500ms (1.5s) es un buen punto de partida.
    // Esto le da tiempo a React.lazy y Suspense de cargar todo.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // <-- Puedes ajustar este tiempo (ej. 2000)

    return () => clearTimeout(timer);
  }, []); // El array vacío asegura que solo se ejecute una vez

  // Scroll al inicio en cambio de ruta (sin cambios)
  useEffect(() => {
    // No hacer scroll al inicio si solo está cambiando el hash
    if (location.pathname !== location.state?.prevPath) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      {/* 4. LÓGICA DEL PRELOADER */}
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Renderizamos el resto de la app.
        Podríamos ocultarlo con un `!isLoading && ( ... )`
        pero es mejor dejar que cargue "detrás" del preloader.
        Le pasamos 'isLoading' al Navbar.
      */}

      <ParticleBackground />

      {/* 5. PASAR 'isLoading' AL NAVBAR */}
      <AppNavbar isLoading={isLoading} />

      <main style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Suspense fallback={<div>Loading...</div>}>
        <AppQuestions />
      </Suspense>

      <AppFooter />
    </>
  );
}

export default App;