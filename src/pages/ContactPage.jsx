import  { useEffect } from 'react';
import Contact from '../components/sections/Contact';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - DBD Translations</title>
        <meta name="description" content="Get in touch with DBD Translations for professional translation services. Request a quote or discuss your project with our experts." />
      </Helmet>

      <main>
        {/* Page Header */}
        <section className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to help. Reach out to us for a free consultation or quote.
            </p>
          </div>
        </section>

        {/* Offices Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
              <p className="text-gray-600">Find us at our convenient locations</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  city: "New York",
                  address: "123 Business Avenue, NY 10001",
                  phone: "+1 (555) 123-4567",
                  email: "nyc@dbdtranslations.com"
                },
                {
                  city: "London",
                  address: "456 Translation Lane, EC1A 1BB",
                  phone: "+44 20 7123 4567",
                  email: "london@dbdtranslations.com"
                },
                {
                  city: "Paris",
                  address: "789 Rue de la Traduction, 75001",
                  phone: "+33 1 23 45 67 89",
                  email: "paris@dbdtranslations.com"
                }
              ].map((office, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                      {office.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-indigo-600" />
                      {office.phone}
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-indigo-600" />
                      {office.email}
                    </p>
                    <p className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                      Mon - Fri: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find quick answers to common questions</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "What types of documents do you translate?",
                  answer: "We translate a wide range of documents including legal, technical, marketing, medical, and personal documents."
                },
                {
                  question: "How long does translation typically take?",
                  answer: "Turnaround time varies depending on the document length and complexity. We provide estimated completion times with each quote."
                },
                {
                  question: "Do you provide certified translations?",
                  answer: "Yes, we provide certified translations for official documents, legal papers, and academic records."
                },
                {
                  question: "What are your quality assurance processes?",
                  answer: "We follow a rigorous quality control process including translation, editing, and proofreading by native speakers."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;