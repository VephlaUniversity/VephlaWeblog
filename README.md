# Vephla Dailies

Vephla Dailies is the editorial and technology blog for the Vephla ecosystem. It is a responsive React single-page application presenting curated stories across careers, founders, lifestyle, tutorials, trends, and reviews, alongside in-depth standalone articles.

The site includes animated page transitions, article sharing, newsletter and contact interactions, category browsing, responsive navigation, legal pages, and a dedicated not-found page.

## Table of Contents

- [Quick Project Map](#quick-project-map)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Application Structure](#application-structure)
- [Routes](#routes)
- [Content and Component Conventions](#content-and-component-conventions)
- [Newsletter Behavior](#newsletter-behavior)
- [Contact Form Integration](#contact-form-integration)
- [Deployment](#deployment)
- [Development Notes](#development-notes)

## Quick Project Map

Use this section to jump directly to the code for a task:

| To update | Start in |
| --- | --- |
| Routes or browser page titles | `src/App.jsx` |
| React entry and router setup | `src/main.jsx` |
| Header or mobile navigation | `src/components/Nav.jsx` |
| Footer and ecosystem links | `src/components/Footer.jsx` |
| Landing screen | `src/components/Weblog.jsx` |
| News blog homepage and category cards | `src/components/home/Main.jsx` |
| Newsletter section | `src/components/home/Hero.jsx` |
| Career, founder, lifestyle, tutorial, trend, or review listings | `src/components/*Blog.jsx` |
| Shared article layout and sharing controls | `src/components/ArticleLayout.jsx` |
| Individual article content | `src/components/articles/` |
| Contact form and backend request | `src/components/contact/Contact.jsx` |
| Terms or privacy content | `src/components/Terms.jsx` or `src/components/Privacy.jsx` |
| Global styles and Tailwind theme | `src/index.css` |
| Static images and icons | `public/` |
| Build plugins and Vite settings | `vite.config.js` |
| Dependencies and npm scripts | `package.json` |

## Features

- Six editorial categories: Careers, Founders, Lifestyle, Tutorials, Trends, and Reviews.
- Long-form article layouts with breadcrumbs, metadata, hero imagery, and social sharing.
- Sharing for X, Facebook, LinkedIn, and the native clipboard.
- Responsive desktop and mobile navigation.
- Page-specific browser titles and smooth transitions between routes.
- Newsletter email validation and feedback modal.
- Contact form connected to a Vephla backend endpoint.
- Terms of service and privacy policy pages.
- Local image and illustration assets with external article imagery.
- Responsive styling based on Tailwind CSS 4 and a custom dark theme.

## Technology Stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Routing | React Router DOM 7 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 4 with `@tailwindcss/vite` |
| Animation | Framer Motion |
| Icons | Lucide React |
| Carousel | React Slick and Slick Carousel |
| Linting | ESLint 9 |
| Font | Space Grotesk from Google Fonts |

## Getting Started

### Prerequisites

- Node.js 18 or newer is recommended.
- npm (the repository includes `package-lock.json`).

### Installation

```bash
git clone <repository-url>
cd VephlaWeblog
npm install
```

### Run locally

```bash
npm run dev
```

Vite prints the local development URL, normally `http://localhost:5173`.

### Production build

```bash
npm run build
```

The optimized output is written to `dist/`.

### Preview a production build

```bash
npm run preview
```

### Run lint checks

```bash
npm run lint
```

## Available Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally for verification. |
| `npm run lint` | Run ESLint across the project. |

## Application Structure

```text
VephlaWeblog/
├── public/                 # Static images, icons, illustrations, and article media
├── src/
│   ├── App.jsx             # Route registration and page titles
│   ├── main.jsx            # React entry point and BrowserRouter setup
│   ├── App.css             # Additional application styles
│   ├── index.css           # Tailwind import and global theme styles
│   └── components/
│       ├── home/           # Homepage hero and category grid
│       ├── contact/        # Contact page and form
│       ├── articles/       # Standalone long-form article components
│       ├── ArticleLayout.jsx
│       ├── Nav.jsx
│       ├── Footer.jsx
│       ├── Weblog.jsx
│       ├── CareersBlog.jsx
│       ├── FoundersBlog.jsx
│       ├── LifestyleBlog.jsx
│       ├── TutorialsBlog.jsx
│       ├── TrendsBlog.jsx
│       ├── ReviewsBlog.jsx
│       ├── Terms.jsx
│       └── Privacy.jsx
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Routes

### Main pages

| Route | Page |
| --- | --- |
| `/` | Vephla Dailies landing page |
| `/news-blog` | News blog and category overview |
| `/careers` | Careers articles |
| `/founders` | Founder stories |
| `/lifestyle` | Lifestyle articles |
| `/tutorials` | Tutorials |
| `/trends` | Technology trends |
| `/reviews` | Product and tool reviews |
| `/contact` | Contact form |
| `/terms` | Terms of service |
| `/privacy` | Privacy policy |

### Article pages

| Route | Topic |
| --- | --- |
| `/ai-co-pilots` | AI co-pilot tools |
| `/networking-devops` | Networking and DevOps |
| `/living-the-remote-life` | Remote work lifestyle |
| `/zero-to-1m-arr` | Building to $1M ARR |
| `/first-round-funding` | First-round startup funding |
| `/digital-minimalism` | Digital minimalism |
| `/react-beginner-guide` | React fundamentals |
| `/edge-computing-2025` | Edge computing |
| `/ai-trends` | Artificial intelligence trends |
| `/notion-vs-obsidian` | Notion versus Obsidian |
| `/macbook-vs-thinkpad-dev` | MacBook versus ThinkPad for developers |
| `/work-life-balance-remote` | Work-life balance while working remotely |
| `/webassembly-future` | The future of WebAssembly |
| `/react-task-manager` | Building a React task manager |
| `/teamflow-journey` | Teamflow product journey |
| `/css-grid-mastery` | CSS Grid techniques |
| `/transition-into-tech` | Transitioning into technology |
| `/vscode-extensions-2025` | Recommended VS Code extensions |
| `/nodejs-api-development` | Node.js API development |
| `/mvp-mistakes` | Common MVP mistakes |
| `/project-management-portfolio` | Project management portfolios |
| `/retrospective-meeting` | Running retrospective meetings |
| `/what-does-a-project-manager-actually-do` | The project manager role |
| `/become-a-project-manager-with-no-experience` | Becoming a project manager |
| `/how-to-install-pgadmin-4` | Installing pgAdmin 4 |
| `/anaconda-installation-guide` | Installing Anaconda |

Unknown paths render a custom 404 page with a link back to the homepage.

## Content and Component Conventions

- Category pages contain curated lists of article cards and route links.
- `ArticleLayout` provides the shared article shell, including breadcrumbs, title, metadata, hero image, copy-link control, and social sharing.
- Standalone article components provide page-specific content and pass their metadata to `ArticleLayout`.
- `AnimatedPage` wraps page content for route animations.
- `ScrollToTop` resets browser scroll position on route changes.
- Static assets referenced by `/filename.ext` should be placed in `public/`.
- External article images and illustrations require an internet connection.

## Newsletter Behavior

The newsletter section in the news blog validates the submitted email in the browser, displays a success or error modal, and currently simulates subscription with a delay. It does not send subscriber data to a persistent backend. Connecting a mailing provider or newsletter API requires replacing the simulated submit logic in `src/components/home/Hero.jsx`.

## Contact Form Integration

The contact form sends JSON to:

```text
https://daily.vephla.com/backend/contact.php
```

The request includes the visitor's name, email, phone number, message, selected services, and custom service text. A successful response is expected to include `{ "success": true }`.

No frontend environment variables are currently required. CORS, backend availability, and response handling are managed by the external contact endpoint.

## Deployment

Build the project before deployment:

```bash
npm run build
```

Deploy the contents of `dist/` to a static host. Because the application uses `BrowserRouter`, configure the host to rewrite all application routes to `index.html`:

- Netlify: add a `_redirects` file containing `/* /index.html 200`.
- Apache: configure the host to route unknown paths to `index.html`.
- Nginx: add a `try_files $uri $uri/ /index.html;` fallback.
- Vercel and most SPA-capable hosts: enable SPA rewrites to `/index.html`.

Ensure the deployed host allows requests to `https://daily.vephla.com/backend/contact.php`, since the contact form is cross-origin.

## Development Notes

- This project uses JSX and JavaScript rather than TypeScript.
- Tailwind CSS 4 is loaded through the Vite plugin and `src/index.css`.
- The default background is dark (`#0d0d0d`) and the primary accent is red.
- External social, product, and Vephla ecosystem links target their corresponding live services.
- Run `npm run lint` and `npm run build` before submitting changes.
