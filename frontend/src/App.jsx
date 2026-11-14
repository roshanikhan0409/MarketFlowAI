import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Pages/auth/Signup";
import Login from "./Pages/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
