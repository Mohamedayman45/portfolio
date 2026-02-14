# Mohamed Ayman - Portfolio

A high-end, production-grade portfolio website showcasing my software engineering experience, architectural thinking, and business impact.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🏗️ Architecture

This portfolio is built with a focus on:

- **Reusable Components**: Modular UI component library
- **Centralized Configuration**: All content managed through constants
- **Type Safety**: Full TypeScript coverage
- **Performance**: Optimized images and lazy loading
- **SEO**: Comprehensive metadata and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Icon.tsx
│   │   │   └── AnimatedSection.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/           # Page sections
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── EngineeringSection.tsx
│   │       ├── GitHubSection.tsx
│   │       └── ContactSection.tsx
│   ├── config/
│   │   └── constants.ts        # Centralized content configuration
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   └── github-contributions.png
└── package.json
```

## 🎨 Design Philosophy

- **Dark Mode First**: Professional, modern dark theme
- **Subtle Animations**: Smooth transitions without distraction
- **Typography-Focused**: Clear hierarchy and readability
- **Confidence Through Clarity**: No flashy UI, just clean design

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint
npm run lint
```

### Environment

The site runs on `http://localhost:3000` in development mode.

## 📝 Content Management

All content is centralized in `src/config/constants.ts`. To update:

1. **Personal Information**: Update `PERSONAL_INFO`
2. **Experience**: Modify `EXPERIENCES` array
3. **Projects**: Edit `PROJECTS` array
4. **Tech Stack**: Update `TECH_STACK` object
5. **About Content**: Modify `ABOUT_CONTENT`

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Manual Deployment

```bash
npm run build
# Upload .next folder to your hosting provider
```

## 🎯 Key Features

### Content
- Architecture-focused project descriptions
- Business impact metrics
- Trade-off analysis
- PoC and benchmarking emphasis

### Technical Highlights
- Event-Driven Architecture case study
- Security engineering examples
- Performance optimization stories
- Domain Driven Design implementation

### Engineering Mindset Section
- Decision-making framework
- Proof-over-opinion approach
- Business-first thinking
- Security as engineering responsibility

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

## 🔧 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  background: { /* ... */ },
  foreground: { /* ... */ },
  primary: { /* ... */ },
  // ...
}
```

### Animations

Modify animation settings in `tailwind.config.ts` or component-level Framer Motion props.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

- **Email**: mohamed.aymanfa@gmail.com
- **LinkedIn**: [mohamedayman45](https://www.linkedin.com/in/mohamedayman45/)
- **GitHub**: [Mohamedayman45](https://github.com/Mohamedayman45)

---

Built with Next.js, TypeScript, and attention to detail.
