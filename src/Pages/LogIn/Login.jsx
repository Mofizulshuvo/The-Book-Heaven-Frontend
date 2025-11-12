import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../Context/AuthContext";

const Login = () => {
  const { signInWithEmailAndPasswordFunction, GoogleSignIn } =
    useContext(AuthContext);

  const HandleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPasswordFunction(email, password);
  };

  const HandleGoogleSignin = () => {
    GoogleSignIn();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}

        <form
          className="flex flex-col gap-4"
          onSubmit={HandleLogIn}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div className="text-sm text-gray-500 flex justify-center items-center gap-3">
            <h1 >Forget Password? </h1>
            <h1 className="underline hover:cursor-pointer">CLick Here</h1>
        </div>

        <div className="my-4 text-center text-gray-500">OR</div>

        <button
          type="button"
            onClick={HandleGoogleSignin}
          className="flex items-center justify-center w-full border py-2 rounded hover:bg-gray-100 transition gap-2"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
