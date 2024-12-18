// src/components/UserProfile.jsx
import  'react';
import { FaEdit, FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';

const UserProfile = () => {
  return (
    <div className="container-custom section-padding">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-tight text-primary-600">
          Profil Utilisateur
        </h1>
      </header>
      
      {/* Profile Section */}
      <section className="flex flex-col items-center">
        {/* Avatar */}
        <div className="relative mb-8">
          <img 
            src="/path/to/avatar.jpg" 
            alt="Avatar Utilisateur" 
            className="w-36 h-36 rounded-full border-4 border-primary-600 object-cover"
          />
          <motion.button 
            className="absolute bottom-0 right-0 bg-secondary-600 text-white rounded-full p-2 hover-lift focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Changer l'avatar"
          >
            <FaCamera />
          </motion.button>
        </div>
        
        {/* Informations */}
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-heading">Nom</h2>
            <p className="text-gray-600">Jean Dupont</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-heading">Email</h2>
            <p className="text-gray-600">jean.dupont@example.com</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-heading">Rôle</h2>
            <p className="text-gray-600">Administrateur</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="text-center mt-16">
        <motion.button 
          className="btn btn-primary flex items-center justify-center gap-2 hover-lift"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEdit /> Modifier le Profil
        </motion.button>
      </footer>
    </div>
  );
};

export default UserProfile;
