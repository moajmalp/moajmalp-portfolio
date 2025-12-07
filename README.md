# Muhammed Ajmal P - Portfolio Website

A modern, multi-page responsive personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and React Router. Features premium UI design with glassmorphism effects, smooth page transitions, and comprehensive SEO optimization.

## 🚀 Features

- **Multi-Page Routing**: React Router with dedicated pages (/, /about, /skills, /experience, /education, /contact, /login)
- **Premium UI Design**: Glassmorphism effects, modern card layouts, 3D hover effects, animated backgrounds
- **Page Transitions**: Smooth Framer Motion animations between pages with fade/slide effects
- **Dark Premium Theme**: Consistent dark theme with gradient accents across all pages
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: react-helmet-async for per-page SEO (meta tags, Open Graph, JSON-LD, canonical URLs)
- **Animated Landing Page**: Hero section with parallax, floating shapes, tech stack slider, achievements, and more
- **Premium Pages**: All pages upgraded with consistent premium design:
  - **About**: Photo section, feature tiles, journey timeline
  - **Skills**: Linear and circular progress animations
  - **Experience**: Vertical timeline with sticky year markers, expandable details
  - **Education**: Step timeline with shine effects
  - **Contact**: Floating labels, form validation, social links
- **Reusable Components**: PageHeader, CardFeature, TimelineCard, CircularProgress, ContactForm
- **Content Management**: Single `profileData.js` file for all content
- **Accessible**: Semantic HTML and ARIA attributes
- **Performance Optimized**: Lazy-loaded animations, GPU-accelerated transforms

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/
│       └── Ajmal-p-CV-01.pdf          # CV file (add your CV here)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── PageHeader.tsx         # Reusable page headers
│   │   │   ├── CardFeature.tsx        # Feature cards with 3D effects
│   │   │   ├── TimelineCard.tsx       # Timeline entry component
│   │   │   ├── CircularProgress.tsx   # Circular progress bars
│   │   │   └── ContactForm.tsx        # Contact form with validation
│   │   ├── home/
│   │   │   ├── Hero.tsx               # Premium hero section
│   │   │   ├── WhatIDo.tsx            # Services section
│   │   │   ├── TechStackSlider.tsx    # Auto-play tech stack
│   │   │   ├── Achievements.tsx       # Animated counters
│   │   │   ├── WhyHireMe.tsx          # Strengths section
│   │   │   └── CallToAction.tsx       # CTA section
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Premium glassmorphism navbar
│   │   │   └── PageTransition.tsx     # Page transition wrapper
│   │   ├── __tests__/                 # Unit tests
│   │   ├── Footer.tsx                 # Footer component
│   │   └── ThemeToggle.tsx            # Dark/light theme toggle
│   ├── pages/
│   │   ├── Home.tsx                   # Premium animated landing page (/)
│   │   ├── About.tsx                  # About with timeline (/about)
│   │   ├── Skills.tsx                 # Skills with progress bars (/skills)
│   │   ├── Experience.tsx            # Timeline with sticky markers (/experience)
│   │   ├── Education.tsx              # Step timeline (/education)
│   │   ├── Contact.tsx                # Contact with validation (/contact)
│   │   └── Login.tsx                  # Premium login page (/login)
│   ├── data/
│   │   └── profileData.js             # All profile content (single source)
│   ├── utils/
│   │   └── theme.ts                   # Theme management utilities
│   ├── test/
│   │   └── setup.ts                   # Jest test setup
│   ├── App.tsx                        # Main app with routing
│   ├── main.tsx                       # React entry point
│   └── index.css                      # Global styles & transitions
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── jest.config.js
└── README.md
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add your CV file**:
   - Place your CV PDF file at `public/assets/Ajmal-p-CV-01.pdf`
   - If your CV is located elsewhere (e.g., `/mnt/data/Ajmal p CV 01.pdf`), copy it to `public/assets/Ajmal-p-CV-01.pdf`
   - Or update the `cvPath` in `src/data/profile-content.json` to match your file location
   - The CV download button will work once the file is in place

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   - The app will automatically open at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode

## 📝 Updating Content

All text content is stored in `src/data/profileData.js`. Simply edit this file to update:

- Personal information
- Biography text
- Hero section (headline, subtitle, CTAs)
- Skills and languages (with proficiency levels)
- Experience entries
- Education entries
- Contact information
- SEO metadata

No need to modify component files for content changes!

### Routes

- `/` - Home page with hero section
- `/about` - About page with biography
- `/skills` - Skills & Languages page with proficiency indicators
- `/experience` - Experience timeline page
- `/education` - Education cards page
- `/contact` - Contact form page

## 🚀 Deployment to Vercel

### Step 1: Prepare Your Project

1. **Ensure your CV file is in place**:
   - Add your CV PDF to `public/assets/Ajmal-p-CV-01.pdf`
   - Or update the path in `profile-content.json`

2. **Update environment-specific content** (if needed):
   - Update URLs in `index.html` (Open Graph, Twitter cards)
   - Update structured data in `index.html`

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm project settings
   - Deploy!

#### Option B: Using GitHub Integration

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

### Step 3: Configure Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Environment Variables

No environment variables are required for basic deployment. If you add a contact form backend later, add your API endpoints here.

### Step 5: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 📄 Serving the CV File

The CV file is served from the `public` directory, which Vercel automatically serves as static assets.

**Important Notes**:
- The CV file path in `profile-content.json` should be relative to the `public` directory
- Example: If your CV is at `public/assets/cv.pdf`, use `/assets/cv.pdf` in the JSON
- Vercel will serve files from `public/` at the root URL
- Ensure the file exists before deploying

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Animations

Animations use Framer Motion. Customize in component files or add new animations in `tailwind.config.js`.

### Layout

All components are modular. Edit individual component files in `src/components/` to customize layouts.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👤 Author

**Muhammed Ajmal P**
- Email: hi@moajmalp.in
- Location: Malappuram, Kerala

---

Built with ❤️ using React, TypeScript, Vite, and Tailwind CSS
