import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ServiceCard from '../ServiceCard';

describe('ServiceCard', () => {
  const mockProps = {
    title: 'Test Service',
    desc: 'Test description',
    image: 'https://example.com/image.jpg',
    onClick: vi.fn(),
  };

  it('renders service card with correct content', () => {
    render(<ServiceCard {...mockProps} />);

    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Service')).toHaveAttribute('src', mockProps.image);
  });

  it('calls onClick when clicked', () => {
    render(<ServiceCard {...mockProps} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('displays image with correct attributes', () => {
    render(<ServiceCard {...mockProps} />);

    const image = screen.getByAltText('Test Service') as HTMLImageElement;
    expect(image.src).toBe(mockProps.image);
  });
});
