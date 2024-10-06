'use client';

import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 12.82743,
  lng: 79.70775
};

export default function VideoSection() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <>
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Process
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-w-16 aspect-h-9"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Location
          </motion.h2>
          {loadError && (
            <div className="text-red-500 text-center">Map cannot be loaded right now, sorry.</div>
          )}
          {!isLoaded ? (
            <div className="text-center">Loading...</div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* You can add markers or other map components here */}
              </GoogleMap>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
