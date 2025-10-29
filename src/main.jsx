import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// VISTAS Y COMPONENTES
import App from './App.jsx';
import HomePage from './views/HomePage.jsx';
import CoberturaPage from './views/CoberturaPage.jsx';
import ConocenosPage from './views/ConocenosPage.jsx';
import SoportePage from './views/SoportePage.jsx';
// ... (importa tus otras páginas)

// --- HOJAS DE ESTILO ESENCIALES ---

// 1. IMPORTAR BOOTSTRAP CSS (¡ESTA ES LA LÍNEA QUE FALTABA!)
//    Esto carga el grid (Row, Col), los componentes (Navbar) y el reseteo base.
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. IMPORTAR LEAFLET CSS (Para el mapa)
import 'leaflet/dist/leaflet.css';

// 3. IMPORTAR NUESTROS ESTILOS GLOBALES (El tema oscuro, fuentes, etc.)
//    Debe ir DESPUÉS de Bootstrap para que podamos sobreescribirlo.
import './index.css'; 

// --- FIN DE HOJAS DE ESTILO ---

// (Asegúrate de que las importaciones antiguas estén eliminadas)
// ELIMINA ESTAS LÍNEAS SI AÚN EXISTEN:
// import "./index.scss";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "aos/dist/aos.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        {/* Usamos App.jsx como "Layout" principal */}
        <Route path="/" element={<App />}>
          {/* Estas son las páginas que se renderizan dentro de App */}
          <Route index element={<HomePage />} />
          <Route path="cobertura" element={<CoberturaPage />} />
          <Route path="conocenos" element={<ConocenosPage />} />
          <Route path="soporte" element={<SoportePage />} />
          {/* ... (tus otras rutas) */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);