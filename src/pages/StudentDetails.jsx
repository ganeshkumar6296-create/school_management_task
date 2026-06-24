import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  const student = students.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>{student.name}</h2>

      <p>
        Enrollment : {student.enroll}
      </p>

      <p>Phone : {student.phone}</p>

      <p>Address : {student.address}</p>
    </div>
  );
}

export default StudentDetails;