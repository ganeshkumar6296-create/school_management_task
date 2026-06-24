function StudentDashboard() {
  const student = JSON.parse(
    localStorage.getItem("currentStudent")
  );

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg mb-8">
        <h1 className="text-3xl font-bold">
          Student Dashboard
        </h1>

        <p className="mt-2 text-blue-100">
          Welcome back, {student?.name}
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        <div className="bg-slate-800 text-white p-6">
          <div className="flex flex-col items-center">
            
            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-4xl font-bold">
              {student?.name?.charAt(0).toUpperCase()}
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              {student?.name}
            </h2>

            <p className="text-gray-300">
              Student Profile
            </p>
          </div>
        </div>

        {/* Student Details */}
        <div className="p-6 grid md:grid-cols-2 gap-6">
          
          <div className="bg-slate-50 p-4 rounded-xl border">
            <h3 className="text-gray-500 text-sm">
              Enrollment Number
            </h3>

            <p className="text-lg font-semibold mt-1">
              {student?.enroll}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border">
            <h3 className="text-gray-500 text-sm">
              Phone Number
            </h3>

            <p className="text-lg font-semibold mt-1">
              {student?.phone}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border">
            <h3 className="text-gray-500 text-sm">
              Email Address
            </h3>

            <p className="text-lg font-semibold mt-1">
              {student?.email}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border">
            <h3 className="text-gray-500 text-sm">
              Student ID
            </h3>

            <p className="text-lg font-semibold mt-1">
              {student?.id}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border md:col-span-2">
            <h3 className="text-gray-500 text-sm">
              Address
            </h3>

            <p className="text-lg font-semibold mt-1">
              {student?.address}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;