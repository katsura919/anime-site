# Design Rules - Anime Landing Page

**Theme:** Demon Slayer (Kimetsu no Yaiba)  
**Project:** Anime Website Landing Page  
**Framework:** Next.js 16 + Tailwind CSS 4 + TypeScript + shadcn/ui  
**Design Style:** Modern, Minimal, Glassmorphism

---

## 🎨 Modern Design Principles

### Core Philosophy

- **Minimalist:** Clean interfaces with purposeful whitespace
- **Glassmorphism:** Frosted glass effects with backdrop blur
- **Subtle Animations:** Smooth micro-interactions without distraction
- **Component-Based:** Use shadcn/ui components for consistency
- **Accessibility First:** WCAG 2.1 AA compliance

### shadcn/ui Components

Always use shadcn components when available:

- `<Button>` - For all clickable actions
- `<Card>` - For content containers
- `<Badge>` - For labels and tags
- Custom variants allowed for theme consistency

---

## 🎨 Color Palette

### Primary Colors

- **Primary Red:** `#C8102E` (Demon Slayer signature crimson)
- **Deep Purple:** `#1A0B2E` (Dark background, night sky)
- **Accent Gold:** `#D4AF37` (Highlights, borders)
- **Pure Black:** `#0A0A0A` (Base background)
- **Off White:** `#F5F5F5` (Text on dark backgrounds)

### Secondary Colors

- **Teal Accent:** `#00C9A7` (Water breathing effect)
- **Fire Orange:** `#FF6B35` (Fire breathing effect)
- **Shadow Purple:** `#4A148C` (Gradient overlays)
- **Mist Gray:** `#B0BEC5` (Subtle text, borders)

### Gradients

```css
/* Hero Background */
background: linear-gradient(135deg, #1a0b2e 0%, #0a0a0a 50%, #4a148c 100%);

/* Card Hover */
background: linear-gradient(
  180deg,
  rgba(200, 16, 46, 0.1) 0%,
  rgba(74, 20, 140, 0.2) 100%
);

/* Text Glow */
text-shadow: 0 0 20px rgba(200, 16, 46, 0.5);
```

---

## 📝 Typography

### Font Families

- **Headings:** `'Cinzel', serif` or `'Playfair Display', serif` (Epic, dramatic)
- **Body:** `'Inter', sans-serif` or `Geist Sans` (Clean, modern)
- **Accent/Japanese:** `'Noto Sans JP', sans-serif` (Authenticity)

### Scale (Tailwind)

- **Hero Title:** `text-7xl md:text-8xl` (72px - 96px)
- **Section Heading:** `text-4xl md:text-5xl` (36px - 48px)
- **Card Title:** `text-2xl md:text-3xl` (24px - 30px)
- **Body:** `text-base md:text-lg` (16px - 18px)
- **Caption:** `text-sm` (14px)

### Font Weights

- Headings: `font-bold` (700)
- Subheadings: `font-semibold` (600)
- Body: `font-normal` (400)
- Light text: `font-light` (300)

---

## 🎬 Animation Guidelines

### Motion Principles

- **Duration:** 0.2s - 0.4s (fast, responsive, like streaming platforms)
- **Easing:** `ease-out` for entrances, `ease-in-out` for transitions
- **Minimal animations:** Only on hover and scroll, no auto-playing animations
- **Performance:** Prioritize 60fps, use `transform` and `opacity` only

### Framer Motion Variants

```typescript
// Fade In (simple)
fadeIn: {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
}

// Scale on Hover (cards)
cardHover: {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2, ease: "easeOut" }
}

// Slide In (content sections)
slideIn: {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
}
```

### Effects to Use

- **Hero:** Static or subtle parallax on scroll, no floating particles
- **Cards:** Scale (1.05) on hover, subtle glow effect
- **Carousel:** Smooth horizontal scroll with momentum
- **Navigation:** Fixed top nav with subtle shadow on scroll
- **Buttons:** Slight scale (1.02) and brightness increase on hover
- **Badges:** Static "NEW" badges with gradient backgrounds
- **Images:** Lazy load with fade-in effect

### Effects to AVOID

- Floating particles/elements
- Auto-playing animations
- Aggressive scaling (> 1.1)
- Rotation effects
- Complex 3D transforms
- Glassmorphism/backdrop blur (performance cost)

---

## 🧩 Component Structure

### Page Layout

```
app/
  ├── components/
  │   ├── Hero.tsx          // Large hero banner with anime artwork
  │   ├── Navigation.tsx    // Fixed top nav with search
  │   ├── ContentRow.tsx    // Horizontal scrolling content row
  │   ├── ContentCard.tsx   // Individual anime card
  │   ├── FeaturedSection.tsx // "Films of the Day" section
  │   ├── PopularSection.tsx  // "Popular Series" section
  │   ├── NewReleases.tsx     // "New Films" grid section
  │   ├── Footer.tsx        // Footer with links
  │   └── ui/              // DO NOT EDIT - shadcn managed
components/
  └── ui/                  // shadcn/ui components (auto-generated)
      ├── button.tsx       // shadcn Button
      ├── card.tsx         // shadcn Card
      └── badge.tsx        // shadcn Badge
```

### Component Patterns

**ContentCard Pattern:**

```tsx
- Poster image (16:9 or 3:4 aspect ratio)
- "NEW" badge (if applicable) - top right corner
- Title overlay at bottom
- Hover: Scale(1.05) + glow effect
- Click: Navigate to content page
```

**ContentRow Pattern:**

```tsx
- Section title (left aligned)
- Horizontal scroll container
- 5-6 cards visible at once
- Arrow navigation (left/right)
- Snap scroll behavior
```

**Hero Pattern:**

```tsx
- Full-width background image
- Dark gradient overlay for text readability
- Large anime title
- 2-3 metadata badges (Genre, Episodes, etc.)
- Description text (2-3 lines max)
- 2 CTA buttons (Watch Now, Read Description)
- Carousel dots indicator (if multiple heroes)
```

---

## 🖼️ Image Strategy

### Sources

1. **Unsplash API** (free, requires attribution)

   - Search terms: "anime", "japanese art", "samurai", "fantasy"
   - API: `https://api.unsplash.com/search/photos?query=anime`

2. **Pexels API** (free, no attribution required)

- Max width: `1920px` (full width on large screens)
- Padding: `px-4 md:px-8 lg:px-16` (less padding, more content)

### Section Spacing

- Between sections: `py-8 md:py-12` (tighter spacing)
- Within sections: `gap-4 md:gap-6` (compact)
- Section titles: `mb-4` (minimal gap)

### Grid Systems

- **Hero Carousel:** Full width, auto-height based on image
- **Content Rows:** Horizontal scroll, no grid
- **New Releases Grid:**
  - Desktop: 6 columns (1/6 each)
  - Tablet: 3 columns (1/3 each)
  - Mobile: 2 columns (1/2 each)
- **Gap:** `gap-3 md:gap-4` (tight, maximizes visible content)

### Card Dimensions

- **Poster Cards (Portrait):** Aspect ratio 2:3 (e.g., 200x300px)
- **Landscape Cards:** Aspect ratio 16:9 (e.g., 320x180px)
- **Square Cards:** 1:1 for character/profile images

---

## 🖼️ Image Strategy

### Sources

1. **Placeholder Images** (for development)

   - Use consistent aspect ratios
   - Dark/themed placeholders

2. **Production Images**
   - Official anime artwork
   - High-quality posters and screenshots
   - Store in `public/images/anime/`

### Image Specifications

- **Hero Background:** 1920x1080px (16:9), WebP format
- **Poster Cards:** 400x600px (2:3 portrait), WebP
- **Landscape Thumbnails:** 640x360px (16:9), WebP
- **Lazy Loading:** Use Next.js `<Image>` with blur placeholders

### Optimization

- Max file size: 150KB per image
- Use `blur` data URLs for smooth loading
- Implement responsive `srcSet` for different screen sizes
- Lazy load below-the-fold content

---

## 🎯 Interactive Elements

### Buttons (shadcn)

```tsx
import { Button } from "@/components/ui/button";

// Primary CTA (Orange)
<Button
  className="bg-[#F59E0B] hover:bg-[#FCD34D] text-black font-semibold px-6 py-3 rounded-md transition-colors duration-200"
>
  WATCH NOW
</Button>

// Secondary (Outline)
<Button
  variant="outline"
  className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-md transition-colors duration-200"
>
  READ DESCRIPTION
</Button>

// Small button (navigation arrows)
<Button
  size="icon"
  className="bg-[#F59E0B] hover:bg-[#FCD34D] text-black rounded-md"
>
  <ArrowRight />
</Button>
```

### Cards (Content Cards)

```tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

<Card className="relative bg-[#1A1A1A] border-none overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
  {/* NEW Badge */}
  <Badge className="absolute top-2 right-2 bg-linear-to-r from-[#F59E0B] to-[#FCD34D] text-black font-bold z-10">
    NEW
  </Badge>

  {/* Poster Image */}
  <Image src="..." className="w-full h-auto" />

  {/* Title Overlay */}
  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-3">
    <h3 className="text-white text-sm font-semibold line-clamp-1">
      Anime Title
    </h3>
  </div>
</Card>;
```

### Navigation

```tsx
// Fixed top navigation
<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-white/10">
  <div className="max-w-480 mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
    {/* Logo */}
    {/* Nav Links */}
    {/* Search Bar */}
    {/* User Menu */}
  </div>
</nav>
```

### Badges (NEW/Featured)

```tsx
import { Badge } from "@/components/ui/badge";

// NEW badge
<Badge className="bg-linear-to-r from-[#F59E0B] to-[#FCD34D] text-black text-xs font-bold uppercase px-2 py-1">
  NEW
</Badge>

// Genre badge
<Badge variant="outline" className="border-white/30 text-white text-xs">
  Action
</Badge>
```

### Carousel Navigation

- Orange circular buttons with arrows
- Positioned on left/right edges (absolute)
- Visible on hover or always on mobile
- Size: `w-10 h-10` with icon centered

---

## 🚀 Performance Rules

1. **Images:** Always use Next.js `<Image>` component with priority for hero
2. **Animations:** Use CSS transforms only (`translateX`, `scale`), avoid layout shifts
3. **Lazy Load:** Load content below fold on scroll or intersection
4. **Minimize Renders:** Use React.memo for card components
5. **No Backdrop Blur:** Avoid backdrop-filter for performance

---

## 📱 Responsive Breakpoints

- **Mobile:** `< 640px` (sm) - Stack content, 2 columns max
- **Tablet:** `640px - 1024px` (md, lg) - 3-4 columns
- **Desktop:** `> 1024px` (xl, 2xl) - 5-6 columns, full layout

### Mobile-First Approach

Always design for mobile first, then enhance for larger screens.

---

## ✅ Consistency Checklist

- [ ] All colors from defined palette (black/orange theme)
- [ ] Typography scale consistent (Inter font family)
- [ ] Animation durations 0.2s - 0.4s only
- [ ] Images optimized (WebP, < 150KB)
- [ ] Hover states on all interactive elements
- [ ] Proper spacing (compact, streaming platform style)
- [ ] Accessibility: Alt text, ARIA labels, keyboard navigation
- [ ] shadcn components used for buttons, cards, badges
- [ ] "NEW" badges on featured content
- [ ] Orange accent color for all CTAs

---

**Last Updated:** January 9, 2026  
**Version:** 2.0 (Streaming Platform Redesign)

- Visible on hover or always on mobile
- Size: `w-10 h-10` with icon centered

---

- Smooth scroll: `scroll-behavior: smooth`

---

## 🚀 Performance Rules

1. **Images:** Always use Next.js `<Image>` component
2. **Animations:** Use `will-change` sparingly, prefer `transform` and `opacity`
3. **Lazy Load:** Load below-fold content on scroll
4. **Code Split:** Dynamic imports for heavy components (carousel libraries)
5. **Prefetch:** Prefetch critical images in `<link rel="preload">`

---

## 📱 Responsive Breakpoints

- **Mobile:** `< 640px` (sm)
- **Tablet:** `640px - 1024px` (md, lg)
- **Desktop:** `> 1024px` (xl, 2xl)

### Mobile-First Approach

Always design for mobile first, then enhance for larger screens.

---

## ✅ Consistency Checklist

- [ ] All colors from defined palette
- [ ] Typography scale consistent across components
- [ ] Animation durations between 0.3s - 0.8s
- [ ] Images optimized (WebP, < 200KB)
- [ ] Hover states on all interactive elements
- [ ] Proper spacing using Tailwind scale
- [ ] Accessibility: Alt text, ARIA labels, keyboard navigation
- [ ] Dark mode support (optional enhancement)

---

**Last Updated:** January 9, 2026  
**Version:** 1.0
