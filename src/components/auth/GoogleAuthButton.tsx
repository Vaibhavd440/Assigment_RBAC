import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export const GoogleAuthButton = () => {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuthStore();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        await loginWithGoogle(response.access_token);
        navigate('/dashboard');
      } catch (error) {
        console.error('Google login error:', error);
      }
    },
    onError: () => {
      console.error('Google login failed');
    }
  });

  return (
    <button
      onClick={() => login()}
      type="button"
      className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt="Google"
        className="w-5 h-5 mr-2"
      />
      Continue with Google
    </button>
  );
};