// src/pages/ErrorPage.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBug, FaHome, FaSyncAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  // Optionnel : Log des erreurs ou autres actions à l'initialisation
  useEffect(() => {
    // Par exemple, envoyer des logs d'erreur à un service externe
    console.error("Une erreur s'est produite dans l'application.");
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="container-custom section-padding flex flex-col items-center justify-center text-center">
      {/* Illustration */}
      <motion.div
        className="text-6xl text-red-600 mb-8 animate-fade-in"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaBug />
      </motion.div>
      
      {/* Titre */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
        Oups ! Une Erreur est Survenue
      </h1>
      
      {/* Description */}
      <p className="text-gray-600 mb-8">
        Désolé, quelque chose s&apos;est mal passé. Veuillez réessayer plus tard.
      </p>
      
      {/* Boutons d'Action */}
      <div className="flex gap-4">
        <motion.button
          className="btn btn-secondary flex items-center gap-2 hover-lift"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRetry}
        >
          <FaSyncAlt /> Réessayer
        </motion.button>
        
        <Link to="/" className="btn btn-primary flex items-center gap-2 hover-lift">
          <FaHome /> Retour à l&apos;Accueil
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
