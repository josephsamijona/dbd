// src/components/Settings.jsx
import  { useState } from 'react';
import { FaSave, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Logique pour basculer le thème sombre
    if (!darkMode) {
      document.documentElement.classList.add('auto-dark');
    } else {
      document.documentElement.classList.remove('auto-dark');
    }
  };

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
    // Logique pour gérer les notifications
  };

  return (
    <div className="container-custom section-padding">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-tight text-primary-600">
          Paramètres
        </h1>
      </header>
      
      {/* Settings Section */}
      <section className="flex flex-col gap-6">
        {/* Mode Sombre */}
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-xl font-heading">Mode Sombre</h2>
          <motion.button 
            className="text-green-500 focus:outline-none"
            onClick={handleDarkModeToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Basculez le mode sombre"
          >
            {darkMode ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />}
          </motion.button>
        </div>
        
        {/* Notifications */}
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-xl font-heading">Notifications</h2>
          <motion.button 
            className={`focus:outline-none ${notifications ? 'text-green-500' : 'text-gray-500'}`}
            onClick={handleNotificationsToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Basculez les notifications"
          >
            {notifications ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />}
          </motion.button>
        </div>
        
        {/* Autres Paramètres */}
        {/* Ajoutez d'autres paramètres ici */}
      </section>
      
      {/* Footer */}
      <footer className="text-center mt-16">
        <motion.button 
          className="btn btn-primary flex items-center justify-center gap-2 hover-lift"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaSave /> Sauvegarder les Modifications
        </motion.button>
      </footer>
    </div>
  );
};

export default Settings;
