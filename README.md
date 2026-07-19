# Pulse — React Admin Dashboard

A modern, responsive admin dashboard UI built with React, Vite, and Tailwind CSS. Designed as a
reusable front-end shell for SaaS, analytics, CRM, or project-management products.

![Pulse dashboard preview](./screenshots/desktop-overview.png)

## Features

- **Responsive sidebar** with active-state navigation, collapses to a slide-over drawer on mobile
- **Top navigation bar** with global search, notifications dropdown, and profile menu
- **Overview stat cards** (users, revenue, orders, projects) with animated sparkline trends
- **Revenue chart** — actual vs. target, built with Recharts
- **Recent orders table** with avatars, status badges, and a stacked-card layout on mobile
- **User profile card** with quick stats
- **Notifications** — both a header dropdown and an inline activity feed
- **Light, purposeful motion** — staggered fade-ins and an animated "pulse" sparkline as the
  dashboard's signature visual motif
- **Fully responsive** from 360px mobile widths up through large desktop screens

## Tech Stack

| Layer      | Choice                          |
| ---------- | -------------------------------- |
| Framework  | React 19 + Vite                  |
| Styling    | Tailwind CSS v4 (CSS-based theme via `@theme`) |
| Icons      | lucide-react                     |
| Charts     | Recharts                         |
| Fonts      | Sora (display), Inter (body), JetBrains Mono (data) |

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx          # Navigation drawer
│   │   ├── Topbar.jsx           # Header: search, notifications, profile
│   │   └── DashboardLayout.jsx  # Shell that composes sidebar + topbar + page
│   ├── dashboard/
│   │   ├── StatCard.jsx         # Overview metric card + sparkline
│   │   ├── RevenueChart.jsx     # Recharts area chart
│   │   ├── ActivityTable.jsx    # Recent orders table
│   │   ├── ProfileCard.jsx      # User profile summary
│   │   ├── NotificationsPanel.jsx  # Header dropdown
│   │   ├── NotificationsFeed.jsx   # Inline activity feed widget
│   │   └── SearchBar.jsx
│   └── ui/
│       ├── Avatar.jsx
│       └── Badge.jsx
├── data/
│   └── mockData.js              # Mock data (swap for real API calls)
├── pages/
│   └── Dashboard.jsx            # Overview page composition
├── App.jsx                      # Route/section switcher
├── main.jsx                     # App entry point
└── index.css                    # Tailwind import + design tokens
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone <your-repo-url>
cd pulse-admin-dashboard
npm install
```

### Development

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview   # preview the production build locally
```

### Lint

```bash
npm run lint
```

## Deployment

This is a static Vite build, so it deploys to any static host.

**Vercel**
1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

**Netlify**
1. Push this repo to GitHub.
2. Import the repo in [Netlify](https://app.netlify.com/start).
3. Build command: `npm run build`. Publish directory: `dist`.

## Design Notes

- Color, type, and layout tokens live in `src/index.css` under the Tailwind v4 `@theme` block —
  update them there to re-theme the whole app.
- `mockData.js` is the single source of demo data; replace it with real API calls (e.g. a
  `src/services/api.js` module) without touching component markup.
- The animated sparkline stroke (`.pulse-line` in `index.css`) and the ping-style `.live-dot` are
  the dashboard's recurring visual signature — used in stat cards and live indicators.

## Screenshots

Screenshots of the desktop and mobile layouts are included in `/screenshots`.

## License

MIT — free to use for learning and portfolio purposes.
