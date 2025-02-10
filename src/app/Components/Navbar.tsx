"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleNavbar() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav className="flex justify-between items-center bg-white text-black shadow-sm font-mono p-4">
      <div className="logo pl-3">
        <Image
          src="./images/logo.svg"
          alt="Logo"
          width={150}
          height={150}
        />
      </div>

      <button
        className="sm:hidden text-2xl focus:outline-none"
        onClick={handleNavbar}
        aria-label="Toggle Navigation"
        aria-expanded={navbarOpen}
      >
        &#9776;
      </button>

      <ul
        className={`transition-all duration-300 ease-in-out text-black sm:flex sm:items-center sm:gap-8 absolute sm:static bg-white w-full sm:w-auto left-0 z-10 ${
          navbarOpen ? "top-16 opacity-100" : "top-[-400px] opacity-100"
        }`}
      >
        <li className="px-4 py-2 sm:px-0">
          <a href="./" className="hover:text-purple-500">
            Home
          </a>
        </li>
        <li className="px-4 py-2 sm:px-0">
          <a href="/About" className="hover:text-purple-500">
            About Us
          </a>
        </li>
        <li className="px-4 py-2 sm:px-0">
          <a href="/Pricing" className="hover:text-purple-500">
            Pricing
          </a>
        </li>
        <li className="px-4 py-2 sm:px-0">
          <a href="/Team" className="hover:text-purple-500">
            Team
          </a>
        </li>
        <li className="px-4 py-2 sm:px-0">
          <a href="/Contact" className="hover:text-purple-500">
            Contact
          </a>
        </li>
        <li className="px-4 py-2 sm:px-0">
          <a href="#">
            <Button variant="outline" className="bg-purple-500 text-white">
            Button{/*  put toogle button here which is already created in modeToggle.tsx file just import it here and use it  */}
            </Button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
