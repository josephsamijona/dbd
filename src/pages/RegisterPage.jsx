import  'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register - DBD Translations</title>
        <meta name="description" content="Create a new account with DBD Translations." />
      </Helmet>

      <main className="pt-20">
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Create an account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              {/* Add your registration form here */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;