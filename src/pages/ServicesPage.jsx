import 'react';
import { Helmet } from 'react-helmet';
import Services from '../components/sections/Services';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - DBD Translations</title>
        <meta name="description" content="Comprehensive translation and localization services for businesses worldwide." />
      </Helmet>

      <main className="pt-20">
        <Services />
      </main>
    </>
  );
};

export default ServicesPage;