import React, { useEffect, useState } from 'react';
import './PageTransition.css';

const PageTransition = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-transition ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default PageTransition;



