import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-lg md:text-xl font-bold text-white">
            Student Portal
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/"
              className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-lg transition"
            >
              Home
            </Link>

            <Link
              to="/register"
              className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-lg transition"
            >
              Register
            </Link>

            <Link
              to="/login"
              className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-lg transition"
            >
              Login
            </Link>

            <Link
              to="/student-dashboard"
              className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-lg transition"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col p-4 gap-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white py-2"
            >
              Home
            </Link>

            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white py-2"
            >
              Register
            </Link>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white py-2"
            >
              Login
            </Link>

            <Link
              to="/student-dashboard"
              onClick={() => setOpen(false)}
              className="bg-indigo-600 text-white text-center py-2 rounded-lg mt-2"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
