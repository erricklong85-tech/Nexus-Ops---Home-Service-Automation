import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('renders navbar with brand name', () => {
    render(<App />);
    const nexusOpsElements = screen.getAllByText('Nexus Ops');
    expect(nexusOpsElements.length).toBeGreaterThan(0);
  });

  it('renders footer', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('renders home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Stop Losing Leads/i)).toBeInTheDocument();
  });
});
