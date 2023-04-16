import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAdmin }) => {
  
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return loading === false && isAdmin && user.role !== "admin" ? (
    <Navigate to="/login" />
  ) : isAuthenticated === false ? (
    <Navigate to="/login" />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoutes;
