import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  id: number;
  name: string;
  result: string;
  image: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  description?: string;
  tag?: string;
  image?: string;
  checkoutUrl?: string;
}