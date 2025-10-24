# ⚡ My V0 Project

Welcome to My V0 Project — a shiny Next.js + Tailwind UI starter with Radix + Sonner and lots of reusable components 🎨✨

A minimal description:
- Next.js 16 + React 19
- Tailwind CSS for styling
- Radix UI primitives for accessible components
- next-themes for dark/light theme support
- Sonner for toast notifications

Quick links
- Components live in `components/ui` (lots of ready-to-use pieces)
- Theme provider at `components/theme-provider.tsx`
- Global styles at `styles/globals.css`

Getting started 🚀

1) Install dependencies

Using pnpm (recommended since repo contains pnpm-lock):

```bash
pnpm install
```

Or npm:

```bash
npm install
```

2) Run the dev server

```bash
pnpm dev
# or
npm run dev
```

3) Build for production

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

Useful scripts
- `dev` — start Next dev server
- `build` — production build
- `start` — run the built app
- `lint` — run ESLint

Tech & libs 🧰
- next, react, react-dom
- tailwindcss, postcss, autoprefixer
- radix-ui primitives (accordion, dialog, popover, etc.)
- next-themes (theme switching)
- sonner (toasts)
- react-hook-form + zod for forms & validation

Notes & tips 💡
- ThemeProvider is a client component — see `components/theme-provider.tsx` for how `next-themes` is wired.
- If you change Tailwind config or postcss, restart the dev server.
- Use the `components/ui` folder as the playground for building pages quickly.

Contributing 🤝
Contributions, suggestions, and bug reports are welcome. Open a PR or issue and add a clear description of your change.

Have fun building! 🎉
