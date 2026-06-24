import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{student.name}</h3>

      <p>{student.enroll}</p>

      <p>{student.phone}</p>

      <Link to={`/student/${student.id}`}>View Details</Link>

      <button onClick={() => onDelete(student.id)}>Delete</button>

      <button onClick={() => window.location.assign(`/edit/${student.id}`)}>
        Edit
      </button>
    </div>
  );
}

export default StudentCard;
