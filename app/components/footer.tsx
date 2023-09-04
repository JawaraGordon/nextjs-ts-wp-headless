import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
