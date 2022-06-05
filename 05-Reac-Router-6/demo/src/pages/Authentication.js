import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar";

export const Authentication = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
