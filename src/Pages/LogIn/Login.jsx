import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithEmailAndPasswordFunction, GoogleSignIn } = useContext(AuthContext);

  const redirectPath = location.state?.from || "/";

  const HandleLogIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!upperCase.test(password)) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }

    if (!lowerCase.test(password)) {
      toast.error("Password must include at least one lowercase letter.");
      return;
    }
   

    await signInWithEmailAndPasswordFunction(email, password);
    navigate(redirectPath, { replace: true });
  };

  const HandleGoogleSignin = async () => {
    await GoogleSignIn();
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="flex flex-col gap-4" onSubmit={HandleLogIn}>
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
            className="w-full bg-[#32BDF0] text-white py-2 rounded hover:bg-[#059dcf] transition"
          >
            Login
          </button>
        </form>

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
