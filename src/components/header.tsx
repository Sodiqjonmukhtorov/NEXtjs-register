"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="p-[30px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 flex justify-start gap-5 rounded-lg shadow-lg">
      <Link href="/" className="text-white font-semibold hover:text-yellow-300 transition duration-300 ease-in-out">
        Home
      </Link>
      {session && (
        <Link href="/profile" className="text-white font-semibold hover:text-yellow-300 transition duration-300 ease-in-out">
          Profile
        </Link>
      )}
      <Link href="/register" className="text-white font-semibold hover:text-yellow-300 transition duration-300 ease-in-out">
        Register
      </Link>
      <Link href="/login" className="text-white font-semibold hover:text-yellow-300 transition duration-300 ease-in-out">
        Login
      </Link>
    </div>
  );
};
  