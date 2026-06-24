import Schoolimg from "../componants/Schoolimg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-slate-100">

      {/* Hero Section */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Student Management Portal
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Register students, manage profiles, access
            student records and simplify academic
            management with one platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
            >
              Register Student
            </Link>

            <Link
              to="/login"
              className="border border-slate-600 hover:bg-slate-800 px-6 py-3 rounded-lg"
            >
              Student Login
            </Link>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Portal Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Student Registration
            </h3>

            <p className="text-slate-600">
              Easily register students and store all
              required information securely.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Student Dashboard
            </h3>

            <p className="text-slate-600">
              Students can access and manage their
              profile information anytime.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Admin Management
            </h3>

            <p className="text-slate-600">
              Admin can view, edit, search and delete
              student records efficiently.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                500+
              </h3>
              <p className="mt-2 text-slate-300">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                50+
              </h3>
              <p className="mt-2 text-slate-300">
                Teachers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                25+
              </h3>
              <p className="mt-2 text-slate-300">
                Courses
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                10+
              </h3>
              <p className="mt-2 text-slate-300">
                Years
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Gallery */}
      <Schoolimg />

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl p-10 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Ready To Join?
          </h2>

          <p className="text-slate-300 mb-6">
            Create your account and access all student
            portal features today.
          </p>

          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
          >
            Get Started
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;