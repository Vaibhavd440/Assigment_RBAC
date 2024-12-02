import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, Shield, Users, Settings } from 'lucide-react';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to Our Platform
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join our community to access exclusive features and content. Sign in to your account or create a new one to get started.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </button>
            <button
              onClick={() => navigate('/register')}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 border-indigo-600 md:text-lg"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Register
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <Shield className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-center text-lg font-medium text-gray-900">Secure Access</h3>
                <p className="mt-4 text-center text-gray-500">
                  Advanced security measures to protect your data and privacy
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-center text-lg font-medium text-gray-900">Role-Based Access</h3>
                <p className="mt-4 text-center text-gray-500">
                  Different permission levels for various user roles
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <Settings className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-center text-lg font-medium text-gray-900">Customizable</h3>
                <p className="mt-4 text-center text-gray-500">
                  Personalize your experience with custom settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};