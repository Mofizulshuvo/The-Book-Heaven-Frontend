import React, { useContext, useEffect, useState } from 'react';
import { IoLibrary, IoPeople, IoStar, IoTrendingUp, IoAdd, IoEye } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Loader from '../../components/ui/Loader';

const Overview = () => {
  const { user, isAdmin } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [recentBooks, setRecentBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch all books for stats
        const booksRes = await fetch('https://the-book-heaven-server-1.onrender.com/Book-data');
        const allBooks = await booksRes.json();
        
        // Fetch recent books
        const recentRes = await fetch('https://the-book-heaven-server-1.onrender.com/Book-latest');
        const recentData = await recentRes.json();
        
        // Calculate stats
        const totalBooks = allBooks.length;
        const userBooks = isAdmin() ? allBooks : allBooks.filter(book => book.userEmail === user?.email);
        const avgRating = allBooks.reduce((sum, book) => sum + (parseFloat(book.rating) || 0), 0) / totalBooks;
        const uniqueAuthors = new Set(allBooks.map(book => book.author)).size;
        
        setStats({
          totalBooks: isAdmin() ? totalBooks : userBooks.length,
          totalUsers: isAdmin() ? 150 : null, // Mock data for admin
          avgRating: avgRating.toFixed(1),
          uniqueAuthors: isAdmin() ? uniqueAuthors : null,
          myBooks: userBooks.length,
          recentlyAdded: recentData.data?.length || 0
        });
        
        setRecentBooks(recentData.data?.slice(0, 4) || []);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user, isAdmin]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <Loader size="lg" text="Loading dashboard..." />
      </div>
    );
  }

  const adminStats = [
    { label: 'Total Books', value: stats?.totalBooks || 0, icon: IoLibrary, color: 'text-sky-600', bg: 'bg-sky-50' },
    { label: 'Total Users', value: stats?.totalUsers || 0, icon: IoPeople, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Average Rating', value: stats?.avgRating || '0.0', icon: IoStar, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Unique Authors', value: stats?.uniqueAuthors || 0, icon: IoTrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const userStats = [
    { label: 'My Books', value: stats?.myBooks || 0, icon: IoLibrary, color: 'text-sky-600', bg: 'bg-sky-50' },
    { label: 'Recently Added', value: stats?.recentlyAdded || 0, icon: IoAdd, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Average Rating', value: stats?.avgRating || '0.0', icon: IoStar, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  ];

  const displayStats = isAdmin() ? adminStats : userStats;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user?.displayName || 'User'}!
        </h1>
        <p className="text-sky-100">
          {isAdmin() 
            ? 'Manage your book collection and monitor platform activity.'
            : 'Track your reading journey and discover new books.'
          }
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayStats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Books */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Books
            </h2>
            <Link to="/AllBooks">
              <Button variant="outline" size="sm" icon={<IoEye className="w-4 h-4" />}>
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {recentBooks.map((book) => (
              <div key={book._id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-12 h-16 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {book.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    by {book.author}
                  </p>
                  <div className="flex items-center mt-1">
                    <IoStar className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-xs text-gray-500">{book.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <Link to="/AddBooks" className="block">
              <Button variant="outline" size="sm" fullWidth icon={<IoAdd className="w-4 h-4" />}>
                Add New Book
              </Button>
            </Link>
            <Link to={isAdmin() ? "/dashboard/all-books" : "/dashboard/my-books"} className="block">
              <Button variant="outline" size="sm" fullWidth icon={<IoLibrary className="w-4 h-4" />}>
                {isAdmin() ? 'Manage All Books' : 'View My Books'}
              </Button>
            </Link>
            {isAdmin() && (
              <Link to="/dashboard/users" className="block">
                <Button variant="outline" size="sm" fullWidth icon={<IoPeople className="w-4 h-4" />}>
                  Manage Users
                </Button>
              </Link>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Overview;