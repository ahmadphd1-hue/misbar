# Task: Implement the Misbar storefront design in my Next.js project

## Reference
`misbar-design.html` (attached in the project root or /design) is the **single source of truth**.
Reproduce it **pixel-for-pixel**: same layout, spacing, colors, radii, shadows, font sizes, hover effects, and responsive behavior.
Do NOT redesign, "improve", simplify, or swap colors/fonts. If something is ambiguous, copy what the HTML does.

## My stack (keep it)
- Next.js (App Router) + TypeScript
- Tailwind CSS (the reference already uses Tailwind classes. Reuse the class names as they are)
- Sanity.io for products and categories
- Arabic RTL, Cairo font via `next/font/google`

## Setup
1. `app/layout.tsx`: `<html lang="ar" dir="rtl">`, load Cairo (weights 400, 600, 700, 800), apply via className on body.
2. `tailwind.config`: add colors `ink #111113`, `sub #6E6E73`, `fog #F5F5F7`, `line #E8E8ED`, `accent #0071E3`; fontFamily `cairo`.
3. `globals.css`: port the `<style>` block from the reference (`.scroll-x`, `.pc` hover, `.pimg` zoom, `.blink`), `color-scheme: light`, body background white, letter-spacing -0.01em.
4. Use logical properties only (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`), never `left/right`.

## Components (one file each in `components/`)
- `AnnouncementBar` (dark top strip)
- `Header` (logo, centered search pill, account + cart icons with count badge, scrollable category nav row; sticky, `backdrop-blur-xl`)
- `Hero` (rounded-[28px] fog banner, big headline, 2 CTAs, camera SVG with drop shadow, "مباشر · 4K" chip)
- `TrustStrip` (4 items)
- `CategoryRow` (6 tiles: horizontal scroll on mobile, 6-col grid on md+)
- `ProductTabs` + `ProductGrid` + `ProductCard` (2 cols mobile, 4 cols md+; client-side filter tabs; round "+" add-to-cart button; "شامل الضريبة" under price)
- `DualBanners` (dark + fog rounded-[28px] cards)
- `Footer` (fog background, 4 columns, copyright line)
- `icons.tsx`: port the `ic()` SVG icon function (cam, dome, dvr, hdd, net, int) as a React component `<CategoryIcon type size />`.

Use Server Components by default. Only `ProductTabs`, cart button and search need `"use client"`.

## Data (Sanity)
- Replace the hardcoded `items` array with a GROQ query. Fields: `brand`, `title`, `price`, `category`, `spec` (badge like 6MP/3K), `image`, `slug`.
- If `image` exists, render it with `next/image` (object-contain, inside the same `bg-fog aspect-[4/3]` box). Otherwise fall back to `<CategoryIcon>`.
- Cart: simple React context + localStorage; the badge shows the count and is hidden when 0.
- Product card links to `/product/[slug]`.

## Rules
- Mobile-first. Must match the reference at 390px, 768px and 1280px.
- Keep Arabic copy exactly as in the reference.
- Accessible: aria-labels on icon buttons, visible focus ring, alt text on images.
- No new dependencies unless unavoidable (ask first).

## Done when
1. Side by side with the reference HTML at all 3 widths, nothing differs visually.
2. No hydration warnings, no TypeScript errors, `next build` passes.
3. Products render from Sanity and the filter tabs work.

Work step by step: do setup first, then build the components in the order above, and show me the file list before you start.
