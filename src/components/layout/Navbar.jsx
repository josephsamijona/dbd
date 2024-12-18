import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Languages, 
  Globe2, 
  ChevronDown, 
  Phone,
  MessageSquare 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('FR');

  // Scroll handling for background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Services', href: '#services', icon: Globe2 },
    { name: 'Expertise', href: '#expertise', icon: Languages },
    { name: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <Languages className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              DBD Translations
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                <link.icon className="h-4 w-4 mr-2" />
                {link.name}
              </a>
            ))}

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                <Globe2 className="h-4 w-4" />
                <span>{selectedLanguage}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {['FR', 'EN', 'ES', 'DE'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 w-full text-left"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>Free Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <link.icon className="h-5 w-5 mr-3" />
              {link.name}
            </a>
          ))}
          
          {/* Mobile Language Selector */}
          <div className="px-3 py-2">
            <div className="flex items-center justify-between text-gray-700">
              <span className="flex items-center">
                <Globe2 className="h-5 w-5 mr-3" />
                Language
              </span>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="ml-2 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                {['FR', 'EN', 'ES', 'DE'].map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile CTA */}
          <a
            href="#contact"
            className="flex items-center justify-center w-full px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="h-5 w-5 mr-2" />
            Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
