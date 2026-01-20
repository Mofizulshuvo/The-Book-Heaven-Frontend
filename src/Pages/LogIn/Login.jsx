import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../Components/ui/Button";
import Input from "../../Components/ui/Input";
import Card from "../../Components/ui/Card";

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
   
    const success = await signInWithEmailAndPasswordFunction(email, password);
    if (success) {
      navigate(redirectPath, { replace: true });
    }
  };

  const HandleGoogleSignin = async () => {
    const success = await GoogleSignIn();
    if (success) {
      navigate(redirectPath, { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Welcome back! Please enter your details.
          </p>
        </div>

        <Card className="p-8">
          <form className="space-y-6" onSubmit={HandleLogIn}>
            <Input
              label="Email address"
              type="email"
              name="email"
              placeholder="Enter your email"
              fullWidth
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              fullWidth
              required
            />

            <Button type="submit" variant="primary" fullWidth size="lg">
              Sign in
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="button"
                variant="outline"
                fullWidth
                onClick={HandleGoogleSignin}
                icon={<FcGoogle className="w-5 h-5" />}
              >
                Continue with Google
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/SignUp')}
                className="font-medium text-sky-600 hover:text-sky-500"
              >
                Sign up
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
