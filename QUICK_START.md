# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## 🚀 Step 1: Install Dependencies

```bash
npm install
```

## 📄 Step 2: Add Your CV File

Copy your CV PDF file to:
```
public/assets/Ajmal-p-CV-01.pdf
```

**Note**: If your CV is located at `/mnt/data/Ajmal p CV 01.pdf` or elsewhere, simply copy it to the `public/assets/` folder with the name `Ajmal-p-CV-01.pdf`.

## ▶️ Step 3: Start Development Server

```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

## ✏️ Step 4: Customize Content (Optional)

Edit `src/data/profile-content.json` to update:
- Personal information
- Skills
- Experience
- Education
- Contact details

Changes will hot-reload automatically!

## 🏗️ Step 5: Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## 📤 Step 6: Deploy to Vercel

### Option A: GitHub + Vercel (Recommended)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Import to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## ✅ That's It!

Your portfolio is now live! 🎉

## 📚 Next Steps

- Read `README.md` for detailed documentation
- Check `deployment-notes.md` for deployment details
- Review `PROJECT_STRUCTURE.md` to understand the codebase

## 🐛 Troubleshooting

**CV file not downloading?**
- Make sure the file exists at `public/assets/Ajmal-p-CV-01.pdf`
- Check the path in `src/data/profile-content.json`

**Build errors?**
- Run `npm install` again
- Check for TypeScript errors: `npm run build`

**Port already in use?**
- Change the port in `vite.config.ts` or kill the process using port 3000

---

Need help? Check the full documentation in `README.md`

