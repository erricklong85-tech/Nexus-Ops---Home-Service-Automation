import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders hero section with main heading', () => {
    render(<Hero onOpenContact={vi.fn()} />);

    expect(screen.getByText(/Stop Losing Leads/i)).toBeInTheDocument();
    expect(screen.getByText(/Manual Chaos/i)).toBeInTheDocument();
  });

  it('renders call-to-action button', () => {
    const mockOpenContact = vi.fn();
    render(<Hero onOpenContact={mockOpenContact} />);

    const button = screen.getByText('Get Started Now');
    expect(button).toBeInTheDocument();
  });

  it('displays tagline', () => {
    render(<Hero onOpenContact={vi.fn()} />);

    expect(
      screen.getByText(/Systemize your business. Stabilize your growth./i)
    ).toBeInTheDocument();
  });

  it('renders system monitor visual proof section', () => {
    render(<Hero onOpenContact={vi.fn()} />);

    expect(screen.getByText('system_monitor.tsx')).toBeInTheDocument();
    expect(screen.getByText('New Lead Detected')).toBeInTheDocument();
    expect(screen.getByText('Speed-to-Lead')).toBeInTheDocument();
  });
});
