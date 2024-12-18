import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowUp } from 'lucide-react';

const Layout = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname } = useLocation();

  // Handle "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-indigo-600 focus:shadow-lg focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main 
        id="main-content"
        className="flex-grow relative"
      >
        <div className="hidden fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
        </div>

        <div className="relative">
          {children}
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed right-6 bottom-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ${
            showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </main>

      <Footer />

      <div className="fixed bottom-6 left-6 z-50 transform transition-all duration-300 translate-y-full opacity-0">
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Notification</p>
            <p className="text-sm text-gray-500">Notification message</p>
          </div>
        </div>
      </div>

      <div className="hidden fixed inset-0 z-50">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {/* Modal content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Default props
Layout.defaultProps = {
  children: null,
};

export default Layout;