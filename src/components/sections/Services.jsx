import  'react';
import { 
  FileText, 
  Globe2, 
  MessageSquare, 
  Bookmark,
  Monitor,
  BookOpen
} from 'lucide-react';
import Card from '../ui/Card';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Document Translation',
      description: 'Professional translation of business, legal, and technical documents with precision and attention to detail.',
      features: ['Legal Documents', 'Technical Manuals', 'Marketing Materials']
    },
    {
      icon: Globe2,
      title: 'Website Localization',
      description: 'Complete website and digital content localization to reach global audiences effectively.',
      features: ['Content Adaptation', 'SEO Optimization', 'Cultural Alignment']
    },
    {
      icon: MessageSquare,
      title: 'Interpretation Services',
      description: 'Real-time interpretation services for meetings, conferences, and business negotiations.',
      features: ['Simultaneous', 'Consecutive', 'Remote']
    },
    {
      icon: Monitor,
      title: 'Software Localization',
      description: 'Comprehensive software and app localization services for global market reach.',
      features: ['UI/UX Translation', 'String Localization', 'Testing']
    },
    {
      icon: Bookmark,
      title: 'Content Creation',
      description: 'Multilingual content creation and adaptation for your global marketing needs.',
      features: ['Blog Posts', 'Social Media', 'Email Campaigns']
    },
    {
      icon: BookOpen,
      title: 'Academic Translation',
      description: 'Specialized translation services for academic and research documents.',
      features: ['Research Papers', 'Theses', 'Academic Journals']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive translation and localization solutions to help your business communicate effectively across cultures and borders.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              variant="elevated"
              isHoverable
              className="group"
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                  <service.icon className="w-6 h-6 text-indigo-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100">
                <button className="text-indigo-600 font-medium flex items-center hover:text-indigo-700 transition-colors">
                  Learn More
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;