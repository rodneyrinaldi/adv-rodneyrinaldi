import React from 'react';

interface CTAButtonProps {
  text: string;
  onClick: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
    >
      {text}
    </button>
  );
};

export default CTAButton;
