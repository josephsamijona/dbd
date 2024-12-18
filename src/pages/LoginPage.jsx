import  'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login - DBD Translations</title>
        <meta name="description" content="Login to your DBD Translations account." />
      </Helmet>

      <main className="pt-20">
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                create a new account
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              {/* Add your login form here */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;