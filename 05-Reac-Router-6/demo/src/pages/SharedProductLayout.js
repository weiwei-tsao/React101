import React from "react";
import { Link, Outlet } from "react-router-dom";

export const SharedProductLayout = () => {
  return (
    <section className="section">
      <h2>Products Page</h2>
      <Outlet />
    </section>
  );
};
