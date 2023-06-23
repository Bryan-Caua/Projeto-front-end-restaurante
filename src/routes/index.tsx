import { Routes, Route } from "react-router-dom";
import Dashbord from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesRend = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </div>
  );
};

export default RoutesRend;
