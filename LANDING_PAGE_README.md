# Anesthesia Scheduler - Modern Landing Page

## Overview
A completely redesigned, modern landing page for the Anesthesia Scheduler application, built from scratch using Next.js 14, TailwindCSS, and Framer Motion animations.

## 🎨 Design Features

### Color Scheme
- **Primary Purple**: `hsl(259 85% 60%)` - Used throughout for branding consistency with the client's slides
- Clean white backgrounds with subtle purple gradients
- Modern card-based layouts with soft shadows

### Typography & Layout
- Bold, modern headings with purple gradient text highlights
- Clean, readable body text
- Generous white space for a premium feel
- Fully responsive grid layouts

## 📱 Landing Page Sections

### 1. **Sticky Navigation Bar**
- Modern logo with gradient purple background
- Navigation links: Home, Features, Pricing, Support
- "Log In" and "Get Started" CTAs
- Mobile-responsive hamburger menu
- Smooth scroll-to-section functionality

### 2. **Hero Section**
```
- Main headline with purple gradient "Anesthesia Scheduler"
- Compelling description of the application
- Two prominent CTAs: "Get Started" and "Learn More"
- Stats showcase: 100+ Practices, 24/7 Support, 99% Uptime
- Three feature preview cards (Smart Scheduling, Multi-Location, Real-Time Updates)
- Animated entrance effects
- Decorative background gradients
```

### 3. **Features Section (Accordion)**
Seven expandable feature items with icons:
- 📍 Managing Multiple Locations
- 📄 Privileges Tailored to Each Group
- 📊 Reporting
- 📅 Provider Self-Scheduling
- 🤖 Auto-Scheduling
- 🔔 Reminders & Messaging
- 📱 Mobile App

Each accordion item has:
- Purple icon in a light background circle
- Expandable content with detailed descriptions
- Smooth animations on expand/collapse
- Purple background highlight when open

### 4. **Who Is It For Section**
Three audience cards with icons:
- 👤 Sole Practitioners
- 🏢 One Location w/ Multiple Groups
- 📍 Multiple Locations w/ Multiple Groups

Features:
- Hover effects with shadow and lift
- "Fully Supported" badge with checkmark
- Purple gradient CTA banner: "Not sure which solution fits your practice?"

### 5. **Pricing Section**
Three pricing tiers displayed as cards:
- **Starter**: For small practices
- **Professional**: Most popular (highlighted with purple border and scale effect)
- **Enterprise**: For large operations

Each card includes:
- Custom pricing (contact for details)
- Feature list with purple checkmarks
- "Get Started" CTA button
- Clean, modern card design

### 6. **Support & Training Section**
Two-column layout:
- **Left**: Support information with resource grid
  - Admin Manual
  - User Manual
  - Video Tutorials
  - Training Sessions

- **Right**: FAQ items and contact CTA
  - Three expandable FAQ items
  - Purple gradient contact card with email: info@anesthesiascheduler.com

### 7. **Footer**
Four-column layout:
- Company info with logo
- Quick Links (Home, Features, Pricing, Support)
- Resources (Manuals, Tutorials, FAQs)
- Contact information with icons

## 🎬 Animations

All sections use Framer Motion for smooth, professional animations:
- Fade-in effects on scroll
- Staggered children animations
- Hover states with scale and shadow effects
- Smooth accordion expand/collapse
- Button hover effects

## 🛠 Technical Stack

### Core Technologies
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe code
- **TailwindCSS**: Utility-first styling
- **Framer Motion**: Advanced animations
- **Radix UI**: Accessible accordion components
- **Lucide React**: Modern icon library

### Key Files Created
```
src/templates/
├── AnesthesiaNavbar.tsx
├── AnesthesiaHero.tsx
├── AnesthesiaFeatures.tsx
├── AnesthesiaWhoFor.tsx
├── AnesthesiaPricing.tsx
├── AnesthesiaSupport.tsx
└── AnesthesiaFooter.tsx

src/app/[locale]/(unauth)/page.tsx - Main landing page
src/styles/global.css - Purple theme configuration
```

## 🚀 Getting Started

### Running the Development Server
```bash
npm run dev
```
The application runs on `http://localhost:3000`

### Building for Production
```bash
npm run build
npm start
```

## 📋 Content Updates

All content is directly embedded in the components. To update:

1. **Text Content**: Edit the respective component files
2. **Colors**: Modify `src/styles/global.css` for theme colors
3. **Features**: Update the `features` array in `AnesthesiaFeatures.tsx`
4. **Pricing**: Update the `packages` array in `AnesthesiaPricing.tsx`

## 🎯 Key Improvements Over Old Design

1. **Modern Visual Design**: Clean, contemporary look vs. outdated 2000s style
2. **Mobile Responsive**: Fully responsive design that works on all devices
3. **Smooth Animations**: Professional entrance and interaction animations
4. **Better UX**: Clear navigation, prominent CTAs, easy-to-scan content
5. **Brand Consistency**: Purple theme matches company branding
6. **Interactive Elements**: Accordion features, hover effects, smooth scrolling
7. **Professional Typography**: Modern fonts and hierarchy
8. **Optimized Performance**: Built with Next.js 14 for fast loading

## 📸 Screenshots

The landing page includes:
- Full-width hero with gradient backgrounds
- Modern card-based layouts
- Expandable accordion features
- Three-tier pricing cards
- Contact forms with icons
- Comprehensive footer

## 🔧 Future Enhancements

Potential additions for future versions:
- Contact form integration
- Testimonials section
- Video demonstrations
- Live chat integration
- Multi-language support (internationalization already configured)
- Dark mode toggle
- Blog integration
- Case studies section

## 📞 Contact Information

**Email**: info@anesthesiascheduler.com
**Support**: Comprehensive training and 24/7 support included

---

Built with ❤️ using modern web technologies
