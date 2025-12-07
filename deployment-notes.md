# Deployment Notes

This document provides detailed instructions for deploying the portfolio website and managing content updates.

## 📋 Pre-Deployment Checklist

- [ ] CV file placed in `public/assets/Ajmal-p-CV-01.pdf`
- [ ] All content updated in `src/data/profile-content.json`
- [ ] SEO meta tags updated in `index.html` (if needed)
- [ ] Open Graph images prepared (optional but recommended)
- [ ] Contact form endpoint configured (if using backend)

## 📁 Hosting the CV File

### Local Development

1. **Place your CV file**:
   ```
   public/
   └── assets/
       └── Ajmal-p-CV-01.pdf
   ```

2. **Verify the path in `profile-content.json`**:
   ```json
   {
     "personal": {
       "cvPath": "/assets/Ajmal-p-CV-01.pdf"
     }
   }
   ```

3. **The file will be accessible at**: `http://localhost:3000/assets/Ajmal-p-CV-01.pdf`

### Production (Vercel)

Vercel automatically serves files from the `public/` directory as static assets.

**Important**:
- Files in `public/` are served at the root URL
- Path `/assets/Ajmal-p-CV-01.pdf` maps to `public/assets/Ajmal-p-CV-01.pdf`
- No additional configuration needed
- File size limit: 100MB (should be more than enough for a PDF)

### Alternative: External Hosting

If you prefer to host the CV externally:

1. Upload to a CDN (e.g., Cloudinary, AWS S3, or GitHub Releases)
2. Update `cvPath` in `profile-content.json`:
   ```json
   {
     "personal": {
       "cvPath": "https://your-cdn.com/cv.pdf"
     }
   }
   ```

## 📝 Updating Content

### Method 1: Edit JSON File (Recommended)

All content is in `src/data/profile-content.json`. Edit this file and rebuild:

1. **Edit `src/data/profile-content.json`**
2. **Test locally**: `npm run dev`
3. **Build**: `npm run build`
4. **Deploy**: Push to Git or redeploy on Vercel

### Method 2: Environment-Based Content

For dynamic content, you can:

1. **Create environment-specific JSON files**:
   ```
   src/data/
   ├── profile-content.json (default)
   ├── profile-content.prod.json
   └── profile-content.dev.json
   ```

2. **Use environment variables in Vite**:
   ```typescript
   // vite.config.ts
   export default defineConfig({
     define: {
       'import.meta.env.CONTENT_API': JSON.stringify(process.env.CONTENT_API)
     }
   })
   ```

### Content Structure

The `profile-content.json` file contains:

```json
{
  "personal": { /* Name, contact, location */ },
  "hero": { /* Hero section content */ },
  "about": { /* About section */ },
  "skills": { /* Technical skills and languages */ },
  "experience": [ /* Array of work experience */ ],
  "education": [ /* Array of education entries */ ],
  "contact": { /* Contact form labels */ },
  "seo": { /* SEO metadata */ }
}
```

## 🔄 Deployment Workflow

### Initial Deployment

1. **Prepare repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Deploy to Vercel**:
   - Import from GitHub
   - Auto-detects Vite configuration
   - Deploys automatically

### Updating Content and Redeploying

1. **Edit `profile-content.json`**
2. **Commit changes**:
   ```bash
   git add src/data/profile-content.json
   git commit -m "Update profile content"
   git push
   ```
3. **Vercel auto-deploys** (if GitHub integration enabled)
   - Or manually trigger: `vercel --prod`

### Manual Deployment

```bash
# Build locally
npm run build

# Deploy to Vercel
vercel --prod
```

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add your domain (e.g., `moajmalp.in`)

2. **DNS Configuration**:
   - Add CNAME record pointing to Vercel
   - Or add A records (Vercel provides IPs)

3. **SSL Certificate**:
   - Vercel automatically provisions SSL
   - Wait for DNS propagation (up to 48 hours)

## 🔧 Environment Variables

Currently, no environment variables are required. If you add:

- **Contact form backend**: Add API endpoint
- **Analytics**: Add tracking IDs
- **External services**: Add API keys

**To add in Vercel**:
1. Project Settings → Environment Variables
2. Add variable (e.g., `VITE_API_URL`)
3. Redeploy

## 📊 Performance Optimization

### Image Optimization

- Use WebP format for images
- Compress images before adding to `public/`
- Consider using Vercel's Image Optimization API

### Code Splitting

Already configured via Vite. Components are automatically code-split.

### Caching

Vercel automatically handles:
- Static asset caching
- CDN distribution
- Edge caching

## 🐛 Troubleshooting

### CV File Not Downloading

1. **Check file exists**: Verify `public/assets/Ajmal-p-CV-01.pdf`
2. **Check path**: Ensure path in JSON matches file location
3. **Check build**: Ensure file is included in build output
4. **Check CORS**: If hosting externally, ensure CORS headers are set

### Content Not Updating

1. **Clear cache**: Hard refresh (Ctrl+Shift+R)
2. **Check JSON syntax**: Validate JSON file
3. **Rebuild**: Run `npm run build` locally
4. **Check deployment**: Verify latest deployment on Vercel

### Build Errors

1. **TypeScript errors**: Run `npm run build` to see errors
2. **Missing dependencies**: Run `npm install`
3. **Path issues**: Check import paths are correct

## 📞 Support

For deployment issues:
- Check Vercel documentation: https://vercel.com/docs
- Check Vite documentation: https://vitejs.dev
- Review build logs in Vercel dashboard

## 🔐 Security Notes

- **Never commit sensitive data** to Git
- **Use environment variables** for API keys
- **Keep dependencies updated**: `npm audit`
- **Enable Vercel's security headers** (automatic)

## 📈 Analytics (Optional)

To add analytics:

1. **Google Analytics**:
   - Add script to `index.html`
   - Or use `react-ga4` package

2. **Vercel Analytics**:
   - Enable in Vercel dashboard
   - No code changes needed

---

**Last Updated**: 2024
**Maintained By**: Muhammed 

