# KrioRama Tech Solutions — Portfolio

Premium dark-theme portfolio built with **React + Vite + JavaScript + Tailwind CSS + Framer Motion**. Zero backend, zero auth, zero database. Pure frontend.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 18 + Vite 5 (JavaScript, no TypeScript)
- Tailwind CSS 3
- Framer Motion (animations, scroll, magnetic buttons)
- Plain HTML5 canvas for particles (no heavy libs)

## Structure

```
src/
  App.jsx
  main.jsx
  styles/index.css
  components/
    Navbar.jsx
    Footer.jsx
    Cursor.jsx
    AuroraBackground.jsx
    Particles.jsx
    MagneticButton.jsx
  sections/
    Hero.jsx
    Story.jsx
    Services.jsx
    Projects.jsx
    Process.jsx
    TechGalaxy.jsx
    Testimonials.jsx
    Contact.jsx
```

## Notes

- All copy, palette, sections and projects follow the original brief.
- The contact form opens the user's mail client (no backend). Replace `hello@kriorama.com` and the WhatsApp number in `Contact.jsx` / `Footer.jsx` with real ones.
- Lighthouse-friendly: single-page, no blocking scripts, lazy animations via Framer Motion's `whileInView`.
