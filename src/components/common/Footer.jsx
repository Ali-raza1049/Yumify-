import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-yellow-500 font-bold text-xl mb-4">Yumify</h3>
          <p className="text-gray-400">
            Yumify is a modern restaurant offering a fusion of global flavors
            with a local twist. Fresh, high-quality meals delivered with love.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/customer" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/customer/about" className="hover:text-yellow-500">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/customer/restaurants"
                className="hover:text-yellow-500"
              >
                Restaurants
              </Link>
            </li>
            <li>
              <Link to="/customer/service" className="hover:text-yellow-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/customer/addcart" className="hover:text-yellow-500">
                Add to Cart
              </Link>
            </li>
            <li>
              <Link to="/customer/contact" className="hover:text-yellow-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>123 Main Street, City, Country</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>info@yumify.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Yumify. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
