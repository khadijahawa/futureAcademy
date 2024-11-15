import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../utils/Logo/Logo_Final_03.png";

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
            className={`flex flex-row items-center justify-center sm:space-x-6 sm:mr-3 ${
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 hover:scale-110 transition-transform duration-200 fill-current mx-2"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/+905526327279"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 hover:scale-110 transition-transform duration-200 fill-current mx-2"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/future_pi0/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 hover:scale-110 transition-transform duration-200 fill-current mx-2"
                >
                  <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                </svg>
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
