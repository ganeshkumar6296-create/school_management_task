import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
// import ProtectedRoute from "./components/ProtectedRoute";
import StudentDetails from "./pages/StudentDetails";
import Navbar from "./componants/Navbar";
import Login from "./pages/Login";
import EditStudent from "./pages/EditStudent";
import ProtectedRoute from "./componants/ProtectedRoute";
import StudentDashboard from "./pages/StudentDashboard";
import Footer from "./componants/Footer";
// import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
