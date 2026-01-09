import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactModal from '../ContactModal';

describe('ContactModal', () => {
  const mockOnClose = vi.fn();

  it('renders modal when open', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText(/Fill out this form to get in touch/i)).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    const { container } = render(<ContactModal isOpen={false} onClose={mockOnClose} />);
    expect(container.firstChild).toBeNull();
  });

  it('calls onClose when close button is clicked', () => {
    const { container } = render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    const closeButton = container.querySelector('button.absolute.top-4.right-4');
    expect(closeButton).toBeInTheDocument();
    if (closeButton) {
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    }
  });

  it('renders form fields', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);

    expect(screen.getByPlaceholderText('John')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('+1 (555) 000-0000')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('john@company.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Acme Construction Inc.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('www.example.com')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Tell us about your current bottlenecks...')
    ).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });
});
