import React from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../utilities/firebase";
import { FiLogOut } from "react-icons/fi";

function Navbar(): JSX.Element {
  const [user, loading] = useAuthState(auth);

  return (
    <header className=" p-3 border">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto">
        <Link href="/">Budg.it</Link>
        {!user ? (
          <Link href={"/auth/login"} legacyBehavior>
            <a className="py-2 px-4 text-md bg-teal-500 text-white rounded-md">
              Login
            </a>
          </Link>
        ) : (
          <div className="relative flex gap-2">
            <img
              src={user?.photoURL as string}
              alt="avatar"
              className="object-cover w-12 h-12"
                referrerPolicy="no-referrer"
              />
              <button onClick={()=> auth.signOut()} className="flex items-center  gap-2 rounded-md py-2 px-4 bg-red-700 text-white"><FiLogOut /> Logout</button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar