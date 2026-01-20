import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import { IoBookSharp, IoMenu, IoClose, IoSunny, IoMoon, IoPersonCircle, IoLogOut, IoSettings, IoLibrary, IoHome, IoAdd, IoGrid, IoBarChart } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const Navbar = () => {
  const { user, loading, SignOutFunction, adminStatus } = useContext(AuthContext);
  const { theme, toggleTheme, isDark } = useTheme();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        setEditing(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeHandler = (isActive) =>
    isActive 
      ? "text-primary-600 dark:text-primary-400 font-semibold border-b-2 border-primary-500" 
      : "text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400";

  if (loading) return null;

  const navigationItems = [
    { path: "/", label: "Home", icon: IoHome, public: true },
    { path: "/AllBooks", label: "All Books", icon: IoGrid, public: true },
    { path: "/AddBooks", label: "Add Books", icon: IoAdd, public: true },
    { path: "/MyBooks", label: "My Books", icon: IoLibrary, public: false },
    { path: "/dashboard", label: "Dashboard", icon: IoBarChart, public: false, adminOnly: true },
  ];

  const handleSave = () => {
    // Note: updateUser function needs to be implemented in AuthContext
    setEditing(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 shadow-sm"
    >
      <div className="px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="p-2 bg-primary-500 rounded-xl">
                <IoBookSharp className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                  The Book Heaven
                </h1>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => {
              if (!item.public && !user) return null;
              if (item.adminOnly && !adminStatus) return null;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200
                    ${activeHandler(isActive)}
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              icon={isDark ? <IoSunny className="w-5 h-5" /> : <IoMoon className="w-5 h-5" />}
              className="hidden sm:flex"
            />

            {/* User Menu or Auth Buttons */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(!open)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover border-2 border-primary-500"
                    />
                  ) : (
                    <IoPersonCircle className="w-8 h-8 text-neutral-400" />
                  )}
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                      {user.displayName || 'User'}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {adminStatus ? '👑 Admin' : 'User'} • {user.email}
                    </p>
                  </div>
                </motion.button>

                {/* User Dropdown */}
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-72 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                    >
                      <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
                        {!editing ? (
                          <div>
                            <h3 className="font-semibold text-neutral-900 dark:text-white">
                              {displayName || user.displayName || 'User'}
                            </h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                              {email || user.email}
                            </p>
                            {adminStatus && (
                              <div className="mt-1">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                                  👑 Administrator
                                </span>
                              </div>
                            )}
                            <div className="mt-3 flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setEditing(true)}
                                icon={<IoSettings className="w-4 h-4" />}
                                className="flex-1"
                              >
                                Edit Profile
                              </Button>
                              {adminStatus && (
                                <Link to="/dashboard" onClick={() => setOpen(false)}>
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    icon={<IoBarChart className="w-4 h-4" />}
                                  >
                                    Dashboard
                                  </Button>
                                </Link>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <input
                              type="text"
                              value={displayName}
                              onChange={(e) => setDisplayName(e.target.value)}
                              placeholder="Display Name"
                              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                            />
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email"
                              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                            />
                            <div className="flex space-x-2">
                              <Button
                                variant="primary"
                                size="sm"
                                onClick={handleSave}
                                className="flex-1"
                              >
                                Save
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setEditing(false)}
                                className="flex-1"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={SignOutFunction}
                          icon={<IoLogOut className="w-4 h-4" />}
                          className="w-full justify-start text-error-600 hover:bg-error-50 dark:hover:bg-error-900/20"
                        >
                          Sign Out
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link to="/LogIn">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/SignUp">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenu(!mobileMenu)}
              icon={mobileMenu ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
              className="lg:hidden"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-200 dark:border-neutral-700 py-4"
            >
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  if (!item.public && !user) return null;
                  if (item.adminOnly && !adminStatus) return null;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenu(false)}
                      className={({ isActive }) => `
                        flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                        ${isActive 
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                          : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        }
                      `}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
                
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 w-full"
                >
                  {isDark ? <IoSunny className="w-5 h-5" /> : <IoMoon className="w-5 h-5" />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>

                {/* Mobile Auth Buttons */}
                {!user && (
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700 space-y-2">
                    <Link to="/LogIn" onClick={() => setMobileMenu(false)}>
                      <Button variant="ghost" size="md" fullWidth>
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/SignUp" onClick={() => setMobileMenu(false)}>
                      <Button variant="primary" size="md" fullWidth>
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
