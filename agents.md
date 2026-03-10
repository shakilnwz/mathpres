# Math Lecture Presentation App - Implementation Plan

## Project Overview
- **Type**: Vue 3 SPA with Vue Router
- **Purpose**: Interactive math lecture presentation with slide-based navigation
- **Offline**: PWA with service worker (vite-plugin-pwa)

---

## 1. Project Setup & Dependencies

### Install Required Packages
```bash
# Router & PWA
npm install vue-router@4
npm install -D vite-plugin-pwa

# Tailwind CSS v4
npm install -D tailwindcss@latest @tailwindcss/vite

# Math libraries
npm install mathjs plotly.js-dist-min

# Markdown support (future)
npm install markdown-it @types/markdown-it

# Optional: Math rendering
npm install katex
```

### Vite Config (`vite.config.ts`)
- Add `@tailwindcss/vite` plugin
- Add `VitePWA` plugin with offline caching strategy
- Configure workbox for full offline support

---

## 2. Directory Structure
```
src/
├── components/
│   ├── SlideView.vue        # Full-screen slide wrapper
│   ├── SlideNav.vue        # Chapter/slide navigation
│   └── SlideRenderer.vue   # Renders .vue, .html, or .md slides
├── composables/
│   ├── useSlides.ts        # Slide loading & navigation logic
│   └── useChapter.ts       # Chapter management
├── views/
│   ├── HomeView.vue        # Welcome/landing page
│   └── SlideView.vue       # Dynamic slide route
├── router/
│   └── index.ts            # Vue Router config
├── chapters/                # Your content (create manually)
│   ├── chapter-1/
│   │   ├── meta.json       # Chapter title, description
│   │   ├── slide-1.vue
│   │   ├── slide-2.html
│   │   └── slide-3.md
│   └── chapter-2/
│       └── ...
├── style.css               # Tailwind imports
└── main.ts
```

---

## 3. Router Configuration

### Routes
- `/` - Home/welcome
- `/chapter/:chapterId` - Chapter overview
- `/chapter/:chapterId/:slideIndex` - Specific slide
- `/:catchAll(.*)*` - 404

### Transition Strategy
Use Vue's `<transition>` with `mode="out-in"`:
- Slide left when advancing
- Slide right when going back
- Use route meta for custom transitions

```vue
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition || 'slide'" mode="out-in">
    <component :is="Component" :key="route.path" />
  </transition>
</router-view>
```

---

## 4. Slide Loading Strategy

### Dynamic Import
- Use Vite's `import.meta.glob()` to load slides from `src/chapters/**/*`
- Each chapter directory has a `meta.json` for metadata
- Supported formats: `.vue`, `.html`, `.md`

### Slide Resolution
1. Route: `/chapter/1/2` → Chapter 1, Slide 2
2. Look up chapter meta → get slide list
3. Dynamically import the appropriate file
4. Render based on file extension

---

## 5. Navigation Component

### Features
- Collapsible chapter list
- Current chapter/slide highlight
- Keyboard navigation (arrow keys)
- Progress indicator
- Mobile-friendly drawer

### Keyboard Shortcuts
- `←` / `→`: Previous/Next slide
- `Escape`: Toggle nav
- `Home`: First slide
- `End`: Last slide

---

## 6. Tailwind CSS v4 Setup

### style.css
```css
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --color-slide-bg: #ffffff;
  --font-display: "Inter", system-ui, sans-serif;
}
```

### Full-screen Slide Utility
```css
.slide {
  @apply w-screen h-screen fixed inset-0 overflow-hidden;
}
```

---

## 7. Math Libraries Integration

### Plotly (Charts/Graphs)
```ts
import Plotly from 'plotly.js-dist-min'
// Use in slides via window.Plotly or import in slide files
```

### Math.js (Calculations)
```ts
import { evaluate, derivative, simplify } from 'mathjs'
// Symbolc differentiation, equation solving, etc.
```

### KaTeX (LaTeX Rendering)
```ts
import katex from 'katex'
// Render: katex.renderToString('\\int_0^\\infty x^2 dx')
```

---

## 8. PWA Configuration

### vite.config.ts PWA Section
```ts
VitePWA({
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico'],
  manifest: {
    name: 'Math Lectures',
    short_name: 'MathPres',
    theme_color: '#ffffff',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
    runtimeCaching: [{
      urlPattern: /^https:\/\/cdn\.plotly\.js\/.*/i,
      handler: 'CacheFirst'
    }]
  }
})
```

---

## 9. Implementation Steps

### Phase 1: Foundation
1. [ ] Install all dependencies
2. [ ] Configure Tailwind CSS v4
3. [ ] Set up Vue Router with transitions
4. [ ] Create basic slide layout (full-screen)

### Phase 2: Slide System
5. [ ] Build slide loader with `import.meta.glob`
6. [ ] Create chapter metadata structure
7. [ ] Implement dynamic slide rendering
8. [ ] Add navigation component

### Phase 3: Enhancements
9. [ ] Add keyboard navigation
10. [ ] Integrate math libraries
11. [ ] Add markdown support

### Phase 4: PWA
12. [ ] Configure vite-plugin-pwa
13. [ ] Test offline functionality
14. [ ] Add manifest icons

---

## 10. Sample Chapter Structure

### `src/chapters/chapter-1/meta.json`
```json
{
  "title": "Introduction to Calculus",
  "description": "Basic concepts of limits and derivatives",
  "slides": ["slide-1.vue", "slide-2.html", "slide-3.md"]
}
```

### `src/chapters/chapter-1/slide-1.vue`
```vue
<template>
  <div class="flex items-center justify-center h-full">
    <h1 class="text-6xl font-bold">Limits</h1>
  </div>
</template>
```

---

## 11. Suggested Improvements

1. **MathLive** - For interactive math input/editing
2. **Mermaid.js** - For math diagrams in markdown
3. **Reveal.js** - Consider as alternative if you need more presentation features
4. **VueUse** - For keyboard shortcuts composable
5. **IndexedDB** - For storing user progress/bookmarks offline

---

## 12. Commands

```bash
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview production build
```
