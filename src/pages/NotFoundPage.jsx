// src/pages/NotFoundPage.jsx
import  'react';
//import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="container-custom section-padding flex flex-col items-center justify-center text-center">
      {/* Illustration */}
      <motion.div
        className="text-6xl text-primary-600 mb-8 animate-fade-in"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaExclamationTriangle />
      </motion.div>
      
      {/* Titre */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
        Oups ! Page Non Trouvée
      </h1>
      
      {/* Description */}
      <p className="text-gray-600 mb-8">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      
      {/* Bouton Retour à l'Accueil */}
      <motion.button
        className="btn btn-primary flex items-center gap-2 hover-lift"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaHome /> Retour à l&apos;Accueil
      </motion.button>
    </div>
  );
};

export default NotFoundPage;
