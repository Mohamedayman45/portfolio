# Deployment Guide

## Quick Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Other Deployment Options

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Drag and drop the `.next` folder
   - Or use Netlify CLI:
     ```bash
     npm i -g netlify-cli
     netlify deploy --prod
     ```

### Docker

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Static Export (Optional)

If you want to deploy as static HTML:

1. Update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy the `out` folder to any static host (GitHub Pages, S3, etc.)

## Environment Variables

This project doesn't require environment variables. All configuration is in `src/config/constants.ts`.

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Cloudflare
1. Add your domain to Cloudflare
2. Point A record to your hosting provider
3. Enable SSL/TLS

## Performance Optimization

Before deploying:

1. **Optimize Images**
   - Compress images using tools like TinyPNG
   - Use WebP format when possible

2. **Check Bundle Size**
   ```bash
   npm run build
   # Check .next/static for bundle sizes
   ```

3. **Test Performance**
   - Run Lighthouse audit
   - Test on slow 3G connection
   - Check mobile performance

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form/email links work
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify GitHub contributions image loads
- [ ] Check all external links (LinkedIn, GitHub, CV)
- [ ] Run Lighthouse audit
- [ ] Test SEO with Google Search Console
- [ ] Verify Open Graph tags (share on social media)
- [ ] Check loading performance
- [ ] Test accessibility with screen reader

## Monitoring

### Analytics (Optional)

Add Google Analytics or Vercel Analytics:

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Clear `.next` folder and rebuild
- Run `npm ci` to reinstall dependencies

### Images Not Loading
- Ensure images are in `public` folder
- Check image paths are correct
- Verify Next.js image optimization settings

### Styling Issues
- Clear browser cache
- Check Tailwind CSS is properly configured
- Verify PostCSS is installed

## Updates

To update content:
1. Edit `src/config/constants.ts`
2. Commit and push changes
3. Vercel will auto-deploy (if using GitHub integration)

---

For issues, contact: mohamed.aymanfa@gmail.com
