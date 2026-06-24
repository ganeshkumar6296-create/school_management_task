// import { useEffect, useState } from "react";
// import StudentCard from "../componants/StudentCard";
// import DashboardCard from "../componants/DashboardCard";

// function Admin() {
//   const [students, setStudents] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("students")) || [];
//     setStudents(data);
//   }, []);

//   const deleteStudent = (id) => {
//     const updated = students.filter((item) => item.id !== id);

//     setStudents(updated);

//     localStorage.setItem("students", JSON.stringify(updated));
//   };

//   const filteredData = students.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.enroll.includes(search) ||
//       item.phone.includes(search)
//   );

//   return (
//     <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      
//       {/* Header */}
//       <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//         <h1 className="text-3xl font-bold text-slate-800">
//           Admin Dashboard
//         </h1>

//         <p className="text-slate-500 mt-2">
//           Manage all registered students
//         </p>
//       </div>

//       {/* Dashboard Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
//         <DashboardCard
//           title="Total Students"
//           value={students.length}
//         />

//         <DashboardCard
//           title="Search Results"
//           value={filteredData.length}
//         />

//         <DashboardCard
//           title="Active Records"
//           value={students.length}
//         />
//       </div>

//       {/* Search Box */}
//       <div className="bg-white rounded-xl shadow-md p-5 mb-8">
//         <input
//           type="text"
//           placeholder="Search by Name, Enrollment or Phone..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Student List */}
//       <div className="bg-white rounded-xl shadow-md p-5">
//         <h2 className="text-2xl font-semibold mb-6 text-slate-800">
//           Student Records
//         </h2>

//         {filteredData.length > 0 ? (
//           <div className="grid gap-5">
//             {filteredData.map((student) => (
//               <StudentCard
//                 key={student.id}
//                 student={student}
//                 onDelete={deleteStudent}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-10">
//             <h3 className="text-xl text-gray-500">
//               No Student Found
//             </h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Admin;















import { useEffect, useState } from "react";
import StudentCard from "../componants/StudentCard";
import DashboardCard from "../componants/DashboardCard";

function Admin() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("students")) || [];

    setStudents(data);
  }, []);

  const deleteStudent = (id) => {
    const updated = students.filter(
      (item) => item.id !== id
    );

    setStudents(updated);

    localStorage.setItem(
      "students",
      JSON.stringify(updated)
    );
  };

  const filteredData = students.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.enroll.includes(search) ||
      item.phone.includes(search)
  );

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">

      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl mb-8">

        <h1 className="text-3xl md:text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-slate-300 mt-2">
          Manage all registered students from one place.
        </p>

      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        <DashboardCard
          title="Total Students"
          value={students.length}
        />

        <DashboardCard
          title="Search Results"
          value={filteredData.length}
        />

        <DashboardCard
          title="Active Records"
          value={students.length}
        />

      </div>

      {/* Search Section */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 mb-8">

        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Search Student
        </h2>

        <input
          type="text"
          placeholder="Search by Name, Enrollment or Phone Number..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        />

      </div>

      {/* Student Records */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

          <h2 className="text-2xl font-bold text-slate-900">
            Student Records
          </h2>

          <span className="mt-2 md:mt-0 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm">
            {filteredData.length} Students
          </span>

        </div>

        {filteredData.length > 0 ? (
          <div className="grid gap-5">
            {filteredData.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onDelete={deleteStudent}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">

            <h3 className="text-xl font-semibold text-slate-700">
              No Student Found
            </h3>

            <p className="text-slate-500 mt-2">
              Try searching with another keyword.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default Admin;