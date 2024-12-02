import { useState } from 'react';
import { User, Role } from '../../types/auth';
import { useUserStore } from '../../store/userStore';
import { Shield, Check } from 'lucide-react';

export const UserManagement = () => {
  const { users, updateUserRole } = useUserStore();
  const [selectedRole, setSelectedRole] = useState<Record<string, Role>>({});
  const [successMessage, setSuccessMessage] = useState('');

  const roles: Role[] = ['admin', 'moderator', 'user'];

  const handleRoleChange = async (userId: string, newRole: Role) => {
    setSelectedRole((prev) => ({ ...prev, [userId]: newRole }));
  };

  const handleUpdateRole = async (user: User) => {
    try {
      await updateUserRole(user.id, selectedRole[user.id] || user.role);
      setSuccessMessage(`Updated ${user.name}'s role successfully`);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center mb-6">
        <Shield className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">User Role Management</h2>
      </div>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
          <Check className="h-5 w-5 mr-2" />
          {successMessage}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                New Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={selectedRole[user.id] || user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value as Role)}
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleUpdateRole(user)}
                    className="text-indigo-600 hover:text-indigo-900"
                    disabled={!selectedRole[user.id] || selectedRole[user.id] === user.role}
                  >
                    Update Role
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};