import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { Navigate } from "react-router";

const SignUp = () => {
  const {
    createUserWithEmailAndPasswordFunction,
    signInWithEmailAndPasswordFunction,
    GoogleSignIn,
    SignOutFunction,
  } = useContext(AuthContext);

 
 const HandldeSignUp=(e)=>{
    e.preventDefault();
    const form=e.target;

    const name=form.name.value;
    const image=form.imageUrl.value;
    const email=form.email.value;
    const password=form.password.value;

    createUserWithEmailAndPasswordFunction(email,password);
    // <Navigate to="/"/>
 }


 const HandleGoogleSignin=()=>{
 GoogleSignIn();
 }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="flex flex-col gap-4" onSubmit={HandldeSignUp}>
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        <button
          type="button"
          className="flex items-center justify-center w-full border py-2 rounded hover:bg-gray-100 transition gap-2"
          onClick={HandleGoogleSignin}
        >
          <FcGoogle className="text-xl"/>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
