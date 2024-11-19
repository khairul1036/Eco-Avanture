import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        navigate(location?.state ? location.state:"/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div
        id="regbg"
        className="bg-gray-100 flex justify-center items-center h-screen"
      >
        <div class="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            {/* <!-- Email Field --> */}
            <div class="mb-4">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* <!-- Password Field --> */}
            <div class="mb-6">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* <!-- Forgot Password Link --> */}
            <div class="mb-6 text-right">
              <a href="#" class="text-sm text-green-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* <!-- Login Button --> */}
            <button
              type="submit"
              class="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Login
            </button>
          </form>

          {/* <!-- Divider --> */}
          <div class="my-4 flex items-center">
            <hr class="flex-grow border-gray-300" />
            <span class="px-2 text-sm text-gray-500">or</span>
            <hr class="flex-grow border-gray-300" />
          </div>

          {/* <!-- Google Sign-In Button --> */}
          <button class="w-full flex items-center justify-center bg-white border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Icon"
              class="w-5 h-5 mr-3"
            />
            Sign in with Google
          </button>

          {/* <!-- Signup Link --> */}
          <p class="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/auth/register" class="text-green-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
