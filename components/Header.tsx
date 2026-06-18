"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 z-10 w-full">
      <div className="w-full mx-auto py-7 px-4 sm:px-6 lg:px-12">
        <div className="flex flex-row justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/images/Logo.png"}
              width={117.05}
              height={50}
              alt={"Remote Recruit"}
              className="w-24 sm:w-auto"
            />
          </Link>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <nav className={`${isOpen ? "block h-screen w-1/2 absolute right-0.5" : "hidden"} lg:block lg:static top-full left-0 lg:w-auto bg-[#1E3E85] lg:bg-transparent`}>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-white font-semibold text-sm p-4 lg:p-0">
              <li>
                <Link href={"/"} className="block py-2">Sign In</Link>
              </li>
              <li>
                <Link href={"/"} className="block bg-primary-button py-2.5 px-4 rounded-2xl text-center">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
