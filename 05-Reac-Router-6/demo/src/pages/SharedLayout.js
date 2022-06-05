import React from "react";
import { Link, Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar";

export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <Outlet />
      </section>
    </>
  );
};
