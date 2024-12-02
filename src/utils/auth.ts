import { User } from '../types/auth';

export const generateAuthToken = (user: User): string => {
  return btoa(JSON.stringify(user));
};

export const parseAuthToken = (token: string): User | null => {
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
};