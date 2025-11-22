import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            The Book Heaven
          </h2>
          <p className="text-sm sm:text-base">
            Your one-stop destination for discovering, exploring, and enjoying
            books from all genres. Read, learn, and grow with us.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/books" className="hover:text-white transition">Books</a></li>
            <li><a href="/categories" className="hover:text-white transition">Categories</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl sm:text-3xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm sm:text-base text-gray-500">
        <p>© {new Date().getFullYear()} The Book Heaven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
