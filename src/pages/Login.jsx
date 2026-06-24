import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "admin") {
      if (
        email === "admin@gmail.com" &&
        password === "123456"
      ) {
        localStorage.setItem("role", "admin");
        navigate("/admin");
      } else {
        alert("Invalid Admin Credentials");
      }
    } else {
      const students =
        JSON.parse(localStorage.getItem("students")) || [];

      const student = students.find(
        (item) =>
          item.email === email &&
          item.password === password
      );

      if (student) {
        localStorage.setItem("role", "student");
        localStorage.setItem(
          "currentStudent",
          JSON.stringify(student)
        );

        navigate("/student-dashboard");
      } else {
        alert("Invalid Student Credentials");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        
        <h2 className="text-3xl font-bold text-center text-slate-800">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Login to Student Portal
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Role
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="student">
                Student
              </option>
              <option value="admin">
                Admin
              </option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Admin Login:
          <span className="font-semibold text-slate-700">
            {" "}
            admin@gmail.com / 123456
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;