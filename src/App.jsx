import React, { useEffect, Suspense, lazy } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import { motion, AnimatePresence } from 'framer-motion';



// --- COMPONENTES PRINCIPALES ---

import AppNavbar from './components/AppNavbar';

import AppFooter from './components/AppFooter';

import ParticleBackground from './components/ParticleBackground';



// Lazy load del componente de FAQ flotante

const AppQuestions = lazy(() => import('./components/AppQuestions'));



// Animación de transición de página

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



  // Scroll al inicio en cambio de ruta

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [location.pathname]);



  return (

    <>

      {/* 1. FONDO DE PARTÍCULAS INTERACTIVO */}

      <ParticleBackground />



      {/* 2. NAVBAR */}

      <AppNavbar />



      {/* 3. CONTENIDO DE LA PÁGINA */}

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

            {/* Outlet renderiza la ruta actual (HomePage, CoberturaPage, etc.) */}

            <Outlet />

          </motion.div>

        </AnimatePresence>

      </main>



      {/* 4. BOTÓN FLOTANTE DE FAQ (Lazy Loaded) */}

      <Suspense fallback={<div>Loading...</div>}>

        <AppQuestions />

      </Suspense>



      {/* 5. FOOTER */}

      <AppFooter />

    </>

  );

}



export default App;