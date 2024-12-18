import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useLocation,
  Navigate 
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import des composants
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardHome from './pages/dashboard/DashboardHome';
import UserProfile from './pages/dashboard/UserProfile';
import Settings from './pages/dashboard/Settings';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';

// ScrollToTop component avec PropTypes
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

// Language configuration
const defaultLanguage = 'en';
const supportedLanguages = ['en', 'fr', 'es', 'de'];

// Protected Route Component avec PropTypes
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Your auth hook
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

// Dashboard Routes Component avec PropTypes
const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<DashboardHome />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

// Error Boundary avec PropTypes
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

// Main App Component avec PropTypes
const App = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState(
    localStorage.getItem('language') || defaultLanguage
  );

  const handleLanguageChange = (language) => {
    if (supportedLanguages.includes(language)) {
      setCurrentLanguage(language);
      localStorage.setItem('language', language);
    }
  };

  return (
    <Router>
      <Helmet>
        <html lang={currentLanguage} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4F46E5" />
        <link rel="icon" href="/favicon.ico" />
        <title>DBD Translations - Professional Translation Services</title>
        <meta 
          name="description" 
          content="Professional translation and localization services for businesses worldwide. Expert language solutions for documents, websites, and more."
        />
      </Helmet>

      <Layout 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        supportedLanguages={supportedLanguages}
      >
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <DashboardRoutes />
              </ProtectedRoute>
            }
          />
          
          {/* Error Routes */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/500" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

// Layout PropTypes
Layout.propTypes = {
  currentLanguage: PropTypes.oneOf(supportedLanguages).isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  supportedLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

// Wrapped App with Error Boundary
const AppWithErrorBoundary = () => {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
};

// Default Props
Layout.defaultProps = {
  currentLanguage: defaultLanguage,
  supportedLanguages: supportedLanguages,
};

// Auth Hook Type
const useAuth = () => {
  // Implementation of your auth hook
  return true; // Temporary return for demonstration
};

export default AppWithErrorBoundary;