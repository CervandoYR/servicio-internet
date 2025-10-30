import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import { Wifi } from 'lucide-react';
import ReactDOMServer from 'react-dom/server';

// Importar las imágenes (esto está perfecto)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix de Leaflet (esto está perfecto)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Icono personalizado (esto está perfecto)
const customIcon = new L.DivIcon({
  html: ReactDOMServer.renderToString(
    <div style={{
      background: 'var(--accent-neon)',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--neon-shadow-light)',
      border: '2px solid var(--bg-deep)'
    }}>
      <Wifi size={14} color="var(--bg-deep)" />
    </div>
  ),
  className: '',
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});


function InteractiveMap({ center, zoom, markers }) {

  // --- 💡 AQUÍ ESTÁ EL ARREGLO ---

  // ANTES (Stadia - Requiere autenticación de dominio)
  // const darkTileUrl = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
  // const attribution = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

  // AHORA (CartoDB - 100% gratis y sin autenticación)
  const darkTileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

  // --- FIN DEL ARREGLO ---

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      scrollWheelZoom={false} 
      style={{ height: '100%', width: '100%', borderRadius: '8px' }}
    >
      <TileLayer
        attribution={attribution}
        url={darkTileUrl}
      />
      
      <Circle 
        center={center} 
        radius={2000}
        pathOptions={{ 
          color: 'var(--accent-neon)', 
          fillColor: 'var(--accent-cyan)', 
          fillOpacity: 0.1,
          weight: 2
        }}
      />
      
      {markers.map((marker, idx) => (
        <Marker key={idx} position={marker.pos} icon={customIcon}>
          <Popup>
            <strong style={{ color: '#111' }}>{marker.name}</strong>
            <p style={{ color: '#333', margin: 0 }}>Cobertura 100% Fibra Óptica</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default InteractiveMap;