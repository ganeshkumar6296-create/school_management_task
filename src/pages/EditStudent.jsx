import {
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

function EditStudent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const students =
    JSON.parse(
      localStorage.getItem("students")
    ) || [];

  const student = students.find(
    (item) =>
      item.id === Number(id)
  );

  const [name, setName] =
    useState(student.name);

  const updateStudent = () => {
    const updated =
      students.map((item) =>
        item.id === Number(id)
          ? {
              ...item,
              name,
            }
          : item
      );

    localStorage.setItem(
      "students",
      JSON.stringify(updated)
    );

    navigate("/admin");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Edit Student</h2>

      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <button
        onClick={updateStudent}
      >
        Update
      </button>
    </div>
  );
}

export default EditStudent;