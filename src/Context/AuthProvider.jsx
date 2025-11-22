import { useState, useEffect } from "react";
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

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        createUserWithEmailAndPasswordFunction,
        signInWithEmailAndPasswordFunction,
        GoogleSignIn,
        SignOutFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
