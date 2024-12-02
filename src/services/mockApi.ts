import { User, Role } from '../types/auth';
import { storage } from './storage';
import { generateAuthToken } from '../utils/auth';
import { API_DELAY } from '../config/constants';

// Initialize with default admin user if no users exist
const initializeDefaultUsers = () => {
  const users = storage.getUsers();
  if (users.length === 0) {
    storage.addUser({
      id: '1',
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin' as Role
    });
  }
};

initializeDefaultUsers();

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  async login(email: string, password: string) {
    await delay(API_DELAY);
    const user = storage.getUserByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const token = generateAuthToken(user);
    return { token, user };
  },

  async loginWithGoogle(accessToken: string) {
    await delay(API_DELAY);
    // In a real app, verify the token with Google
    const mockGoogleUser = {
      id: crypto.randomUUID(),
      email: 'google.user@example.com',
      name: 'Google User',
      role: 'user' as Role
    };
    
    const existingUser = storage.getUserByEmail(mockGoogleUser.email);
    if (!existingUser) {
      storage.addUser(mockGoogleUser);
    }
    
    const user = existingUser || mockGoogleUser;
    const token = generateAuthToken(user);
    return { token, user };
  },

  async register(email: string, password: string, name: string) {
    await delay(API_DELAY);
    if (storage.getUserByEmail(email)) {
      throw new Error('Email already exists');
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      name,
      role: 'user' as Role
    };

    storage.addUser(newUser);
    const token = generateAuthToken(newUser);
    return { token, user: newUser };
  },

  async getUsers(): Promise<User[]> {
    await delay(API_DELAY);
    return storage.getUsers();
  },

  async updateUserRole(userId: string, newRole: Role): Promise<User> {
    await delay(API_DELAY);
    const users = storage.getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    
    const updatedUser = { ...user, role: newRole };
    storage.updateUser(updatedUser);
    return updatedUser;
  }
};