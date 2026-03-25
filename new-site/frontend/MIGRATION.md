# Brewtendo Website - Project Overview (Migration)

## Tech Stack

- **Framework**: Next.js 16 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS files
- **Deployment**: GitHub Pages (static export)
- **No backend** - everything runs in the browser

## Project Structure

```
new-site/frontend/
├── src/
│   ├── app/              # Next.js app router
│   │   ├── layout.tsx    # Root layout with security headers
│   │   ├── page.tsx      # Main entry point
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── HomePage.tsx
│   │   ├── GuidePage.tsx
│   │   ├── BadgeArcadePage.tsx
│   │   ├── OtherPage.tsx
│   │   ├── ProgressPage.tsx
│   │   ├── Footer.tsx
│   │   └── PageRenderer.tsx
│   ├── contexts/         # React context for state management
│   │   └── ContentContext.tsx
│   └── data/             # Static data
│       └── staff.ts      # Staff list data
├── public/               # Static assets
│   ├── images/           # Images used by the site
│   ├── css/              # Stylesheets
│   ├── audio/            # Sound files
│   ├── .well-known/      # Security.txt
│   └── .nojekyll         # Prevents Jekyll processing
├── next.config.js        # Next.js configuration
└── package.json
```

## How It Works

The site is a **Single Page Application (SPA)**. Instead of loading new pages from the server, everything happens client-side:

1. **Page switching**: Uses React state to switch between "pages" (Home, Guide, etc.) without reloading
2. **Audio**: Sound effects play when clicking navigation
3. **Style switching**: Different CSS files load for different sections
4. **All data is static**: No API calls, everything is baked into the code

## Security Features

- Content Security Policy (CSP) headers
- X-Frame-Options: DENY (prevents clickjacking)
- X-Content-Type-Options: nosniff
- All external links use `rel="noopener noreferrer"`
- Stylesheet loading is whitelist-only

## Building & Deploying

```bash
# Install dependencies
cd new-site/frontend
npm install

# Build for production
npm run build

# Output goes to `out/` folder, ready for GitHub Pages
```

The `.github/workflows/deploy.yml` handles automatic deployment on every push to main.

## Where Assets Come From

Images load from two sources:
- **Local**: Files in `public/images/` get copied to the build
- **GitHub repo**: Some assets load directly from `https://raw.githubusercontent.com/BrewtendoNetwork/...`

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/contexts/ContentContext.tsx` | Manages page state, audio, styles |
| `src/components/PageRenderer.tsx` | Decides which page to show |
| `next.config.js` | Build configuration for static export |
| `public/.nojekyll` | Tells GitHub Pages not to use Jekyll |

---

Built by itsglowny (migration). Questions? Ask on Discord or dm me.
