import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const isLandingPage = router.pathname === "/landing";

  return (
    <div className="layout flex flex-col min-h-screen">
      {!isLandingPage && <Navbar />}
      <main className="mainLayout flex-1">{children}</main>
      {!isLandingPage && <Footer />}
    </div>
  );
};

export default Layout;
