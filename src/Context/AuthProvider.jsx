import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(auth.currentUser);

  const createUserWithEmailAndPasswordFunction = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Created a new account !");
        toast.success("Account Created Successfully!");
      })
      .catch((error) => {
        const errorMessage =
          "Already have an Account with this Email! Try to Log in!";
        toast(errorMessage);
      });
  };

  const signInWithEmailAndPasswordFunction = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Logged in successfully!");
        // const user = res.user;
        setUser(auth.currentUser);
        toast.success("You Logged in Successfully!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = "Wrong Email/Password. Try Again!";
        toast.error(errorMessage);
      });
  };

  const SignOutFunction = () => {
    return signOut(auth)
      .then(() => {
        toast.success("You Signed Out");
        setUser(null);
      })
      .catch((error) => {
        const Error = error.message;
        toast.error(Error);
      });
  };

  //Google Signed in
  // import { GoogleAuthProvider } from "firebase/auth";
  const provider = new GoogleAuthProvider();

  const GoogleSignIn = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(auth.currentUser);
        toast.success("Google Logged in Successfully!");
        // IdP data available using getAdditionalUserInfo(result)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        toast.error(errorMessage);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const [AllBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const AllBooks = fetch("http://localhost:5000/Book-data")
      .then((res) => res.json())
      .then((data) => setAllBooks(data) );

  }, []);

  const value = {
    createUserWithEmailAndPasswordFunction,
    signInWithEmailAndPasswordFunction,
    GoogleSignIn,
    SignOutFunction,
    user,
    setUser,
    AllBooks,
  };

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};
export default AuthProvider;
