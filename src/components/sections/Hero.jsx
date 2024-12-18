import 'react';
import { ArrowRight, Globe2, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const features = [
    'Professional Translation Services',
    'Native Language Experts',
    '100+ Languages Available'
  ];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Translation Services
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Breaking language barriers worldwide. Connect with global audiences through precise and culturally-sensitive translations.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button 
                variant="primary" 
                size="lg"
                icon={ArrowRight}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Animation */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-xl animate-pulse" />
              <div className="relative w-full h-96 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
                <Globe2 className="w-32 h-32 text-indigo-600 animate-float" />
                
                {/* Floating Elements */}
                {['EN', 'FR', 'ES', 'DE', 'IT', 'PT'].map((lang, index) => (
                  <div
                    key={lang}
                    className="absolute text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-full shadow-md animate-float"
                    style={{
                      top: `${20 + (index * 15)}%`,
                      left: `${10 + (index * 12)}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Style for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;