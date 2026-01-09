# Nexus Ops - Home Service Automation

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> Operations and automation agency landing page for home service businesses

A modern, high-performance landing page built with React 19, TypeScript, and Tailwind CSS. Designed for home service businesses looking to streamline their operations through intelligent automation.

## Features

### Design & UX
- **Modern Glassmorphism UI** with smooth animations via Framer Motion
- **Fully Responsive Design** optimized for all device sizes
- **Dark Mode Aesthetic** with brand-specific color palette
- **Interactive Components** with hover effects and micro-interactions
- **Particle Field Background** for visual interest
- **Testimonial Carousel** with auto-rotation

### Technical Stack
- **React 19.2** with TypeScript for type safety
- **Vite 6.2** for blazing-fast development and optimized builds
- **Tailwind CSS 3.4** for utility-first styling
- **Framer Motion 12.24** for fluid animations
- **Lucide React** for consistent iconography
- **Vitest** with React Testing Library for comprehensive testing

### Pages & Sections
- **Home Page** with hero, value proposition, social proof, and CTA
- **Website Design** service page
- **Paid Ads** service page
- **SEO** service page
- **Contact Modal** with multi-step form
- **Dynamic Navigation** with service mega menu

### Developer Experience
- **ESLint + Prettier** for code quality and consistency
- **TypeScript Strict Mode** with comprehensive type definitions
- **Component Architecture** with clean separation of concerns
- **Path Aliases** for cleaner imports (`@components`, `@pages`, etc.)
- **Test Coverage** at 62%+ with Vitest
- **Git Hooks Ready** for pre-commit quality checks

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19.2.0 |
| Language | TypeScript 5.8.3 |
| Build Tool | Vite 6.2.0 |
| Styling | Tailwind CSS 3.4.17 |
| Animation | Framer Motion 12.24.4 |
| Icons | Lucide React 0.562.0 |
| Testing | Vitest 1.6.1 |
| Testing Library | @testing-library/react 16.1.0 |
| Linting | ESLint 9.18.0 |
| Formatting | Prettier 3.4.2 |

## Getting Started

### Prerequisites

- **Node.js** 20.0.0 or higher
- **npm** 10.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/erricklong85-tech/Nexus-Ops---Home-Service-Automation.git
cd Nexus-Ops---Home-Service-Automation
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```
*Note: `--legacy-peer-deps` flag is needed for React 19 peer dependency compatibility.*

3. Create environment file (optional):
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to see the app running.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production in `dist/` directory |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Auto-fix ESLint issues where possible |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is properly formatted |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run test` | Run tests in watch mode |
| `npm run test:ui` | Open Vitest UI for interactive testing |
| `npm run test:run` | Run tests once (CI mode) |
| `npm run test:coverage` | Generate test coverage report |

## Project Structure

```
nexus-ops---home-service-automation/
├── .github/               # GitHub workflows (CI/CD)
├── src/
│   ├── components/        # React components
│   │   ├── common/        # Reusable UI components
│   │   ├── modals/        # Modal dialogs
│   │   └── sections/      # Page sections
│   ├── pages/             # Page components
│   ├── test/              # Test setup files
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main app component
│   ├── index.tsx          # App entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── .eslintrc.cjs          # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Vitest configuration
└── package.json           # Project dependencies
```

## Development Guidelines

### Code Style

- **2 spaces** for indentation
- **Single quotes** for strings
- **Trailing commas** where valid
- **No semicolons** (enforced by Prettier)
- **Functional components** with hooks
- **Named exports** for components

### Testing

- Write tests for all new components
- Aim for 60%+ code coverage
- Use React Testing Library best practices
- Test user interactions, not implementation details

Run tests before committing:
```bash
npm run test:run
npm run test:coverage
```

### Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes following code style guidelines
3. Run linting and tests: `npm run lint && npm run typecheck && npm run test:run`
4. Commit with conventional commit messages:
   - `feat: add new feature`
   - `fix: resolve bug`
   - `docs: update documentation`
   - `style: format code`
   - `refactor: restructure code`
   - `test: add tests`
   - `chore: update dependencies`
5. Push and create a pull request

## Environment Variables

Create a `.env.local` file based on `.env.example`:

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `GEMINI_API_KEY` | No | API key for Gemini AI features | `AIzaSy...` |

Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

Or use the Vercel Dashboard:
- Import your GitHub repository
- Vercel will auto-detect Vite configuration
- Add environment variables in project settings
- Deploy

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add environment variables in site settings

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Serve the `dist/` directory with any static file server.

## Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: ~370 KB total (code-split)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Code Splitting**: Vendor chunks (React, Framer Motion, Lucide)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern SaaS landing pages
- Built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**Nexus Ops** - Streamline your business. Stabilize your growth.
