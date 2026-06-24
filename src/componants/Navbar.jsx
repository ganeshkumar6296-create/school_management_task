import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-white">
          Student Portal
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className="text-white px-4 py-2 rounded-md hover:bg-slate-700">
            Home
          </Link>

          <Link to="/register" className="text-white px-4 py-2 rounded-md hover:bg-slate-700">
            Register
          </Link>

          <Link to="/admin" className="text-white px-4 py-2 rounded-md hover:bg-slate-700">
            Admin
          </Link>

          <Link to="/login" className="text-white px-4 py-2 rounded-md hover:bg-slate-700">
            Login
          </Link>

          <Link to="/student-dashboard" className="text-white px-4 py-2 rounded-md hover:bg-slate-700">
            Dashboard
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-slate-800 px-6 pb-4">
          <Link
            to="/"
            className="text-white py-3 border-b border-slate-700"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/register"
            className="text-white py-3 border-b border-slate-700"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>

          <Link
            to="/admin"
            className="text-white py-3 border-b border-slate-700"
            onClick={() => setOpen(false)}
          >
            Admin
          </Link>

          <Link
            to="/login"
            className="text-white py-3 border-b border-slate-700"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/student-dashboard"
            className="text-white py-3"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;