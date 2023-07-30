import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <main className="container max-w-6xl mx-auto px-2 md:px-4">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
