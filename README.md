# Muhammed Ajmal P - Portfolio Website

A state-of-the-art, responsive personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features premium visual design with custom glassmorphism, dynamic micro-animations, global stateful modals, and high-fidelity SEO optimization.

---

## 🚀 Advanced Features

### 💎 Premium Custom Modals & Dialogs
- **Interactive PDF Resume Viewer**: Triggers when clicking `"View Resume"` on the Navbar or Bio. Implements a gorgeous glassmorphic header, interactive loading animation, dynamic direct download triggers, standard print shortcuts, and a custom **Fullscreen (Open in New Tab)** action for premium mobile responsiveness.
- **Glassmorphic Download Confirmation**: Triggers when clicking `"Download Resume"` on bottom CTA buttons, prompting with a sleek pulse-animated warning dialog instead of browser-native alert alerts.
- **Custom Alert Tooltips**: Replaced default browser-native validation popups on all form submissions (Contact & Login) with custom-animated warning tooltips (`!`). They feature arrows pointing directly to the invalid input, soft backdrops, and intelligent validation (e.g., checks for missing `@` in emails) that clears as you correct inputs in real-time.

### 🎨 Visual & Layout Innovations
- **Global Context Management**: Modals are controlled using a global React Context (`ResumeModalContext.tsx`) and Provider mounted at the layout level in `ClientLayout.tsx` for optimal, lag-free rendering.
- **Unified Sky Blue & Dark Theme**: Modern dark theme centered around a Charcoal/Gray-900 background, crisp white typography, and vibrant native sky blue (`#38BDF8`) accent borders and animations.
- **Concentric "About Me" Bio Section**: Features concentric rotating border rings framing a greyscale profile photo (focused headshot zoom effect) detailed with interactive tech stacks (`HTML5`, `JS`, `React`, `CSS3`) that react to cursor hovers.
- **Horizontal Sliding Showcase Track**: The Featured Projects grid is designed as a smooth snap-scrolling track that handles client proprietary platforms beautifully without needing public repositories.
- **Global Right-Click Prevention**: Standard browser context menus (Back, Inspect, View Source) are completely disabled globally to protect media assets, matching highly immersive digital agency standards.

### ⚡ Performance & Robustness
- **Skeleton Hash-Scroll Handler**: A client-side hook solves deep scrolling to page anchors after the skeleton loading transitions complete.
- **SMTP Local Development Fallback**: If SMTP environment variables are not loaded, the contact form API route (`/api/contact`) prints form details inside the terminal and returns a successful `200` response. This prevents form submission failures in development while remaining fully operational for production email transfers.
- **GPU CSS Animations**: Restructured heavy Framer Motion keyframe animations into composite CSS shine effects to eliminate CPU lag.

---

## 📁 Project Directory

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── Ajmal-p-CV-01.pdf          # Resume PDF file
│   │   ├── kugoriental.png            # Project screenshots
│   │   ├── g7_website.png
│   │   ├── klashra.png
│   │   ├── vsafad.png
│   │   └── pagenow.png
│   └── profile.png                    # Profile headshot image
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts           # SMTP Contact endpoint with local fallback
│   │   ├── blog/                      # Static blog pages
│   │   ├── contact/                   # Rebuilt minimal contact page
│   │   ├── projects/                  # Dynamic projects showcase grid
│   │   ├── login/                     # Admin login page with custom tooltips
│   │   ├── layout.tsx                 # App Root Layout & SEO Meta
│   │   └── page.tsx                   # Main entry point
│   ├── components/
│   │   ├── common/
│   │   │   ├── ContactForm.tsx        # Contact form with custom tooltips
│   │   │   ├── CustomCursor.tsx       # Interactive premium torch follower
│   │   │   └── CardFeature.tsx        # Modern project cards
│   │   ├── home/
│   │   │   ├── Hero.tsx               # Centered code-IDE background hero
│   │   │   ├── AboutMe.tsx            # Concentric rotating photo biography
│   │   │   ├── WhatIDo.tsx            # Capability grid
│   │   │   ├── ProjectsPreview.tsx    # Horizontal snapping projects slider
│   │   │   └── CallToAction.tsx       # Bottom CTA button
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Centered dynamic white-label navbar
│   │   │   └── ClientLayout.tsx       # Providers wrapper & right-click prevention
│   │   └── ThemeToggle.tsx            # Light/Dark mode toggler
│   ├── context/
│   │   └── ResumeModalContext.tsx     # Global Modal Context (PDF Viewer & Download Confirm)
│   ├── data/
│   │   └── profileData.ts             # Static site content (Single Source of Truth)
│   ├── utils/
│   │   └── theme.ts                   # LocalStorage Theme sync
│   └── index.css                      # Tailwind core directives & hardware animations
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🛠️ Local Development

### Installation & Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Verify static assets**:
   - Ensure the resume is present at `public/assets/Ajmal-p-CV-01.pdf`.
   - Verify the profile headshot is present at `public/profile.png`.

3. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   *The application will boot up at `http://localhost:3000`.*

### Build Optimization

To compile and bundle for strict production check:
```bash
npm run build
```

---

## 📝 Updating Website Content

All content across the website is unified under `src/data/profileData.ts`. Editing this file updates:
- Personal Bio & Titles
- Tech capabilities list
- Highlighted developed projects (Titles, Tags, Live Links)
- Certifications, Testimonials, and SEO Meta descriptors

---

## 🚀 Vercel Production Deployment

### Setup Env Variables
To enable Nodemailer SMTP email forwarding in production, add the following environment variables inside your Vercel/Hosting Dashboard:

- `EMAIL_USER` - The sending Gmail account address.
- `EMAIL_PASS` - Gmail App Password (generated via Google Account settings).
- `EMAIL_TO` - Destination email where submission details are delivered.

---

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
