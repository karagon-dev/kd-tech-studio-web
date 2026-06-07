# KD Tech Studio Web

Sitio web corporativo para KD Tech Studio, diseñado para mostrar servicios de desarrollo web rápidos, modernos y profesionales para negocios pequeños.

## Qué incluye

- Secciones de inicio, servicios, portafolio, sobre nosotros y contacto
- Internacionalización con inglés y español
- SEO básico con `meta description`, `keywords`, `canonical` y Open Graph
- Twitter/X card metadata y social preview
- Estilos con SCSS y animaciones suaves con Framer Motion

## Tecnologías

- React
- TypeScript
- Vite
- Sass
- i18next
- framer-motion
- lucide-react

## Cómo ejecutar localmente

```bash
npm install
npm run dev
```

Luego abre `http://localhost:5173` para ver la página.

## Estructura principal

- `src/main.tsx` — punto de entrada
- `src/App.tsx` — layout principal
- `src/sections` — secciones de la página
- `src/locales` — contenidos en inglés y español
- `public/og-image.png` — imagen social preview

## Para actualizar el contenido

Edita los textos en `src/locales/es.json` y `src/locales/en.json`, y los estilos en `src/styles` o en los archivos SCSS de cada componente.

## Cómo contribuir

- Asegúrate de instalar dependencias con `npm install`.
- Ejecuta `npm run dev` para probar los cambios en local.
- Si agregas nuevas secciones o estilos, mantén la estructura de componentes clara y reutilizable.
- Actualiza el contenido localizado en `src/locales` si modificas textos visibles.

## Deployment

Este proyecto puede desplegarse en cualquier servicio estático que soporte Vite, como Vercel, Netlify o GitHub Pages.

1. Ejecuta `npm run build`.
2. Publica la carpeta `dist` desde tu proveedor de hosting.
3. Asegúrate de que la URL canónica en `index.html` coincida con el dominio final.

## Sobre este repositorio

Este proyecto ya no es una plantilla genérica: es la página oficial de KD Tech Studio, con contenido y metadatos pensados para un sitio de negocio real.