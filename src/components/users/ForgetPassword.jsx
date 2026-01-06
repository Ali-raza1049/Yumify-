import React, { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-100 via-orange-50 to-pink-50 p-6 mt-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        
        <div className="p-10">
          <Link
            to="/signin"
            className="flex items-center gap-2 text-sm text-orange-500 font-medium mb-6 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>

          <h2 className="text-3xl font-bold text-gray-900">
            Forgot Password
          </h2>
          <p className="text-gray-500 mt-2 mb-8">
            Enter your email address to reset your password
          </p>

          <form className="space-y-5">
            {/* Email only */}
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            
            <button
              type="button"
              className="w-full mt-4 py-3 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Remember your password?{" "}
            <Link
              to="/customer/signin"
              className="text-orange-500 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        
        <div className="hidden md:flex flex-col justify-center px-12 bg-linear-to-br from-orange-500 to-pink-500 text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Reset your password
          </h1>
          <p className="text-lg opacity-95 max-w-sm">
            Enter your email and we’ll help you get back into your account.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
