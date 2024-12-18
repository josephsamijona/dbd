import  'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>DBD Translations - Professional Translation Services</title>
        <meta name="description" content="Professional translation services for businesses worldwide. Document translation, website localization, and interpretation services." />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '100+', label: 'Languages' },
                { number: '10K+', label: 'Projects Completed' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '15+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Client Testimonials</h2>
              <p className="mt-4 text-lg text-gray-600">What our clients say about our services</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Excellent service and attention to detail. Our project was delivered on time and exceeded expectations.",
                  author: "John Smith",
                  company: "Tech Solutions Inc."
                },
                {
                  quote: "The team's expertise in technical translation is outstanding. They understand our industry perfectly.",
                  author: "Sarah Johnson",
                  company: "Global Manufacturing"
                },
                {
                  quote: "Professional, efficient, and reliable. DBD has been crucial in our international expansion.",
                  author: "Michael Brown",
                  company: "E-commerce Solutions"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <blockquote className="text-gray-600 italic mb-4">{testimonial.quote}</blockquote>
                  <cite className="not-italic">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-indigo-600">{testimonial.company}</div>
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Go Global?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your journey to reaching international audiences today. Get in touch for a free consultation.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;