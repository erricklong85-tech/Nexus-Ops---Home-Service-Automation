# Contributing to Nexus Ops

First off, thank you for considering contributing to Nexus Ops! It's people like you that make this project better for everyone.

## Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue
* **Describe the exact steps which reproduce the problem** in as much detail as possible
* **Provide specific examples** to demonstrate the steps
* **Describe the behavior you observed** after following the steps
* **Explain which behavior you expected to see instead and why**
* **Include screenshots** if possible
* **Include your environment details** (OS, Node version, browser, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Create an issue and provide the following information:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior** and **explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Process

### Setting Up Your Development Environment

1. Fork and clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/Nexus-Ops---Home-Service-Automation.git
cd Nexus-Ops---Home-Service-Automation
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create a branch:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

4. Start the development server:
```bash
npm run dev
```

### Coding Standards

#### TypeScript

- Use TypeScript strict mode
- Define types for all props, functions, and variables
- Use interfaces for object shapes
- Export types from `src/types/index.ts`

Example:
```typescript
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export default function MyComponent({ title, onClick }: MyComponentProps) {
  // Component code
}
```

#### React

- Use functional components with hooks
- Use named exports for components
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

Example:
```typescript
// Good
export default function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}

// Avoid
export default class Button extends React.Component { /* ... */ }
```

#### Code Style

- **2 spaces** for indentation
- **Single quotes** for strings
- **Trailing commas** in objects and arrays
- **No semicolons** (enforced by Prettier)
- **Destructure props** in function parameters
- **Use const** for variables that won't be reassigned

These rules are enforced by ESLint and Prettier.

### Commit Message Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (whitespace, formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build process or auxiliary tools

**Examples:**
```
feat(hero): add animated background particles

fix(navbar): resolve mobile menu overflow issue

docs(readme): update installation instructions

test(button): add unit tests for PrimaryButton component

chore(deps): update framer-motion to v12.24.4
```

### Testing Requirements

All new features and bug fixes should include tests.

**Running Tests:**
```bash
# Run tests in watch mode
npm run test

# Run tests once (CI mode)
npm run test:run

# Generate coverage report
npm run test:coverage
```

**Writing Tests:**
- Use React Testing Library for component tests
- Test user behavior, not implementation details
- Aim for meaningful tests, not just coverage numbers
- Mock external dependencies

Example:
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button text="Click me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Quality Checks Before Committing

Run these commands before submitting a pull request:

```bash
# Lint your code
npm run lint

# Check types
npm run typecheck

# Run tests
npm run test:run

# Check formatting
npm run format:check

# Or run them all at once
npm run lint && npm run typecheck && npm run test:run && npm run format:check
```

### Pull Request Process

1. **Update the README.md** with details of changes if applicable
2. **Update tests** to reflect your changes
3. **Ensure all tests pass** and coverage meets requirements (60%+)
4. **Run linting and formatting** to ensure code quality
5. **Write a clear PR description** explaining what and why:
   - What problem does this solve?
   - What approach did you take?
   - Any trade-offs or limitations?
   - Screenshots for UI changes
6. **Reference relevant issues** in your PR description (`Fixes #123`)
7. **Respond to review feedback** in a timely manner

### Branch Naming Conventions

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation changes
- `refactor/description` - Code refactoring
- `test/description` - Test improvements
- `chore/description` - Build/tooling changes

Examples:
- `feature/add-dark-mode-toggle`
- `fix/navbar-mobile-overflow`
- `docs/update-contributing-guide`

## Project Structure Guidelines

### Where to Add New Code

- **Reusable UI components** → `src/components/common/`
- **Page section components** → `src/components/sections/`
- **Modal components** → `src/components/modals/`
- **Full page components** → `src/pages/`
- **Type definitions** → `src/types/index.ts`
- **Utility functions** → `src/utils/`
- **Test files** → Co-located with source in `__tests__/` directory

### Component Organization

```typescript
// src/components/common/MyComponent.tsx
import type { MyComponentProps } from '@/types';

export default function MyComponent({ prop1, prop2 }: MyComponentProps) {
  // Component implementation
}

// src/components/common/__tests__/MyComponent.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent prop1="value" />);
    expect(screen.getByText('value')).toBeInTheDocument();
  });
});

// src/types/index.ts
export interface MyComponentProps {
  prop1: string;
  prop2?: number;
}
```

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library Documentation](https://testing-library.com/react)

## Questions?

Feel free to open an issue with the `question` label if you have any questions about contributing!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Nexus Ops!
