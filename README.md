# Sandy Latte

A SaaS dashboard starter built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack) |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Routes

| Path                   | Description                             |
| ---------------------- | --------------------------------------- |
| `/`                    | Public landing page (features, pricing, FAQ) |
| `/login`               | Login page                              |
| `/dashboard`           | Overview with stats, chart, activity, invoices |
| `/dashboard/projects`  | Projects (empty state)                  |
| `/dashboard/customers` | Customers (empty state)                 |
| `/dashboard/settings`  | Profile settings form                   |

## Project structure

```
src/
├── app/
│   ├── (marketing)/        # Public site: header + footer layout
│   │   ├── layout.tsx
│   │   └── page.tsx        # Landing page
│   ├── (auth)/             # Centered auth layout
│   │   └── login/page.tsx
│   ├── dashboard/          # App shell: sidebar + topbar
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── projects/ customers/ settings/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── not-found.tsx
│   └── globals.css         # Tailwind + brand color tokens
├── components/
│   ├── ui/                 # Primitives: Button, Card, Input/Label, Badge
│   ├── marketing/          # SiteHeader, SiteFooter, Section
│   ├── dashboard/          # DashboardShell, Sidebar, Topbar, PageHeader, StatCard, EmptyState
│   ├── auth/               # LoginForm
│   ├── icons.tsx           # Inline SVG icon set
│   └── logo.tsx
└── lib/
    ├── site-config.ts      # App name + marketing/dashboard navigation
    └── utils.ts            # `cn` class-name helper
```

Route groups — `(marketing)` and `(auth)` — share layouts without affecting URLs.

## Notes

- **Navigation** is defined once in `src/lib/site-config.ts`; add an entry to `dashboardNav` to get a new sidebar link with active-state highlighting.
- **Brand colors** are Tailwind theme tokens (`brand-50` … `brand-700`) in `globals.css`.
- **Authentication is a placeholder.** `LoginForm` validates input on the client and redirects to `/dashboard`; the dashboard is not protected. Replace `handleSubmit` with a real auth provider and add route protection before shipping.
- **Dashboard data is static** sample data in `src/app/dashboard/page.tsx`.
