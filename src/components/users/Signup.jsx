import React, { useState } from "react";
import { User, Mail, Phone, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../api";

export function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (value.length < 3) return "Name must be at least 3 characters";
    return "";
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) return "Email is required";
    if (!regex.test(value)) return "Invalid email format";
    return "";
  };

  const validatePhone = (value) => {
    const regex = /^[0-9]{11}$/; 
    if (!value.trim()) return "Phone is required";
    if (!regex.test(value)) return "Invalid phone number";
    return "";
  };

  const validatePassword = (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const passwordError = validatePassword(password);

    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
      password: passwordError,
    });

    if (nameError || emailError || phoneError || passwordError) return;
    try {
      const res = await API.post("/auth/signup", {
        name,
        email,
        phone,
        password,
        role,
      });

      alert(res.data.message);
      navigate("/signin");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-100 via-orange-50 to-pink-50 p-6 mt-16">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left – Form */}

        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Create an account
          </h2>
          <p className="text-gray-500 mt-2 mb-8">
            Start ordering delicious food in minutes
          </p>
          <form className="space-y-5">
            <div className="space-y-5">
              {/* Full Name */}
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors({
                      ...errors,
                      name: validateName(e.target.value),
                    });
                  }}
                  className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({
                      ...errors,
                      email: validateEmail(e.target.value),
                    });
                  }}
                  className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setErrors({
                      ...errors,
                      phone: validatePhone(e.target.value),
                    });
                  }}
                  className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({
                      ...errors,
                      password: validatePassword(e.target.value),
                    });
                  }}
                  className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            {/* Role Selection */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Register as
              </p>
              <div className="flex gap-3">
                {["Customer", "Restaurant Owner"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRole(item)}
                    className={`flex-1 py-3 rounded-lg border text-sm font-medium transition ${
                      role === item
                        ? "bg-linear-to-r from-orange-500 to-pink-500 text-white border-transparent shadow"
                        : "bg-white hover:bg-orange-50 hover:border-orange-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-gray-600 mt-6">
              <input type="checkbox" className="mt-1 accent-orange-500" />
              <span>
                I agree to the{" "}
                <span className="text-orange-500 cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-orange-500 cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSignup}
              type="submit"
              className="w-full mt-8 py-3 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-orange-500 cursor-pointer font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Right – Info */}
        <div className="hidden md:flex flex-col justify-center px-12 bg-linear-to-br from-orange-500 to-pink-500 text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Food delivered <br /> right to you
          </h1>
          <p className="text-lg opacity-95 max-w-sm">
            Discover top restaurants, track your orders, and enjoy fast delivery
            from trusted partners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
