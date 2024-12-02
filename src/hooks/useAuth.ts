import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { validateEmail, validatePassword, validateName } from '../utils/validation';

export const useAuth = () => {
  const navigate = useNavigate();
  const { login, register, logout, loginWithGoogle } = useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }
    if (!validatePassword(password)) {
      throw new Error('Password must be at least 6 characters');
    }
    
    await login(email, password);
    navigate('/dashboard');
  };

  const handleRegister = async (email: string, password: string, name: string) => {
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }
    if (!validatePassword(password)) {
      throw new Error('Password must be at least 6 characters');
    }
    if (!validateName(name)) {
      throw new Error('Name must be at least 2 characters');
    }

    await register(email, password, name);
    navigate('/dashboard');
  };

  const handleGoogleLogin = async (accessToken: string) => {
    await loginWithGoogle(accessToken);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return {
    handleLogin,
    handleRegister,
    handleGoogleLogin,
    handleLogout
  };
};