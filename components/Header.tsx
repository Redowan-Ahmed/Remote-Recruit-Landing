import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 z-10 w-full">
      <div className="w-full mx-auto py-7 px-12">
        <div className="flex flex-wrap flex-row justify-between items-center">
          <Link href={'/'}>
            <Image
              src={"/images/Logo.png"}
              width={117.05}
              height={50}
              alt={"Remote Recruit"}
            />
          </Link>
          <nav>
            <ul className="flex gap-8 text-white font-semibold text-sm">
              <li className="">
                <Link href={"/"}>Sign In</Link>
              </li>
              <li>
                <Link href={"/"} className="bg-primary-button py-2.5 px-4 rounded-2xl">
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
