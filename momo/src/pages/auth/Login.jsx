import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold text-green-600">
          You are already logged in ✅
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Email Login Form (optional custom backend) */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 text-center text-gray-400">OR</div>

        {/* Google Login */}
        <button
          onClick={() =>
            loginWithRedirect({
              authorizationParams: {
                connection: "google-oauth2",
              },
            })
          }
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition mb-3"
        >
          <FaGoogle className="text-red-500" />
          Login with Google
        </button>

        {/* Facebook Login */}
        <button
          onClick={() =>
            loginWithRedirect({
              authorizationParams: {
                connection: "facebook",
              },
            })
          }
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <FaFacebook />
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;