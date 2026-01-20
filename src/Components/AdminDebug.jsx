import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';

const AdminDebug = () => {
  const { user, isAdmin, adminStatus } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
        <h3 className="font-bold">Debug Info: No User Logged In</h3>
      </div>
    );
  }

  // Direct admin check
  const ADMIN_EMAILS = ['admin@bookheaven.com'];
  const directAdminCheck = ADMIN_EMAILS.includes(user.email);

  return (
    <div className="p-4 bg-blue-100 border border-blue-400 rounded">
      <h3 className="font-bold mb-2">Admin Debug Info:</h3>
      <div className="space-y-1 text-sm">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Email Type:</strong> {typeof user.email}</p>
        <p><strong>Email Length:</strong> {user.email?.length}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Admin Status:</strong> {adminStatus ? 'YES' : 'NO'}</p>
        <p><strong>Is Admin (function):</strong> {isAdmin() ? 'YES' : 'NO'}</p>
        <p><strong>Direct Admin Check:</strong> {directAdminCheck ? 'YES' : 'NO'}</p>
        <p><strong>Admin Emails Array:</strong> {JSON.stringify(ADMIN_EMAILS)}</p>
        <p><strong>Email Match Test:</strong> {user.email === 'admin@bookheaven.com' ? 'EXACT MATCH' : 'NO MATCH'}</p>
        <p><strong>Display Name:</strong> {user.displayName || 'Not set'}</p>
        <p><strong>UID:</strong> {user.uid}</p>
      </div>
    </div>
  );
};

export default AdminDebug;