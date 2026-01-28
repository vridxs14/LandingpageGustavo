import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-6 md:py-12 w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};