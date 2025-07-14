# Osadolor Osayande Poetry Website - Development Plan

## Project Overview

A minimalist black-themed poetry website showcasing Osadolor Osayande's work, featuring the Sande Prize for Nigerian Poetry, and promoting his published collections.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Typography:** Premium serif fonts for poetry, clean sans-serif for UI
- **Deployment:** Vercel (recommended for Next.js)

## Design System

### Color Palette (Dark/Light Mode)

**Dark Mode:**

- **Primary Black:** `#000000` (backgrounds)
- **Charcoal:** `#1a1a1a` (cards, sections)
- **Dark Gray:** `#2d2d2d` (borders, subtle elements)
- **White:** `#ffffff` (primary text)
- **Light Gray:** `#a3a3a3` (secondary text, metadata)

**Light Mode:**

- **Primary White:** `#ffffff` (backgrounds)
- **Light Gray:** `#f8f9fa` (cards, sections)
- **Border Gray:** `#e5e7eb` (borders, subtle elements)
- **Black:** `#000000` (primary text)
- **Dark Gray:** `#6b7280` (secondary text, metadata)

**Shared Accent Colors:**

- **Accent Primary:** `#d4af37` (highlights, CTA buttons) - Gold theme
- **Accent Secondary:** `#f4e4bc` (hover states, secondary accents) - Light gold
- **Accent Dark:** `#b8941f` (darker accent for enhanced contrast)

### Typography

- **Poetry/Quotes:** Playfair Display, Crimson Text, or similar serif
- **Body Text:** Inter, Helvetica, or system fonts
- **Headers:** Combination of both based on context

## Site Structure & Pages

### 1. Landing Page

**Purpose:** First impression, hero section with poet's image, navigation to key sections

**Components:**

- Hero section with poet's portrait (Image 2 style)
- Brief tagline about the poet
- Navigation to main sections
- Featured work or quote
- Call-to-action buttons (Books, Sande Prize)

### 2. About Page

**Purpose:** Detailed biography and poet's story

**Components:**

- Large portrait section (Image 1 style)
- Biography text (provided content)
- Awards and recognition
- Timeline of achievements
- Contact information

### 3. Sande Prize Page

**Purpose:** Complete information about the poetry prize

**Components:**

- Prize overview and mission
- Current year submissions (2025)
- Eligibility requirements
- Submission guidelines
- Judging panel
- Important dates timeline
- Previous winners (if applicable)
- Contact form/email

### 4. Books Page

**Purpose:** Showcase published collections

**Components:**

- "Thirty Photographs of God" section
- "My Accent is a Zebra" section
- Book covers, descriptions, themes
- Purchase links
- Reviews/testimonials
- Upcoming works

## Development Phases

### Phase 1: Project Setup & Foundation (Week 1)

1. **Initialize Next.js project**

   ```bash
   npx create-next-app@latest osadolor-poetry --typescript --tailwind --app
   ```

2. **Install dependencies**

   ```bash
   npm install @radix-ui/react-* lucide-react class-variance-authority
   npx shadcn-ui@latest init
   ```

3. **Setup shadcn components**

   - Button, Card, Typography, Navigation Menu
   - Dialog, Separator, Badge

4. **Configure Tailwind**

   - Custom color palette for dark/light modes
   - Typography plugin
   - Custom fonts setup
   - Dark mode configuration

5. **Setup Theme System**

   - Theme context provider
   - Theme toggle component
   - Local storage persistence
   - System preference detection

6. **Create base layout structure**
   - Header with navigation and theme toggle
   - Footer
   - Main layout wrapper with theme classes

### Phase 2: Core Components (Week 2)

1. **Reusable Components**

   - `<Hero />` - Landing page hero section with theme support
   - `<PoetryQuote />` - Styled quote component
   - `<BookCard />` - Book display component with theme variants
   - `<AwardBadge />` - Recognition display
   - `<PrizeTimeline />` - Important dates component
   - `<ThemeToggle />` - Dark/light mode switcher

2. **Navigation System**

   - Responsive header with theme toggle
   - Mobile menu with theme awareness
   - Active page indicators
   - Smooth theme transitions

3. **Typography System**
   - Poetry-specific text styles for both themes
   - Responsive typography scales
   - Custom heading components
   - Theme-aware contrast optimization

### Phase 3: Page Development (Week 3)

1. **Landing Page**

   - Hero section with poet image
   - Featured work section
   - Quick navigation cards
   - Smooth scrolling and animations

2. **About Page**

   - Biography layout
   - Awards section
   - Professional timeline
   - Contact information

3. **Books Page**
   - Book showcase cards
   - Detailed descriptions
   - Purchase integration
   - Review sections

### Phase 4: Sande Prize Section (Week 4)

1. **Prize Information**

   - Mission statement
   - Detailed guidelines
   - Submission process

2. **Interactive Elements**
   - Submission timeline
   - Judging panel cards
   - FAQ section
   - Contact form

### Phase 5: Polish & Optimization (Week 5)

1. **Performance**

   - Image optimization
   - Lazy loading
   - SEO optimization
   - Meta tags and OpenGraph

2. **Accessibility**

   - ARIA labels
   - Keyboard navigation
   - Screen reader optimization
   - Color contrast verification

3. **Mobile Responsiveness**
   - Touch-friendly interactions
   - Responsive images
   - Mobile menu optimization

## Key Features & Functionality

### Theme System

- **Automatic Detection**: System preference detection on first visit
- **Manual Toggle**: Smooth theme switching with animation
- **Persistence**: User preference saved in localStorage
- **Smooth Transitions**: CSS transitions for theme changes
- **Component Variants**: All components designed for both themes

### Interactive Elements

- Smooth scrolling between sections
- Theme-aware hover effects on cards and buttons
- Subtle animations for text reveals
- Image gallery with theme-appropriate overlays
- Responsive contact forms with theme styling

### Content Management

- Easy content updates for prize information
- Modular component structure
- Flexible layout system for future books

### SEO & Performance

- Static generation where possible
- Optimized images (WebP format)
- Structured data for books and awards
- Fast loading times
- Mobile-first approach

## Content Strategy

### Landing Page Copy

- Compelling tagline highlighting Nigerian poetry
- Brief introduction to poet's themes
- Clear navigation to key sections

### About Page Content

- Use provided biography
- Expand on writing process and inspiration
- Include high-quality images

### Books Section

- Detailed descriptions of each collection
- Thematic analysis
- Reader testimonials
- Purchase links (Amazon, local bookstores)

### Technical Considerations

### Theme Implementation

```typescript
// Theme Context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

// Tailwind Config
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          secondary: "hsl(var(--accent-secondary))",
        },
        // Add other semantic colors as needed
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
};

// CSS Variables in globals.css
:root {
  --accent: 43 74% 42%; /* #d4af37 converted to HSL */
  --accent-foreground: 0 0% 0%; /* Dark text on gold background */
  --accent-secondary: 45 67% 85%; /* #f4e4bc converted to HSL */
}

.dark {
  --accent: 43 74% 42%; /* Same gold works in dark mode */
  --accent-foreground: 0 0% 100%; /* White text on gold background */
  --accent-secondary: 43 60% 60%; /* Adjusted secondary for dark mode */
}
```

### File Structure

```
src/
├── app/
│   ├── (pages)/
│   │   ├── about/
│   │   ├── books/
│   │   ├── sande-prize/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   ├── sections/
│   ├── forms/
│   └── theme/
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
├── contexts/
│   └── theme-context.tsx
├── hooks/
│   └── use-theme.ts
├── lib/
│   └── utils.ts
└── public/
    ├── images/
    └── assets/
```

### Performance Targets

- Lighthouse score: 90+ across all metrics
- First Contentful Paint: < 2s
- Cumulative Layout Shift: < 0.1

## Launch Checklist

### Pre-Launch

- [ ] All content reviewed and approved
- [ ] Images optimized for both themes
- [ ] Forms tested and functional in both modes
- [ ] Mobile responsiveness verified
- [ ] SEO metadata complete
- [ ] Performance optimized
- [ ] Theme switching tested across all devices
- [ ] Color contrast verified for accessibility

### Post-Launch

- [ ] Analytics setup (Google Analytics)
- [ ] Search Console verification
- [ ] Social media integration
- [ ] Email newsletter signup
- [ ] Regular content updates planned

## Budget Considerations

### Development Tools

- Domain registration
- Hosting (Vercel free tier likely sufficient)
- Premium fonts (if needed)
- Image optimization tools

### Ongoing Costs

- Annual domain renewal
- Hosting (scales with traffic)
- Email service for contact forms
- Analytics tools (optional)

## Success Metrics

### Primary Goals

- Increased visibility for poet's work
- Sande Prize submissions and engagement
- Book sales and recognition
- Professional networking opportunities

### Measurable Outcomes

- Website traffic and engagement
- Sande Prize application rates
- Social media mentions
- Book purchase conversions

This plan provides a comprehensive roadmap for creating a professional, elegant poetry website that serves both as a portfolio and a platform for the Sande Prize initiative.
