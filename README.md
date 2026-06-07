# KD Tech Studio Web

Official corporate website for KD Tech Studio.

This project showcases our web development services, portfolio, technologies, and contact channels through a fast, modern, and responsive experience focused on small and medium-sized businesses.

---

# Features

- Modern responsive landing page
- English and Spanish internationalization
- Smooth animations with Framer Motion
- SEO optimization
- Open Graph and Twitter/X metadata
- Reusable component-based architecture
- SCSS styling structure
- Optimized Vite build setup

---

# Tech Stack

- React
- TypeScript
- Vite
- Sass (SCSS)
- i18next
- Framer Motion
- Lucide React

---

# Project Structure

```txt
src/
│
├── components/
├── sections/
├── locales/
├── styles/
├── assets/
│
├── App.tsx
└── main.tsx
```

### Important folders

- `src/sections` → Main landing page sections
- `src/locales` → Translation files
- `src/styles` → Global styling
- `public/og-image.png` → Social preview image

---

# Getting Started

## Requirements

- Node.js 18+
- npm 9+

## Installation

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Then open:

```txt
http://localhost:5173
```

---

# Available Scripts

## Development

```bash
npm run dev
```

Starts the local Vite development server.

## Production Build

```bash
npm run build
```

Builds the project into the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

Runs a local preview of the production build.

---

# Internationalization

Translations are managed using `i18next`.

Translation files:

```txt
src/locales/en.json
src/locales/es.json
```

When adding new content:

1. Add the translation key to both files.
2. Keep both languages synchronized.
3. Avoid hardcoded strings inside components.

---

# SEO

This project includes:

- Meta descriptions
- Keywords
- Canonical URLs
- Open Graph metadata
- Twitter/X social cards

SEO metadata is configured inside `index.html`.

---

# Styling

The project uses SCSS for styling.

Recommended practices:

- Keep styles modular
- Prefer reusable utility classes
- Avoid deeply nested selectors
- Keep section-specific styles isolated

---

# Deployment

This project can be deployed to any static hosting provider compatible with Vite.

Recommended platforms:

- Vercel
- Netlify
- Azure Static Web Apps
- GitHub Pages

## Deployment Steps

```bash
npm run build
```

Then publish the generated `dist/` folder.

---

# Development Guidelines

- Use reusable components whenever possible
- Keep sections isolated and maintainable
- Follow clean TypeScript practices
- Avoid unnecessary dependencies
- Keep translations updated
- Optimize images before uploading

---

# Recommended VSCode Extensions

- ESLint
- Prettier
- Error Lens
- i18n Ally
- GitLens

---

# Future Improvements

- CMS integration
- Blog section
- Dynamic portfolio system
- Contact form backend integration
- Analytics dashboard
- Theme customization system

---

# License

This project is the property of KD Tech Studio.

All rights reserved.

---

# About KD Tech Studio

KD Tech Studio focuses on creating fast, modern, and scalable web experiences for businesses looking to improve their digital presence.

Website:

https://kdtechstudio.com