import { useState, useEffect } from 'react';

export default function LenisScrollControls() {
  const [isScrolling, setIsScrolling] = useState(true);
  const [progress, setProgress] = useState(0);

  // Función para detener el scroll
  const stopScroll = () => {
    if (window.lenis) {
      window.lenis.stop();
      setIsScrolling(false);
    }
  };

  // Función para reanudar el scroll
  const startScroll = () => {
    if (window.lenis) {
      window.lenis.start();
      setIsScrolling(true);
    }
  };

  // Función para ir a secciones específicas
  const scrollToSection = (sectionId) => {
    if (!window.lenis) return;
    
    const targetElement = document.querySelector(`#${sectionId}`);
    if (!targetElement) return;
    
    window.lenis.scrollTo(targetElement, {
      offset: 0,
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    });
  };

  useEffect(() => {
    const handleScroll = (e) => {
      setProgress(e.progress);
    };

    // Añadir el evento cuando se monte el componente
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.on('scroll', handleScroll);
    }

    return () => {
      // Eliminar el evento cuando se desmonte el componente
      if (typeof window !== 'undefined' && window.lenis) {
        window.lenis.off('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="lenis-controls">
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: `${progress * 100}%` }}></div>
      </div>
      <div className="button-container">
        {isScrolling ? (
          <button onClick={stopScroll}>Pausar Scroll</button>
        ) : (
          <button onClick={startScroll}>Reanudar Scroll</button>
        )}
        <button onClick={() => scrollToSection('seccion1')}>Inicio</button>
        <button onClick={() => scrollToSection('seccion2')}>Acerca de</button>
        <button onClick={() => scrollToSection('seccion3')}>Características</button>
        <button onClick={() => scrollToSection('seccion4')}>Contacto</button>
      </div>
      <style jsx>{`
        .lenis-controls {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 10px;
          padding: 10px 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 600px;
        }
        
        .progress-bar {
          height: 4px;
          width: 100%;
          background: #e0e0e0;
          margin-bottom: 10px;
          border-radius: 4px;
        }
        
        .progress-bar-inner {
          height: 100%;
          background: linear-gradient(90deg, rgb(124, 58, 237), #da62c4);
          border-radius: 4px;
          transition: width 0.1s ease;
        }
        
        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        button {
          background: #f3f3f3;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 5px 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        button:hover {
          background: #eaeaea;
        }
        
        @media (max-width: 768px) {
          .lenis-controls {
            padding: 8px 10px;
          }
          
          button {
            padding: 4px 8px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}