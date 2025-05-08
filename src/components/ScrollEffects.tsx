import { useEffect, useRef } from 'react';

export default function ScrollEffects() {
  const elementsRef = useRef(null);
  
  useEffect(() => {
    if (!elementsRef.current || typeof window === 'undefined' || !window.lenis) return;
    
    const elements = elementsRef.current.querySelectorAll('.animate-on-scroll');
    
    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isInView) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };
    
    // Añadir el evento cuando se monte el componente
    window.lenis.on('scroll', handleScroll);
    
    // Iniciar con un estado correcto
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    return () => {
      window.lenis.off('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={elementsRef} className="scroll-effects-container">
      <div className="animate-on-scroll fade-up">
        <h3>Scroll con efectos</h3>
        <p>Lenis permite crear experiencias de scroll interactivas.</p>
      </div>
      
      <div className="animate-on-scroll fade-up delay-1">
        <div className="card">
          <h4>Rendimiento</h4>
          <p>Optimizado para navegadores modernos</p>
        </div>
      </div>
      
      <div className="animate-on-scroll fade-up delay-2">
        <div className="card">
          <h4>Personalizable</h4>
          <p>Numerosas opciones de configuración</p>
        </div>
      </div>
      
      <div className="animate-on-scroll fade-up delay-3">
        <div className="card">
          <h4>Liviano</h4>
          <p>Mínimo impacto en el rendimiento</p>
        </div>
      </div>
      
      <style jsx>{`
        .scroll-effects-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        
        .card {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          height: 100%;
        }
        
        h3 {
          grid-column: 1 / -1;
          text-align: center;
          margin-bottom: 30px;
        }
        
        h4 {
          margin-top: 0;
          color: #333;
        }
      `}</style>
    </div>
  );
}