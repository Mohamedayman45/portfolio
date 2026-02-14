# Quick Start Guide

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- All development dependencies

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Overview

### ✅ What's Included

**Reusable Components:**
- `Button` - Multiple variants (primary, secondary, outline, ghost)
- `Card` - With header, title, and content subcomponents
- `Section` - Page section wrapper with consistent spacing
- `Badge` - Tag/label component with variants
- `Icon` - Centralized icon system using Lucide
- `AnimatedSection` - Framer Motion wrapper for scroll animations

**Page Sections:**
- **Hero** - Introduction with CTA buttons
- **About** - Senior-level bio, education, and tech stack
- **Experience** - LightByte and Lviv Solutions work history
- **Projects** - 3 detailed case studies (SalonQ, Messaging Architecture, Security)
- **Engineering Mindset** - Decision-making framework
- **GitHub Activity** - Contributions visualization
- **Contact** - Multiple contact methods

**Features:**
- ✅ Fully responsive design
- ✅ Dark mode optimized
- ✅ Smooth scroll animations
- ✅ SEO optimized with metadata
- ✅ TypeScript throughout
- ✅ Centralized content management
- ✅ Production-ready structure

## Customization

### Update Personal Information

Edit `src/config/constants.ts`:

```typescript
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Your Name',
  email: 'your.email@example.com',
  // ... update all fields
};
```

### Add/Edit Projects

In `src/config/constants.ts`, modify the `PROJECTS` array:

```typescript
export const PROJECTS: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    category: 'Category',
    description: '...',
    // ... add your project details
  },
];
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: {
    DEFAULT: '#0a0a0a', // Change this
    // ...
  },
}
```

### Add New Section

1. Create component in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add navigation link in `src/config/constants.ts` (`NAV_ITEMS`)

## File Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout + SEO
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable components
│   │   ├── layout/             # Header & Footer
│   │   └── sections/           # Page sections
│   ├── config/
│   │   └── constants.ts        # All content here!
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   └── lib/
│       └── utils.ts            # Helper functions
├── public/
│   └── github-contributions.png
└── Configuration files
```

## Common Tasks

### Update Experience

```typescript
// src/config/constants.ts
export const EXPERIENCES: Experience[] = [
  {
    company: 'Company Name',
    role: 'Your Role',
    projects: ['Project 1', 'Project 2'],
    responsibilities: ['Responsibility 1', 'Responsibility 2'],
    technologies: ['Tech 1', 'Tech 2'],
  },
];
```

### Update Tech Stack

```typescript
// src/config/constants.ts
export const TECH_STACK: TechStack = {
  backend: ['Node.js', 'Go'],
  frontend: ['React', 'Next.js'],
  // ... update as needed
};
```

### Change About Content

```typescript
// src/config/constants.ts
export const ABOUT_CONTENT = {
  headline: 'Your Title',
  subheadline: 'Your Subtitle',
  introduction: 'Your intro...',
  paragraphs: [
    'Paragraph 1...',
    'Paragraph 2...',
  ],
};
```

## Deployment

### Quick Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

See `DEPLOYMENT.md` for detailed deployment instructions.

## Troubleshooting

### TypeScript Errors
The lint errors you see are expected until you run `npm install`. They will resolve after installing dependencies.

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run dev server: `npm run dev`
3. ✅ Update content in `src/config/constants.ts`
4. ✅ Replace `public/github-contributions.png` with your actual image
5. ✅ Test all links and navigation
6. ✅ Build and deploy: `npm run build`

## Support

For questions or issues:
- Email: mohamed.aymanfa@gmail.com
- GitHub: [@Mohamedayman45](https://github.com/Mohamedayman45)

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**
