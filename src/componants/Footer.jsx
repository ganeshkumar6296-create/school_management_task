import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Student Portal
            </h2>

            <p className="text-sm text-slate-400 leading-6">
              A modern platform for student registration,
              profile management and academic information.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/register"
                  className="hover:text-white transition"
                >
                  Register
                </a>
              </li>

              <li>
                <a
                  href="/login"
                  className="hover:text-white transition"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-3">
              Contact
            </h3>

            <div className="space-y-2 text-sm text-slate-400">
              <p>Dhanbad, Jharkhand</p>
              <p>+91 9922992299</p>
              <p>support@studentportal.com</p>

              <div className="flex items-center gap-4 pt-2 text-lg">
                <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />
                <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />
                <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
                <FaYoutube className="cursor-pointer hover:text-red-500 transition" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-4 text-center text-xs text-slate-500">
          © 2026 Student Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;