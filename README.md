# Demo Lenis con Astro

Demo interactiva de [Lenis](https://github.com/studio-freight/lenis), una biblioteca de scroll suave implementada con [Astro](https://astro.build) y React.

## ¿Qué es Lenis?

Lenis ("suave" en latín) es una biblioteca liviana, robusta y de alto rendimiento para crear experiencias de scroll suave. Desarrollada por [Studio Freight](https://www.studiofreight.com/), está diseñada para ser sencilla de usar y fácil de integrar en proyectos web.

Lenis mejora sustancialmente la experiencia de desplazamiento mediante:

- **Scroll suave:** Elimina el desplazamiento brusco nativo y lo reemplaza con animaciones fluidas
- **Alto rendimiento:** Optimizado para evitar caídas de FPS o retrasos
- **Control programático:** Permite pausar, reanudar y manipular el scroll
- **Eventos personalizables:** Proporciona eventos para sincronizar animaciones con el desplazamiento
- **Anclajes mejorados:** Navegación suave hacia secciones específicas

## Estructura del proyecto

```
/
├── src/
│   ├── components/         # Componentes React
│   │   ├── Lenis.tsx       # Proveedor principal de Lenis
│   │   ├── LenisScrollControls.tsx # Controles interactivos
│   │   └── ScrollEffects.tsx # Animaciones en scroll
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal
│   ├── pages/
│   │   └── index.astro     # Página principal
│   └── styles/
│       └── lenis.css       # Estilos recomendados por Lenis
└── astro.config.mjs        # Configuración de Astro
```

## Características de la demo

- Scroll suave entre secciones
- Controles interactivos (pausar/reanudar scroll)
- Barra de progreso visual
- Navegación por anclajes
- Animaciones vinculadas al scroll
- Implementación con TypeScript

## Ejecutar la demo

1. Clonar el repositorio
```bash
git clone [url-del-repositorio]
cd [nombre-del-repositorio]
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

La demo estará disponible en `http://localhost:4321`

## Personalización

Puedes ajustar la configuración de Lenis en el componente `Lenis.tsx`:

```typescript
// Inicializar Lenis con configuración personalizada
const lenis = new Lenis({
  duration: 1.2, // Duración de la animación (segundos)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de easing
  orientation: 'vertical', // Orientación del scroll
  wheelMultiplier: 1, // Multiplicador para eventos de rueda del mouse
  touchMultiplier: 2, // Multiplicador para eventos táctiles
  smoothWheel: true, // Suavizar scroll con rueda
  // Más opciones en la documentación oficial
});
```

## Beneficios frente a CSS scroll-behavior

Lenis ofrece ventajas significativas sobre `scroll-behavior: smooth` nativo:
- Mayor control sobre el comportamiento del scroll
- Rendimiento optimizado en todos los navegadores
- API para manipular programáticamente el scroll
- Eventos para sincronizar animaciones
- Comportamiento consistente entre navegadores

## Tecnologías utilizadas

- [Astro](https://astro.build) v5
- [React](https://react.dev)
- [Lenis](https://github.com/studio-freight/lenis)
- [TypeScript](https://www.typescriptlang.org)

## Recursos

- [Documentación oficial de Lenis](https://github.com/studio-freight/lenis)
- [Demo oficial de Lenis](https://lenis.darkroom.engineering/)
- [Documentación de Astro](https://docs.astro.build)