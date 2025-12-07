# Project Structure

```
portfolio/
├── public/                          # Static assets (served at root)
│   ├── assets/
│   │   ├── README.md               # Instructions for CV file
│   │   └── Ajmal-p-CV-01.pdf       # CV file (add your file here)
│   └── vite.svg                    # Vite logo
│
├── src/
│   ├── components/                 # React components
│   │   ├── __tests__/              # Unit tests
│   │   │   ├── About.test.tsx
│   │   │   └── Hero.test.tsx
│   │   ├── common/                 # Common reusable components
│   │   │   ├── CardFeature.tsx
│   │   │   ├── CircularProgress.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── PageHeader.tsx
│   │   │   ├── PreviewSectionButton.tsx
│   │   │   └── TimelineCard.tsx
│   │   ├── home/                   # Home page specific components
│   │   │   ├── Achievements.tsx
│   │   │   ├── CallToAction.tsx
│   │   │   ├── EducationPreview.tsx
│   │   │   ├── ExperiencePreview.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── TechStackSlider.tsx
│   │   │   ├── WhatIDo.tsx
│   │   │   └── WhyHireMe.tsx
│   │   ├── layout/                 # Layout components
│   │   └── Footer.tsx              # Footer component
│   │
│   ├── data/
│   │   └── profile-content.json     # All profile content (easy to update)
│   │
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   │
│   ├── utils/
│   │   └── theme.ts                # Theme management utilities
│   │
│   ├── test/
│   │   └── setup.ts                # Jest test configuration
│   │
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # React entry point
│   ├── index.css                   # Global styles & Tailwind
│   └── vite-env.d.ts               # Vite type definitions
│
├── .eslintrc.cjs                   # ESLint configuration
├── .gitignore                      # Git ignore rules
├── deployment-notes.md             # Deployment instructions
├── index.html                      # HTML template with SEO
├── jest.config.js                  # Jest test configuration
├── package.json                    # Dependencies & scripts
├── postcss.config.js               # PostCSS configuration
├── PROJECT_STRUCTURE.md            # This file
├── README.md                       # Main documentation
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.node.json              # TypeScript config for Node
└── vite.config.ts                  # Vite configuration
```

## Key Files

### Content Management
- **`src/data/profile-content.json`**: Single source of truth for all text content
  - Update this file to change any text on the website
  - No need to edit component files for content changes

### Configuration
- **`package.json`**: Dependencies and npm scripts
- **`vite.config.ts`**: Vite build configuration
- **`tailwind.config.js`**: Tailwind CSS theme and utilities
- **`tsconfig.json`**: TypeScript compiler options

### Components
All components are in `src/components/`:
- Modular and reusable
- TypeScript typed
- Responsive design
- Dark mode support
- Framer Motion animations

### Styling
- **`src/index.css`**: Global styles and Tailwind imports
- **`tailwind.config.js`**: Custom theme configuration
- All styling uses Tailwind utility classes (no custom CSS)

### Testing
- **`src/components/__tests__/`**: Component unit tests
- **`jest.config.js`**: Jest configuration
- **`src/test/setup.ts`**: Test environment setup

### Deployment
- **`README.md`**: Local development and deployment guide
- **`deployment-notes.md`**: Detailed deployment instructions
- **`public/`**: Static assets (CV file, images, etc.)

## Adding Your CV File

1. Place your CV PDF at: `public/assets/Ajmal-p-CV-01.pdf`
2. The file will be accessible at: `/assets/Ajmal-p-CV-01.pdf`
3. The path is already configured in `profile-content.json`

If your CV file is located elsewhere (e.g., `/mnt/data/Ajmal p CV 01.pdf`):
1. Copy it to `public/assets/Ajmal-p-CV-01.pdf`
2. Or update `cvPath` in `src/data/profile-content.json` to match your file location

