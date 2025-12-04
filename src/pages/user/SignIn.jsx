import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaFacebookF } from "react-icons/fa"; // Facebook icon

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleBack = () => window.history.back();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to from-yellow-200 via-pink-200 to-red-200 p-4 mt-12 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-pink-100 relative"
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className=" absolute left-4 top-4 flex items-center gap-1 text-pink-600 hover:text-pink-700 transition font-medium"
        >
          <ArrowLeft size={20} /> Back
        </button>

        {/* Header */}
        <div className="text-center mb-6 mt-6">
          <h1 className="text-4xl font-bold text-orange-700 ">Yumify</h1>
          <p className="text-orange-700  mt-1">Welcome back! Sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

           <button 
              type="submit"
           className="bg-yellow-400 text-orange-700 font-bold px-5 py-2 rounded hover:bg-yellow-300 transition duration-300 w-full">
            Sign In
        </button>
        </form>

        {/* Social Media Login */}
        <div className="flex flex-col space-y-3 mt-6">
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-xl py-2 hover:bg-gray-100 transition gap-2">
            <FcGoogle size={20} /> Continue with Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-xl py-2 hover:bg-gray-100 transition gap-2">
            <FaFacebookF size={20} color="#1877F2" /> Continue with Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-5 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-600 font-medium">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
