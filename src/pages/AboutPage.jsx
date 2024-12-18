import  'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - DBD Translations</title>
        <meta name="description" content="Learn more about DBD Translations and our commitment to excellence in language services." />
      </Helmet>

      <main className="pt-20">
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About DBD Translations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your trusted partner in professional translation services
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;