// src/components/DashboardHome.jsx
import  'react';
import { FaChartLine, FaUserFriends, FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DashboardHome = () => {
  return (
    <div className="container-custom section-padding">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-tight text-primary-600">
          Tableau de Bord
        </h1>
        <button className="btn btn-primary hover-lift">
          Créer un Rapport
        </button>
      </header>
      
      {/* Statistiques */}
      <section className="grid-responsive">
        {/* Carte Ventes */}
        <motion.div 
          className="card p-6 flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChartLine className="text-primary-600 text-4xl mb-4" />
          <h2 className="text-2xl font-heading mb-2">Ventes</h2>
          <p className="text-gray-600">+25% ce mois-ci</p>
        </motion.div>
        
        {/* Carte Utilisateurs */}
        <motion.div 
          className="card p-6 flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaUserFriends className="text-primary-600 text-4xl mb-4" />
          <h2 className="text-2xl font-heading mb-2">Utilisateurs</h2>
          <p className="text-gray-600">+10% d&apos;inscriptions</p>
        </motion.div>
        
        {/* Carte Paramètres */}
        <motion.div 
          className="card p-6 flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCog className="text-primary-600 text-4xl mb-4" />
          <h2 className="text-2xl font-heading mb-2">Paramètres</h2>
          <p className="text-gray-600">Personnalisez vos préférences</p>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="text-center mt-16 text-gray-500">
        &copy; 2024 Votre Entreprise. Tous droits réservés.
      </footer>
    </div>
  );
};

export default DashboardHome;
