"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MdClose } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("student_data");
    router.push("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="#" className="text-white text-lg font-semibold">
            Your Logo
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/books"
            className="text-white 2xl mt-1 mx-3 hover:text-gray-500"
          >
            Find Books
          </Link>
          <button
            onClick={handleLogout}
            className="text-white text-lg hover:text-gray-500"
          >
            Logout
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <MdClose className="text-3xl" />
            ) : (
              <CiMenuFries className="text-3xl" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-12 right-0 bg-gray-800 w-full h-full">
            <div className="flex flex-col items-center justify-center h-1/2 m-4">
              <Link href="/books" className="text-white text-3xl my-4">
                Find Books
              </Link>
              <button
                onClick={handleLogout}
                className="text-white text-3xl my-4 "
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
