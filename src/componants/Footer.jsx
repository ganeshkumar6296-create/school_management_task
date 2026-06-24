import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Student Portal
          </h2>
          <p className="text-gray-400">
            Student Portal is a platform where students can
            register, manage their profiles, and access
            important information easily.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Important Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="/register" className="hover:text-white">
                Register
              </a>
            </li>

            <li>
              <a href="/login" className="hover:text-white">
                Login
              </a>
            </li>

            <li>
              <a href="/admin" className="hover:text-white">
                Admin Panel
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>📍 Dhanbad, Jharkhand, India</p>

            <p>📞 +91 9922992299</p>

            <p>✉️ support@studentportal.com</p>

            <div className=" flex items-center gap-6">
                <p className="text-base">Follow us:</p>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-400">
          © 2026 Student Portal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;