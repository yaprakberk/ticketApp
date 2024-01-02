import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/authPages/Login";
// import Page404Found from "../pages/Page404Found"; // TODO
import Signup from "../pages/authPages/Signup";

const AUTHROUTE: React.FC = () => {
  return (
    <Routes>
      <Route path="/" index={true} element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* <Route path="*" element={<Page404Found />} /> */}
    </Routes>
  );
};

export default AUTHROUTE;