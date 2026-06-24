// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const students = JSON.parse(localStorage.getItem("students")) || [];

//     const student = students.find(
//       (item) => item.email === email && item.password === password,
//     );

//     if (student) {
//       localStorage.setItem("role", "student");

//       localStorage.setItem("currentStudent", JSON.stringify(student));

//       navigate("/student-dashboard");
//     } else {
//       toast.error("Invalid Credentials");
//     }
//   };
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
//         <h2 className="text-3xl font-bold text-center text-slate-800">
//           Welcome Back
//         </h2>

//         <p className="text-center text-gray-500 mt-2 mb-6">
//           Login to Student Portal
//         </p>

//         <form onSubmit={handleLogin} className="space-y-5">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email
//             </label>

//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>

//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <div className="mt-6 text-center text-gray-500 text-sm">
//           Admin Login:
//           <span className="font-semibold text-slate-700">
//             {" "}
//             admin@gmail.com / 123456
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;






import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

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

      toast.success("Login Successful!");

      navigate("/student-dashboard");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl">
            🎓
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-slate-900">
          Welcome Back
        </h2>

        <p className="text-center text-slate-500 mt-2 mb-8">
          Login to your student account
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer Text */}
        <div className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="ml-2 text-slate-900 font-semibold cursor-pointer hover:underline"
          >
            Register Now
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;