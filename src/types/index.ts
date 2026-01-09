export interface ServiceCardProps {
  title: string;
  desc: string;
  image: string;
  onClick: () => void;
}

export interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export interface PageProps {
  onOpenContact: () => void;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  metric: string;
}

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type PageType = 'home' | 'paid-ads' | 'seo' | 'website-design';
