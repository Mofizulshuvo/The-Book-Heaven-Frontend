import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import AdminDebug from '../Components/AdminDebug';

const AdminTest = () => {
  const { user, isAdmin } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Admin Test Page
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            This page helps you test the admin functionality
          </p>
        </div>

        <div className="space-y-6">
          <AdminDebug />

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Admin Status</h2>
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-medium">Current Status:</span>{' '}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isAdmin() 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
                  {isAdmin() ? 'ADMIN' : 'USER'}
                </span>
              </p>
              
              {user && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Logged in as: {user.email}
                </p>
              )}
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>1. Make sure you're logged in with <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">admin@bookheaven.com</code></p>
              <p>2. Check the debug info above to see your role</p>
              <p>3. If you're admin, you should see "ADMIN" status</p>
              <p>4. Try accessing the dashboard to see admin menu items</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Link 
              to="/dashboard" 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Go to Dashboard
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTest;