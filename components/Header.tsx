"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
            className="lg:hidden text-white p-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
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
            </motion.div>
          </button>

          <nav className="hidden lg:block">
            <ul className="flex flex-row gap-8 items-center text-white font-semibold text-sm">
              <li>
                <Link href={"/"}>Sign In</Link>
              </li>
              <li>
                <Link href={"/"} className="block bg-primary-button py-2.5 px-4 rounded-2xl">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 h-screen w-3/4 max-w-xs z-50 lg:hidden bg-[#1E3E85]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
            >
              <div className="flex flex-col pt-28 px-8 gap-6">
                <Link
                  href={"/"}
                  className="block py-3 text-white text-center font-semibold text-lg border-b border-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href={"/"}
                  className="block bg-primary-button py-3 px-6 rounded-2xl text-center text-white font-semibold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
