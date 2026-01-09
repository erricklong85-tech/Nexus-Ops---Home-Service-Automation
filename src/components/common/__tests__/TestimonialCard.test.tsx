import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TestimonialCard from '../TestimonialCard';

describe('TestimonialCard', () => {
  const mockProps = {
    quote: 'This is a great service!',
    author: 'John Doe',
    role: 'CEO, Example Corp',
    metric: '+50% Revenue',
  };

  it('renders testimonial with all content', () => {
    render(<TestimonialCard {...mockProps} />);

    expect(screen.getByText(`"${mockProps.quote}"`)).toBeInTheDocument();
    expect(screen.getByText(mockProps.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.role)).toBeInTheDocument();
    expect(screen.getByText(mockProps.metric)).toBeInTheDocument();
  });

  it('displays metric badge', () => {
    render(<TestimonialCard {...mockProps} />);
    const metric = screen.getByText(mockProps.metric);
    expect(metric).toBeInTheDocument();
  });
});
