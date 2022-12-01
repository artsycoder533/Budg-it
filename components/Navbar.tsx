import React from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../utilities/firebase";
import { FiLogOut } from "react-icons/fi";

function Navbar(): JSX.Element {
  const [user, loading] = useAuthState(auth);

  return (
    <header className="">
      <div className="text-center p-2 bg-blue-700 text-white font-bold">
        <Link href="/">Budg.it</Link>
      </div>
      <nav className="flex max-w-[1200px] mx-auto justify-between p-1">
        <img
          src={user?.photoURL as string}
          alt="avatar"
          className="object-cover w-12 h-12"
          referrerPolicy="no-referrer"
        />
        {!user ? (
          <Link href={"/auth/login"} legacyBehavior>
            <a className="py-2 px-4 text-md bg-teal-500 text-white rounded-md">
              Login
            </a>
          </Link>
        ) : (
          <div className="w-100 flex gap-4 items-center justify-end">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/assessment" className="">
              Assessment
            </Link>
            <button
              onClick={() => auth.signOut()}
              className="flex items-center  gap-2 rounded-md py-2 px-4  text-blue-700 font-bold border-2 border-blue-700">
              <FiLogOut className="font-bold text-blue-700" /> Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar