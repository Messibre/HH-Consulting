# HH Consulting Architects & Engineers

A modern, professional portfolio website for HH Consulting Architects & Engineers PLC - a leading architecture and engineering consulting firm based in Ethiopia with over 30 years of experience in design and construction supervision.

## Overview

This is a mobile-first, responsive portfolio website built with Next.js 16, featuring an innovative "architectural wall" UI design that showcases projects through an immersive building facade interface. The site supports both light and dark themes and includes smooth animations powered by Framer Motion.

## Features

### Core Features

- **Mobile-First Design** - Optimized for mobile viewing with responsive layouts
- **Dark/Light Theme** - System-aware theme switching with manual toggle
- **Smooth Animations** - Micro-interactions and page transitions using Framer Motion
- **Professional Portfolio** - Showcase of 30+ architectural and engineering projects

### Pages & Sections

- **Hero Landing** - Full-screen architectural imagery with company branding
- **Categories Wall** - Interactive building facade with project categories as architectural signage
- **Content Walls** - Split-screen project detail views with image and description panels
- **About Us** - Company history, timeline, and key statistics
- **Vision & Goals** - Mission statement, core values, and strategic objectives
- **Our Team** - Leadership profiles with expandable detail cards
- **Testimonials** - Client feedback carousel with ratings
- **Credentials** - Certifications, software tools, and design standards
- **Process** - Visual workflow timeline showing project phases
- **FAQ** - Organized accordion-style frequently asked questions
- **Contact** - Contact information, office locations, and inquiry form
- **Legal Pages** - Privacy Policy, Terms of Service, and Disclaimer

### Project Categories

- Site Works
- Presentations
- Potential Clients
- Building Designs
- Infrastructures
- Terminal Design
- Road Works
- Irrigations
- Bridge Design
- Feasibility Study

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Forms**: React Hook Form with Zod validation

## Project Structure

```
├── app/
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page with view routing
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── hero-section.tsx    # Landing hero
│   ├── categories-wall.tsx # Project categories display
│   ├── content-walls.tsx   # Project detail views
│   ├── sidebar-nav.tsx     # Navigation drawer
│   ├── about-section.tsx   # Company information
│   ├── vision-section.tsx  # Mission and goals
│   ├── staff-section.tsx   # Team profiles
│   ├── testimonials-section.tsx
│   ├── credentials-section.tsx
│   ├── process-section.tsx
│   ├── faq-section.tsx
│   ├── contact-section-new.tsx
│   ├── legal-section.tsx
│   ├── theme-toggle.tsx    # Dark/light mode switch
│   └── footer.tsx
├── public/
│   └── images/             # Project images and logo
├── hooks/                  # Custom React hooks
└── lib/                    # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/hh-consulting.git
cd hh-consulting
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Configuration

### Environment Variables

No environment variables are required for basic functionality. For analytics:

```env
# Optional: Vercel Analytics (automatically configured on Vercel)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
```

### Customization

#### Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme:

- Light mode colors in `:root`
- Dark mode colors in `.dark`

#### Content

- Update project data in `components/content-walls.tsx`
- Modify team information in `components/staff-section.tsx`
- Edit contact details in `components/contact-section-new.tsx`

#### Images

Replace images in `public/images/` with your own:

- `hh-logo.jpg` - Company logo
- `hero-building.jpg` - Hero background
- Project images (airport, bridge, hospital, etc.)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the production bundle:

```bash
pnpm build
```

The output will be in the `.next` folder, ready for deployment to any Node.js hosting platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Smooth 60fps animations
- Lighthouse score: 90+ on all metrics

## License

This project is proprietary software developed for HH Consulting Architects & Engineers PLC. All rights reserved.

## Contact

**HH Consulting Architects & Engineers PLC**

- **Address**: 22 Mazoriya, Efrata Building, 3rd Floor, Addis Ababa, Ethiopia
- **Phone**: +251 11 868 3830
- **Email**: hhconsultingarchitectengineers@gmail.com
