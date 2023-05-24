import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddToPage from "../pages/AddToPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import View from "../pages/View";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/add" element={<AddToPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
