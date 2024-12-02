import { create } from 'zustand';
import { AuthState } from '../types/auth';
import { mockApi } from '../services/mockApi';
import { STORAGE_KEYS } from '../config/constants';
import { parseAuthToken } from '../utils/auth';

const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
const initialUser = storedToken ? parseAuthToken(storedToken) : null;

export const useAuthStore = create<AuthState>((set) => ({
  user: initialUser,
  token: storedToken,
  isAuthenticated: !!storedToken,

  login: async (email: string, password: string) => {
    try {
      const { token, user } = await mockApi.login(email, password);
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      set({ user, token, isAuthenticated: true });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  loginWithGoogle: async (accessToken: string) => {
    try {
      const { token, user } = await mockApi.loginWithGoogle(accessToken);
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      set({ user, token, isAuthenticated: true });
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    set({ user: null, token: null, isAuthenticated: false });
  },

  register: async (email: string, password: string, name: string) => {
    try {
      const { token, user } = await mockApi.register(email, password, name);
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      set({ user, token, isAuthenticated: true });
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
}));