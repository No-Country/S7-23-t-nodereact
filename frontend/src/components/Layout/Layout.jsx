import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
