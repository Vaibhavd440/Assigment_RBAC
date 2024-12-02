import { create } from 'zustand';
import { User, Role } from '../types/auth';
import { mockApi } from '../services/mockApi';

interface UserState {
  users: User[];
  fetchUsers: () => Promise<void>;
  updateUserRole: (userId: string, newRole: Role) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  
  fetchUsers: async () => {
    try {
      const users = await mockApi.getUsers();
      set({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },

  updateUserRole: async (userId: string, newRole: Role) => {
    try {
      const updatedUser = await mockApi.updateUserRole(userId, newRole);
      set((state) => ({
        users: state.users.map((user) =>
          user.id === userId ? updatedUser : user
        ),
      }));
    } catch (error) {
      console.error('Error updating user role:', error);
      throw error;
    }
  },
}));