"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import PBContainer from "../ui/PBContainer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <PBContainer maxWidth="7xl">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            <Link href="/">PunarBay</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>

          {/* Icons (Cart & User) */}
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-600" />
            </Link>
            <Link href="/profile">
              <User className="w-6 h-6 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-600" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 p-4 space-y-2 shadow-md">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        )}
      </PBContainer>
    </nav>
  );
}
