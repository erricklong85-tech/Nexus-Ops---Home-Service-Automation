import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SecondaryButton from '../SecondaryButton';

describe('SecondaryButton', () => {
  it('renders with provided text', () => {
    render(<SecondaryButton text="Learn More" />);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<SecondaryButton text="Learn More" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Learn More'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders without onClick handler', () => {
    render(<SecondaryButton text="Learn More" />);
    const button = screen.getByText('Learn More');
    expect(button).toBeInTheDocument();
  });
});
