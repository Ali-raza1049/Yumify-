<<<<<<< HEAD
import React, { useState } from "react";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api";
=======
import React from "react";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 6211ea6cc29eb992cc5d92c96aca9ee33c538407

export function Login() {
  const navigate = useNavigate();

<<<<<<< HEAD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      if (res.data.role === "Restaurant Owner") {
        navigate("/restaurant-owner");
      } else if (res.data.role === "Customer") {
        navigate("/customer");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
=======
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
>>>>>>> 6211ea6cc29eb992cc5d92c96aca9ee33c538407
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-100 via-orange-50 to-pink-50 p-6 mt-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left – Login Form */}
        <div className="p-10">
<<<<<<< HEAD
=======

          {/* Back to Home */}
>>>>>>> 6211ea6cc29eb992cc5d92c96aca9ee33c538407
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-orange-500 font-medium mb-6 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="text-gray-500 mt-2 mb-8">
            Login to continue ordering your favorite food
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
<<<<<<< HEAD
=======

>>>>>>> 6211ea6cc29eb992cc5d92c96aca9ee33c538407
            {/* Email */}
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Email Address"
<<<<<<< HEAD
                value={email}
                onChange={(e) => setEmail(e.target.value)}
=======
>>>>>>> 6211ea6cc29eb992cc5d92c96aca9ee33c538407
                required
                className="w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="password"
                placeholder="Password"
<<<<<<< HEAD
                value={password}
                onChange={(e) => setPassword(e.target.value)}
=======
>>>>>>> 6211ea6cc29eb992cc5d92c96aca9ee33c538407
                required
                className="w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-orange-500" />
                Remember me
              </label>
              <span className="text-orange-500 cursor-pointer font-medium">
                Forgot password?
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
<<<<<<< HEAD
              disabled={loading}
              className="w-full mt-4 py-3 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
=======
              className="w-full mt-4 py-3 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Sign In
>>>>>>> 6211ea6cc29eb992cc5d92c96aca9ee33c538407
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Right – Info Section */}
        <div className="hidden md:flex flex-col justify-center px-12 bg-linear-to-br from-orange-500 to-pink-500 text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Welcome back!
          </h1>
          <p className="text-lg opacity-95 max-w-sm">
            Login to explore restaurants, track your orders, and enjoy fast
            delivery anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
