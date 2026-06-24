import { Navigate } from "react-router-dom";

function StudentProtectedRoute({ children }) {
  const role = localStorage.getItem("role");
  const student = localStorage.getItem("currentStudent");

  return role === "student" && student
    ? children
    : <Navigate to="/login" />;
}

export default StudentProtectedRoute;