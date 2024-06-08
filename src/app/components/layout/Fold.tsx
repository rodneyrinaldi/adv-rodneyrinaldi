import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

const Fold: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-w-screen">
      {children}
    </div>
  );
};

export default Fold;

