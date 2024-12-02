import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { useUserStore } from '../store/userStore';
import { Shield, Users, Settings } from 'lucide-react';
import { UserManagement } from './admin/UserManagement';

export const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const fetchUsers = useUserStore((state) => state.fetchUsers);

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchUsers();
    }
  }, [user, fetchUsers]);

  const adminFeatures = (
    <div className="space-y-6">
      <UserManagement />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <Settings className="h-8 w-8 text-indigo-600 mb-3" />
          <h3 className="text-lg font-semibold">System Settings</h3>
          <p className="text-gray-600">Configure system parameters</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <Users className="h-8 w-8 text-indigo-600 mb-3" />
          <h3 className="text-lg font-semibold">Role Management</h3>
          <p className="text-gray-600">Define and manage user roles</p>
        </div>
      </div>
    </div>
  );

  const moderatorFeatures = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-white rounded-lg shadow">
        <Users className="h-8 w-8 text-indigo-600 mb-3" />
        <h3 className="text-lg font-semibold">Content Moderation</h3>
        <p className="text-gray-600">Review and moderate user content</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <Shield className="h-8 w-8 text-indigo-600 mb-3" />
        <h3 className="text-lg font-semibold">User Reports</h3>
        <p className="text-gray-600">Handle user reports and issues</p>
      </div>
    </div>
  );

  const userFeatures = (
    <div className="p-4 bg-white rounded-lg shadow">
      <Users className="h-8 w-8 text-indigo-600 mb-3" />
      <h3 className="text-lg font-semibold">Profile Settings</h3>
      <p className="text-gray-600">Manage your profile and preferences</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Role: {user?.role}</p>
        </div>

        {user?.role === 'admin' && adminFeatures}
        {user?.role === 'moderator' && moderatorFeatures}
        {user?.role === 'user' && userFeatures}
      </div>
    </div>
  );
};