import { useState, useEffect, useCallback } from "react";
import { auth } from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import { toast } from "react-toastify";

// Admin email - only admin@bookheaven.com has admin access
const ADMIN_EMAILS = ['admin@bookheaven.com'];

// Helper function to normalize email for comparison
const normalizeEmail = (email) => {
  if (!email) return '';
  return email.toLowerCase().trim();
};

// Helper function to check if email is admin
const checkIsAdmin = (email) => {
  const normalizedEmail = normalizeEmail(email);
  const normalizedAdminEmails = ADMIN_EMAILS.map(e => normalizeEmail(e));
  return normalizedAdminEmails.includes(normalizedEmail);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adminStatus, setAdminStatus] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Add role to user object
        const isAdminUser = checkIsAdmin(currentUser.email);
        const userWithRole = {
          ...currentUser,
          role: isAdminUser ? 'admin' : 'user'
        };
        
        setUser(userWithRole);
        setAdminStatus(isAdminUser);
      } else {
        setUser(null);
        setAdminStatus(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const createUserWithEmailAndPasswordFunction = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Account Created Successfully!");
        return signOut(auth);
      })
      .catch(() => toast.error("Already have an account with this email!"));

  const signInWithEmailAndPasswordFunction = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        return true;
      })
      .catch(() => {
        toast.error("Wrong Email/Password. Try Again!");
        return false;
      });

  const SignOutFunction = () =>
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully!");
        setUser(null);
      })
      .catch((err) => toast.error(err.message));

  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Logged in with Google!");
        return true;
      })
      .catch((err) => {
        toast.error(err.message);
        return false;
      });
  };

  const isAdmin = useCallback(() => {
    return adminStatus;
  }, [adminStatus]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        createUserWithEmailAndPasswordFunction,
        signInWithEmailAndPasswordFunction,
        GoogleSignIn,
        SignOutFunction,
        isAdmin,
        adminStatus, // Add this for debugging
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
