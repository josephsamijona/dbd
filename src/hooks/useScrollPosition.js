import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position and direction
 * @returns {Object} Scroll position data including x, y coordinates and direction
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    direction: 'up'
  });

  useEffect(() => {
    let ticking = false;
    
    const updatePosition = () => {
      const position = {
        x: window.scrollX,
        y: window.scrollY,
        lastX: scrollPosition.x,
        lastY: scrollPosition.y,
        direction: window.scrollY > scrollPosition.y ? 'down' : 'up'
      };
      
      setScrollPosition(position);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPosition.x, scrollPosition.y]);

  return scrollPosition;
};

/**
 * Hook to check if scroll has passed a threshold
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean} Whether threshold has been passed
 */
export const useScrollThreshold = (threshold = 100) => {
  const [passedThreshold, setPassedThreshold] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateState = () => {
      setPassedThreshold(window.scrollY > threshold);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return passedThreshold;
};

/**
 * Hook to handle smooth scrolling to elements
 * @returns {Object} Object containing scroll utility functions
 */
export const useSmoothScroll = () => {
  // Scroll to specific element
  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to top of page
  const scrollToTop = (smooth = true) => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  // Scroll to specific position
  const scrollToPosition = (x = 0, y = 0, smooth = true) => {
    window.scrollTo({
      top: y,
      left: x,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  return {
    scrollToElement,
    scrollToTop,
    scrollToPosition
  };
};

/**
 * Hook to detect if element is in viewport
 * @param {React.RefObject} ref - Reference to the element to track
 * @param {Object} options - IntersectionObserver options
 * @returns {boolean} Whether element is in viewport
 */
export const useInView = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);
      }, options);

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref, options]);

  return isInView;
};

// Example usage:
/*
import { useScrollPosition, useScrollThreshold, useSmoothScroll, useInView } from './hooks/useScrollPosition';

// In your component:
const ScrollAwareComponent = () => {
  const { y, direction } = useScrollPosition();
  const isScrolled = useScrollThreshold(100);
  const { scrollToTop, scrollToElement } = useSmoothScroll();
  const elementRef = useRef(null);
  const isElementInView = useInView(elementRef);

  return (
    <div>
      <div>Scroll position: {y}</div>
      <div>Scroll direction: {direction}</div>
      <div>Passed threshold: {isScrolled ? 'Yes' : 'No'}</div>
      <button onClick={() => scrollToTop()}>Scroll to Top</button>
      <button onClick={() => scrollToElement('section-id')}>
        Scroll to Section
      </button>
      <div ref={elementRef}>
        {isElementInView ? 'Element is visible' : 'Element is hidden'}
      </div>
    </div>
  );
};
*/