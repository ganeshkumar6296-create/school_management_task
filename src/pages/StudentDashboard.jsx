// import { useNavigate } from "react-router-dom";

// function StudentDashboard() {
//   const student = JSON.parse(
//     localStorage.getItem("currentStudent")
//   );

//   const navigate = useNavigate();

// const handleLogout = () => {
//   localStorage.removeItem("role");
//   localStorage.removeItem("currentStudent");

//   navigate("/login");
// };

//   return (
//     <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      
//       {/* Header */}
//  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg mb-8 flex justify-between items-center">
//   <div>
//     <h1 className="text-3xl font-bold">
//       Student Dashboard
//     </h1>

//     <p className="mt-2 text-blue-100">
//       Welcome back, {student?.name}
//     </p>
//   </div>

//   <button
//     onClick={handleLogout}
//     className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold"
//   >
//     Logout
//   </button>
// </div>

//       {/* Profile Card */}
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
//         <div className="bg-slate-800 text-white p-6">
//           <div className="flex flex-col items-center">
            
//             <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-4xl font-bold">
//               {student?.name?.charAt(0).toUpperCase()}
//             </div>

//             <h2 className="mt-4 text-2xl font-bold">
//               {student?.name}
//             </h2>

//             <p className="text-gray-300">
//               Student Profile
//             </p>
//           </div>
//         </div>

//         {/* Student Details */}
//         <div className="p-6 grid md:grid-cols-2 gap-6">
          
//           <div className="bg-slate-50 p-4 rounded-xl border">
//             <h3 className="text-gray-500 text-sm">
//               Enrollment Number
//             </h3>

//             <p className="text-lg font-semibold mt-1">
//               {student?.enroll}
//             </p>
//           </div>

//           <div className="bg-slate-50 p-4 rounded-xl border">
//             <h3 className="text-gray-500 text-sm">
//               Phone Number
//             </h3>

//             <p className="text-lg font-semibold mt-1">
//               {student?.phone}
//             </p>
//           </div>

//           <div className="bg-slate-50 p-4 rounded-xl border">
//             <h3 className="text-gray-500 text-sm">
//               Email Address
//             </h3>

//             <p className="text-lg font-semibold mt-1">
//               {student?.email}
//             </p>
//           </div>

//           <div className="bg-slate-50 p-4 rounded-xl border">
//             <h3 className="text-gray-500 text-sm">
//               Student ID
//             </h3>

//             <p className="text-lg font-semibold mt-1">
//               {student?.id}
//             </p>
//           </div>

//           <div className="bg-slate-50 p-4 rounded-xl border md:col-span-2">
//             <h3 className="text-gray-500 text-sm">
//               Address
//             </h3>

//             <p className="text-lg font-semibold mt-1">
//               {student?.address}
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;




















import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const student = JSON.parse(
    localStorage.getItem("currentStudent")
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("currentStudent");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">

      {/* Header */}
      <div className="max-w-6xl mx-auto bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl mb-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h1 className="text-3xl font-bold">
            Student Dashboard
          </h1>

          <p className="text-slate-300 mt-2">
            Welcome back, {student?.name}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-medium transition"
        >
          Logout
        </button>

      </div>

      {/* Profile Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">

        {/* Top Profile Section */}
        <div className="bg-slate-900 text-white p-8">

          <div className="flex flex-col items-center">

            <div className="w-24 h-24 rounded-full bg-white text-slate-900 flex items-center justify-center text-4xl font-bold shadow-lg">
              {student?.name?.charAt(0).toUpperCase()}
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              {student?.name}
            </h2>

            <p className="text-slate-300">
              Student Profile
            </p>

          </div>

        </div>

        {/* Details */}
        <div className="p-6 md:p-8">

          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <p className="text-sm text-slate-500">
                Enrollment Number
              </p>

              <h4 className="text-lg font-semibold text-slate-900 mt-1">
                {student?.enroll}
              </h4>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <p className="text-sm text-slate-500">
                Phone Number
              </p>

              <h4 className="text-lg font-semibold text-slate-900 mt-1">
                {student?.phone}
              </h4>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <p className="text-sm text-slate-500">
                Email Address
              </p>

              <h4 className="text-lg font-semibold text-slate-900 mt-1 break-all">
                {student?.email}
              </h4>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <p className="text-sm text-slate-500">
                Student ID
              </p>

              <h4 className="text-lg font-semibold text-slate-900 mt-1">
                {student?.id}
              </h4>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl md:col-span-2">
              <p className="text-sm text-slate-500">
                Address
              </p>

              <h4 className="text-lg font-semibold text-slate-900 mt-1">
                {student?.address}
              </h4>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;