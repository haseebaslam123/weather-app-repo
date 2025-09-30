// Animation utility functions and constants
export const animationVariants = {
  // Page entrance animations
  pageEnter: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  },
  
  // Card hover animations
  cardHover: {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8 },
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  },
  
  // Search result animations
  searchResult: {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
  },
  
  // Staggered animations for lists
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  staggerItem: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

// CSS animation classes
export const animationClasses = {
  fadeIn: 'fade-in',
  slideUp: 'slide-up',
  slideInLeft: 'slide-in-left',
  slideInRight: 'slide-in-right',
  zoomIn: 'zoom-in',
  bounceIn: 'bounce-in',
  pulse: 'pulse',
  shake: 'shake'
};

// Animation timing functions
export const easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
};

// Utility function to add animation classes
export const addAnimationClass = (element, className, duration = 1000) => {
  if (element) {
    element.classList.add(className);
    setTimeout(() => {
      element.classList.remove(className);
    }, duration);
  }
};

// Utility function to create staggered animations
export const createStaggeredAnimation = (elements, delay = 100) => {
  elements.forEach((element, index) => {
    if (element) {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, index * delay);
    }
  });
};



