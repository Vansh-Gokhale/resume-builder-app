# ⚡ Resume Builder — by Vansh

Welcome to Resume Builder — a modern, customizable resume/CV builder built with Next.js, Tailwind CSS, and a collection of well-crafted UI components. Create beautiful resumes quickly, switch themes, preview templates live, and export to PDF — all with developer-friendly components and sensible defaults. 🎯📝

Project description
A short overview of what this project does and why it exists:
- Purpose: Help users create professional resumes quickly using editable sections and templates.
- Core features: form-driven resume editor, multiple templates, live preview, theme (light/dark) support, and PDF export for easy sharing.
- Built for: developers, designers, and anyone who wants a clean, customizable resume without wrestling with layout tools.

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

Author ✍️
- Vansh — happy to collaborate and iterate on templates, features, and UX.

Have fun building! 🎉
