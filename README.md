# AfriHakim — AI-Powered Healthcare for Africa

A modern, premium, responsive landing page for AfriHakim, an AI-powered healthcare ecosystem connecting patients, doctors, hospitals, pharmacies, and labs across Africa.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** (scroll-triggered animations)
- **Lucide React** (icons)
- **Poppins** font (loaded via Google Fonts HTML link)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind v4 + base styles
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Main page assembling all sections
└── components/
    ├── Navbar.tsx          # Sticky glass-morphism nav
    ├── HeroSection.tsx     # Full-screen animated gradient hero
    ├── ProblemSection.tsx  # 4-card problem grid
    ├── SolutionSection.tsx # 6-feature solution grid
    ├── HowItWorksSection.tsx # 5-step process cards
    ├── MarketSection.tsx   # Market stats + expansion path
    ├── TractionSection.tsx # Milestone checklist
    ├── CTASection.tsx      # Full-width call-to-action
    └── Footer.tsx          # 3-column footer
```

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
