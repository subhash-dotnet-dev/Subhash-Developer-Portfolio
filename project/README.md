# Subhash Yadav — .NET Full Stack Developer Portfolio

A premium, modern developer portfolio built with HTML, CSS, and JavaScript.

## Structure

```
├── assets/
│   ├── images/
│   │   ├── certificates/
│   │   ├── profile/
│   │   └── projects/
│   └── resume/
├── components/      # HTML partials loaded dynamically
├── css/
│   ├── style.css        # Design tokens, reset, typography
│   ├── components.css   # All UI components
│   ├── animations.css   # Keyframes & scroll reveal
│   └── responsive.css   # Breakpoints
├── data/            # Content data files
├── js/              # Modular JavaScript
├── pages/           # Sub-pages (projects, project-details, 404)
└── index.html
```

## Features

- Dark/Light theme with localStorage persistence
- Data-driven content (all content lives in `data/*.js`)
- Responsive across all viewport sizes
- Scroll reveal animations
- Working project filtering
- Project detail pages via URL parameters
- Contact form with validation and mailto fallback
- Certificate modal preview
- Live date/time in navbar
- Accessible navigation, forms, and interactions

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Profile Image

Replace `assets/images/profile/subhash-professional-profile.svg` with your actual photo
(named `subhash-professional-profile.png` and update the reference in `data/profile.js`
and `components/hero.html`).
