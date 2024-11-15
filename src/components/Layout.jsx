import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout flex flex-col min-h-screen">
      <Navbar />
      <main className="mainLayout flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
