import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

// Declaración simplificada para window.lenis
declare global {
  interface Window {
    lenis: any;
  }
}

export default function LenisProvider() {
  const lenisRef = useRef<any>(null);
  
  useEffect(() => {
    // Inicializar Lenis con configuración recomendada
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: false,
      anchors: true,
      autoResize: true
    });
    
    // Exponer la instancia de Lenis globalmente
    window.lenis = lenis;
    lenisRef.current = lenis;
    
    // Crear un loop de requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Escuchar eventos de scroll
    lenis.on('scroll', (e) => {
      // Puedes usar este evento para sincronizar con GSAP ScrollTrigger u otras animaciones
      // console.log(e);
    });
    
    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);
  
  return null;
}