import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  const student = students.find(
    (item) => item.id === Number(id)
  );

  const [form, setForm] = useState({
    name: student?.name || "",
    enroll: student?.enroll || "",
    phone: student?.phone || "",
    address: student?.address || "",
    email: student?.email || "",
    password: student?.password || "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateStudent = () => {
    const updatedStudents = students.map((item) =>
      item.id === Number(id)
        ? {
            ...item,
            ...form,
          }
        : item
    );

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    toast.success("Student Updated Successfully");

    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-5">
          Edit Student
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          type="text"
          name="enroll"
          placeholder="Enrollment"
          value={form.enroll}
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          onClick={updateStudent}
          className="w-full bg-slate-900 text-white p-3 rounded"
        >
          Update Student
        </button>
      </div>
    </div>
  );
}

export default EditStudent;