'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';
// import { useUser } from '@clerk/nextjs';

const Navbar = () => {
  
  // const user=useUser()
  // console.log(user?.user)
  return (
    <header className="relative z-10 w-full py-4 px-4  ">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand Name */}
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span className="text-2xl font-bold text-indigo-700">PieChat</span>
          </div>

          {/* Navigation Links (Hidden on small screens, shown on medium and larger) */}
          <ul className="hidden md:flex space-x-8">
          <li><Link href="/" className="text-lg font-medium text-gray-600 hover:text-indigo-600 transition duration-300">Home</Link></li>
          <li><Link href="/forums" className="text-lg font-medium text-gray-600 hover:text-indigo-600 transition duration-300">Forums</Link></li>
          <li><Link href="/chat" className="text-lg font-medium text-gray-600 hover:text-indigo-600 transition duration-300">UserChat</Link></li>
          <li><UserButton/></li>
            
          </ul>
        </nav>
      </header>
  );
};

export default Navbar;
