import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../utils/Logo/Logo_Final_03.png";
import FacebookFilled from "@ant-design/icons/FacebookFilled";
import WhatsAppOutlined from "@ant-design/icons/WhatsAppOutlined";
import InstagramOutlined from "@ant-design/icons/InstagramOutlined";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <header
      className={`p-4 shadow-md ${
        isMenuOpen ? "bg-[#67B4BF] text-white" : "bg-white text-[#67B4BF]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center h-12">
          <Link href="/">
            <Image
              src={logo}
              alt="Company Logo"
              className="object-contain"
              width={300}
              height={300}
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="text-2xl sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "pt-10 block" : "hidden"
          } sm:flex flex-row sm:flex-row absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#67B4BF] sm:bg-transparent p-4 sm:p-0`}
        >
          {/* <ul
            className={`flex flex-col sm:flex-row items-center sm:space-x-6 ${
              isMenuOpen ? "text-white" : "text-[#67B4BF]"
            }`}
          > */}
          <ul
            className={`flex flex-row items-center justify-center sm:space-x-6 sm:mr-10 ${
              isMenuOpen ? "text-white" : "text-[#67B4BF]"
            }`}
          >
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=61565224490309"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
              >
                <FacebookFilled
                  style={{ fontSize: "24px" }}
                  className="hover:scale-110 transition-transform duration-200 mx-2"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/+905526327279"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
              >
                <WhatsAppOutlined
                  style={{ fontSize: "24px" }}
                  className="hover:scale-110 transition-transform duration-200 mx-2"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/future_pi0/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
              >
                <InstagramOutlined
                  style={{ fontSize: "24px" }}
                  className="hover:scale-110 transition-transform duration-200 mx-2"
                />
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <li>
              <Link
                href="/"
                className="hover:underline"
                onClick={handleMenuClose}
              >
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:underline"
                onClick={handleMenuClose}
              >
                الدورات
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/+905526327279"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                onClick={handleMenuClose}
              >
                احجز الآن
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
