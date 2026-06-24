import { Routes, Route, useLocation  } from "react-router-dom";

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
import AdminLogin from "./pages/AdminLogin";
import StudentProtectedRoute from "./componants/StudentProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

const hideLayout =
  location.pathname === "/admin-login" ||
  location.pathname === "/admin" ||
  location.pathname.startsWith("/edit/");
  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student-dashboard"
          element={
            <StudentProtectedRoute>
              <StudentDashboard />
            </StudentProtectedRoute>
          }
        />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
      {!hideLayout && <Footer />}
        <ToastContainer />
    </>
  );
}

export default App;
