# Clarityflow

A production-ready Next.js 14 SaaS landing page and dashboard for a product analytics platform. This is a **demonstration project** showcasing modern web development practices, premium UI/UX, and performance optimization.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Project Overview

Clarityflow is a fictional product analytics platform that demonstrates:

- **Premium UI/UX**: Polished, modern design with smooth animations
- **Full-stack architecture**: Next.js App Router with TypeScript
- **Performance**: Optimized for Core Web Vitals (Lighthouse ≥90)
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Production-ready**: Complete CI/CD, analytics, and deployment setup

## ✨ Features

### Pages

- **Home (/)**: Hero, features, social proof, how it works, pricing teaser
- **Features (/features)**: Detailed feature descriptions with interactive demo
- **Pricing (/pricing)**: Three-tier pricing with monthly/annual toggle and FAQ
- **Dashboard (/dashboard)**: Static mock dashboard with real-time data simulation
- **Book (/book)**: Demo booking form with validation

### Tech Stack

#### Core

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design tokens
- **Fonts**: Inter (variable) from Google Fonts

#### Animation & 3D

- **UI Animations**: Framer Motion
- **Timeline Animations**: GSAP
- **3D Elements**: React Three Fiber (R3F) + Drei _(lightweight, desktop-only)_

#### State & Data

- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form

#### UI Components

- **Primitives**: Headless UI (accessible menus, dialogs)
- **Icons**: Lucide React

#### Analytics & SEO

- **Analytics**: Google Analytics 4 + Plausible (toggle)
- **SEO**: Dynamic meta tags, sitemap, robots.txt
- **Structured Data**: Organization + WebSite schema

#### Development

- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or later
- **npm**: 9.x or later

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd clarityflow
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

   _Note: `--legacy-peer-deps` is needed for React Three Fiber compatibility._

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local`:

   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX        # Optional: Google Analytics ID
   NEXT_PUBLIC_PLAUSIBLE=0               # Set to 1 to enable Plausible
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

| Script                 | Description                           |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Start development server on port 3000 |
| `npm run build`        | Create production build               |
| `npm run start`        | Start production server               |
| `npm run lint`         | Run ESLint                            |
| `npm run format`       | Format code with Prettier             |
| `npm run format:check` | Check code formatting                 |
| `npm run type-check`   | Run TypeScript type checking          |

## 🏗️ Project Structure

```
clarityflow/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD
├── public/
│   ├── dashboard.json          # Mock dashboard data
│   └── robots.txt
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── book/
│   │   ├── dashboard/
│   │   ├── features/
│   │   ├── pricing/
│   │   ├── layout.tsx          # Root layout with navigation
│   │   ├── page.tsx            # Home page
│   │   ├── providers.tsx       # TanStack Query provider
│   │   └── sitemap.ts          # Dynamic sitemap
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── DashboardMock.tsx   # Dashboard visualization
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx            # Animated hero section
│   │   ├── InsightCard.tsx     # AI insight card component
│   │   └── Navigation.tsx
│   ├── data/
│   │   └── dashboard.json      # Mock data
│   ├── hooks/
│   │   └── useCursorParallax.ts # Parallax mouse effect
│   ├── lib/
│   │   ├── analytics.ts        # GA4 + Plausible integration
│   │   ├── fetcher.ts          # Data fetching utilities
│   │   └── utils.ts            # Helper functions
│   ├── store/
│   │   └── uiStore.ts          # Zustand state management
│   └── styles/
│       ├── globals.css         # Global styles
│       └── tokens.css          # Design tokens (CSS variables)
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json                 # Vercel deployment config
```

## 🎨 Design System

### Colors

- **Primary**: Indigo (`#2563eb`)
- **Accent**: Violet (`#7c3aed`)
- **Success**: Emerald (`#10b981`)
- **Neutrals**: Gray scale from 50 to 900

### Typography

- **Font**: Inter (variable weight)
- **Headings**: Bold, tight tracking
- **Body**: 400/600 weights

### Spacing

- **Base unit**: 4px
- **Scale**: Tailwind's default spacing scale

### Components

- **Buttons**: Rounded (`8px`), active scale effect
- **Cards**: Rounded (`16px`), soft shadows
- **Radius**: Small (4px), Medium (8px), Large (16px)

## 🎬 Animations

### GSAP Timeline (Hero)

```javascript
// Hero entrance animation
timeline
  .from('.hero-heading > span', { y: 24, opacity: 0, stagger: 0.06, duration: 0.48 })
  .from('.hero-sub', { y: 12, opacity: 0, duration: 0.36 }, '-=0.28')
  .from('.dashboard-mock', { x: 60, opacity: 0, scale: 0.98, duration: 0.7 }, '-=0.42');
```

### Framer Motion

- **Scroll animations**: `whileInView` for on-scroll reveals
- **Hover effects**: Scale and shadow transitions
- **Page transitions**: Fade + slide combinations

### Accessibility

- **Reduced motion**: All animations respect `prefers-reduced-motion: reduce`
- **R3F fallback**: 3D elements disabled on mobile and reduced motion

## 📊 Mock Data

Dashboard data is served from `/public/dashboard.json` with simulated 1-second latency via TanStack Query. Includes:

- **Metrics**: Active users, conversion rate, drop-off percentage
- **Funnel steps**: 5-step conversion funnel with drop-off rates
- **AI insights**: 3 prioritized insight cards with recommendations

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration

3. **Set environment variables**
   - Add `NEXT_PUBLIC_GA_ID` (optional)
   - Add `NEXT_PUBLIC_PLAUSIBLE` (optional)

4. **Deploy**
   - Vercel builds and deploys automatically on push to `main`

### Other Platforms

The app can be deployed to any platform supporting Next.js:

- **Netlify**: Use the `netlify.toml` adapter
- **AWS Amplify**: Use the Next.js preset
- **Docker**: Build with the official Next.js Docker image

## 🧪 Testing & Quality

### Lighthouse Targets

- **Performance**: ≥90
- **Accessibility**: ≥90
- **Best Practices**: ≥90
- **SEO**: 100

### Accessibility (WCAG AA)

- ✅ Semantic HTML
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast ratios
- ✅ Screen reader support

## 🔐 Security

- **No secrets in code**: Use environment variables
- **CSP headers**: Configure in `next.config.mjs` (if needed)
- **Form validation**: Client-side with React Hook Form
- **XSS protection**: React's built-in escaping

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

This is a demonstration project. Feel free to:

- Fork and customize for your own projects
- Report issues or suggest improvements
- Use as a learning resource

## 📞 Support

For questions or feedback:

- **GitHub Issues**: [Create an issue](<repository-url>/issues)
- **Email**: support@clarityflow.example.com (demo)

---

**Demo Notice**: This is a demonstration project. All features, data, and functionality are for showcase purposes only.

Built with ❤️ using Next.js 14, TypeScript, and modern web technologies.
