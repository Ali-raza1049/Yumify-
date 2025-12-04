import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    navigate('/signin'); // Redirect to sign in
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient from-yellow-200 via-pink-200 to-red-200 p-4 m-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-pink-100 relative"
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute left-4 top-4 flex items-center gap-1 text-pink-600 hover:text-pink-700 transition font-medium"
        >
          <ArrowLeft size={20} /> Back
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-orange-700 ">Yumify</h1>
          <p className="text-orange-700  mt-1">Create your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
           className="bg-yellow-400  text-orange-700 font-bold px-5 py-2 rounded hover:bg-yellow-300 transition duration-300 w-full">
            Sign up
        </button>
        </form>

        <p className="text-center mt-5 text-sm text-orange-700 ">
          Already have an account?{" "}
          <Link to="/signin" className="text-orange-700  font-medium">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
