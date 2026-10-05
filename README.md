# Core Club

**Built From The Core.**

A responsive marketing and membership pre-booking website for Core Club, a performance-focused gym in D Ground, Faisalabad, Pakistan. The site introduces the club's training spaces, facilities, coaching, membership options, and women's hours, with WhatsApp flows for enquiries and payment confirmation.

[Website](https://coreclub.pk) · [Repository](https://github.com/hashhaam/core-club)

## Contents

- [Overview](#overview)
- [Features](#features)
- [Technology](#technology)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Pages and navigation](#pages-and-navigation)
- [Project structure](#project-structure)
- [Content and customization](#content-and-customization)
- [Forms and payment workflow](#forms-and-payment-workflow)
- [Deployment](#deployment)
- [Current implementation notes](#current-implementation-notes)
- [Contributing](#contributing)
- [License](#license)

## Overview

Core Club combines a dark visual identity, expressive typography, and restrained red and gold accents with a modular Next.js implementation. Club information is maintained in typed content files, while reusable components handle page sections, navigation, form interactions, and motion.

The current experience promotes founding memberships and guides visitors from exploring the club to choosing a plan and contacting the team for manual payment verification.

## Features

- **Club presentation:** Full-screen hero, facility statistics, equipment showcase, and dedicated sections for coaching, physiotherapy, and location information.
- **Training spaces:** Six illustrated zones covering free weights, machines, functional training, cardio, yoga, and recovery.
- **Facilities and amenities:** Grouped information for nutrition, wellness, classes, lockers, and club services.
- **Membership comparison:** Regular and founding rates for one-, three-, six-, and twelve-month plans, including registration-fee information.
- **Pre-booking flow:** Validated member details, plan selection, payment instructions, copyable bank details, and a prepared WhatsApp confirmation message.
- **Contact experience:** Enquiry form, telephone and WhatsApp links, social profiles, Google Maps embed, and directions.
- **Responsive navigation:** Fixed header, desktop links, mobile menu, and a back-to-top control.
- **Motion:** Scroll-triggered reveals and a canvas-based dumbbell sequence using 32 WebP frames, with a static-image fallback.
- **Accessibility support:** Skip-to-content link, visible focus styles, labelled forms, inline validation, focus management, and reduced-motion handling.
- **Page metadata and analytics:** Canonical URLs, page titles and descriptions, application icons, and Vercel Analytics integration.

## Technology

Versions below reflect the dependencies declared in `package.json`.

| Technology | Version | Purpose |
| --- | --- | --- |
| Next.js | 16.3.1 | App Router, rendering, routing, metadata, and image optimization |
| React / React DOM | 19.2.8 | Components and interactive interfaces |
| TypeScript | 5.9.3 | Strict typing for components and content |
| Tailwind CSS | 4.3.3 | Utility styling and CSS-based theme tokens |
| Framer Motion | 13.1.0 | Viewport reveal animations |
| Vercel Analytics | 2.0.1 | Website analytics integration |
| ESLint | 9.39.5 | Next.js and TypeScript linting |
| pnpm | 10.33.0 | Package management and dependency lockfile |

Archivo and Inter are configured through `next/font/google`. Lenis is also declared as a dependency; the current application does not initialize it.

## Getting started

### Prerequisites

- Node.js **20.9.0 or later**, as required by the installed Next.js version.
- **pnpm 10.33.0**, matching the repository's `packageManager` field.
- Git.

### Installation

```bash
git clone https://github.com/hashhaam/core-club.git
cd core-club
pnpm install --frozen-lockfile
```

### Local development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is occupied, use the URL printed by the development server.

The current application requires no environment variables, database setup, or backend credentials. Business information is configured in `content/`. Dependency installation and Google font retrieval during a build require network access.

### Production build

```bash
pnpm build
pnpm start
```

`pnpm start` serves the production build after `pnpm build` completes.

## Available commands

| Command | Action |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Create a production build using `next build --webpack` |
| `pnpm start` | Serve the production build using `next start` |
| `pnpm lint` | Run ESLint |
| `pnpm exec tsc --noEmit` | Run the TypeScript compiler for type checking |

There is currently no automated test suite or `test` script. Run linting separately from the production build.

## Pages and navigation

| Route | Description |
| --- | --- |
| `/` | Club overview, training zones, facilities, equipment, coaching, memberships, women's hours, and location |
| `/pre-register` | Two-step founding-member pre-booking and payment-confirmation flow |
| `/contact` | Contact information, enquiry form, opening hours, social links, and map |

Homepage sections use anchor links such as `/#strength-floor`, `/#facilities`, `/#coaching`, `/#membership`, `/#womens-hours`, and `/#the-club`.

The shared root layout provides navigation, footer, analytics, and global interface elements. Custom loading, error, and not-found views are defined in `app/`.

## Project structure

```text
core-club/
├── app/
│   ├── contact/page.tsx          # Contact page
│   ├── pre-register/page.tsx     # Membership pre-booking page
│   ├── page.tsx                  # Homepage section composition
│   ├── layout.tsx                # Shared layout and metadata
│   ├── fonts.ts                  # Archivo and Inter configuration
│   ├── globals.css               # Theme, typography, layout, and motion styles
│   ├── error.tsx                 # Error recovery view
│   ├── loading.tsx               # Loading state
│   └── not-found.tsx             # 404 view
├── components/
│   ├── contact/                  # Enquiry form
│   ├── layout/                   # Navigation, footer, social icons, and depth rail
│   ├── motion/                   # Reusable reveal animation
│   ├── pre-register/             # Pre-booking form and payment instructions
│   ├── sections/                 # Homepage content sections
│   └── ui/                       # Buttons, cards, and back-to-top control
├── content/                      # Typed business content and verification flags
├── public/
│   ├── dumbbell/frames/          # 32-frame equipment animation
│   ├── images/                   # Club and training-zone imagery
│   └── logo/                     # Brand marks and logo variants
├── next.config.ts                # Next.js image configuration
├── eslint.config.mjs             # Lint configuration
├── postcss.config.mjs            # Tailwind PostCSS integration
├── tsconfig.json                 # TypeScript settings and @/* import alias
├── package.json                  # Dependencies and scripts
└── pnpm-lock.yaml                # Locked dependency versions
```

## Content and customization

The `content/` directory contains the main editable business data.

| File | Content |
| --- | --- |
| `content/site.ts` | Brand information, site URL, navigation, social links, and pre-launch messaging |
| `content/memberships.ts` | Membership durations, regular and founding prices, registration fees, and founding-member limit |
| `content/location.ts` | Address, telephone numbers, WhatsApp number, and map coordinates |
| `content/hours.ts` | Daily opening hours and mixed / women-only time segments |
| `content/amenities.ts` | Facility groups, descriptions, and service notes |
| `content/zones.ts` | Training-zone names, descriptions, and image paths |
| `content/facility-stats.ts` | Club statistics displayed near the top of the homepage |
| `content/coaches.ts` | Coach profiles and publication flag |
| `content/testimonials.ts` | Member testimonials and publication flag |

Several components use `verified` flags to control whether content is displayed. Coach profiles and testimonials currently have empty lists and `verified: false`.

Design tokens, typography utilities, spacing, and motion styles live in `app/globals.css`. Fonts are configured in `app/fonts.ts`, and static assets are served from `public/`. Next.js image output is configured for AVIF and WebP in `next.config.ts`.

Bank transfer details are currently defined by `paymentDetails` inside `components/pre-register/pre-registration-form.tsx`. Update these separately from membership pricing when maintaining the payment instructions.

## Forms and payment workflow

### Membership pre-booking

1. The visitor enters a name, phone number, email address, and membership plan.
2. Client-side validation checks the details and focuses the first invalid field when needed.
3. The payment step displays the selected plan, amount, member details, and bank transfer instructions.
4. The visitor makes the transfer outside the website and opens a prepared WhatsApp message.
5. The visitor attaches a payment screenshot and sends the message. Core Club manually verifies payment and confirms membership, subject to availability.

Form details are held in React state and are not saved by the website. Entering details or reaching the payment step does not reserve a membership. The application has no payment gateway, automatic payment verification, or membership database.

### General enquiries

The contact form validates the visitor's details, enquiry type, and message, then opens WhatsApp with a formatted enquiry. The visitor sends the message from WhatsApp; the website does not automatically send it or persist the form data.

Google Maps embeds and WhatsApp handoffs use external services. No Maps API key or WhatsApp API credentials are configured in this implementation.

## Deployment

Deploy as a Next.js application on Vercel or a host that supports a Node.js server.

| Setting | Value |
| --- | --- |
| Framework | Next.js |
| Package manager | pnpm 10.33.0 |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build` |
| Start command for a Node.js host | `pnpm start` |

Keep `content/site.ts`'s `site.url` aligned with the production domain because it supplies the metadata base URL. Vercel Analytics is mounted in the root layout; analytics availability depends on the hosting configuration.

The repository uses the standard Next.js build output and is not configured for static export. Its current production build explicitly uses Webpack.

## Current implementation notes

- Hero, training-zone, and women's-hours images are marked in the source as temporary generated concept art awaiting real club photography.
- Coach profile cards are hidden until verified profiles are supplied. Their links target `/trainers/[slug]`, but trainer detail routes are not currently implemented.
- Testimonial rendering is available and remains hidden until verified member quotes are supplied.
- The wide-screen depth rail displays static section labels; active-section scroll tracking is still a source TODO.
- Founding-member availability is communicated through content and manual verification. There is no live inventory counter.

## Contributing

Keep changes focused and describe the affected page or user flow. Use the existing component organization, typed content models, and shared design tokens.

Before submitting application changes, run:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Review affected pages at mobile and desktop widths, including keyboard navigation, form validation, and reduced-motion behavior. Changes to the WhatsApp flows should also verify message content and destination numbers.

For agent-assisted work, read `AGENTS.md` and the relevant guides bundled in `node_modules/next/dist/docs/` before editing application code.

## License

No license file is included in this repository. A public repository does not by itself grant permission to reuse the code, brand assets, or imagery; contact the repository owner for usage terms.
