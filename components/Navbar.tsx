import React from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../utilities/firebase";
import { FiLogOut } from "react-icons/fi";
import Image from 'next/image';

function Navbar(): JSX.Element {
  const [user, loading] = useAuthState(auth)

  return (
    <nav>
      <div className="text-center p-2 bg-blue-700 text-white font-bold">
        <Link href="/">Budg.it</Link>
      </div>
      <nav className="flex max-w-[1200px] mx-auto justify-between p-1">
        {user && (
          <Image
            src={user.photoURL as string}
            alt="avatar"
            className="object-cover w-12 h-12"
            referrerPolicy="no-referrer"
            width={100}
            height={100}
          />
        )}
        {!user ? (
          <Link
            href={"/login"}
            className="py-2 px-4 text-md bg-teal-500 text-white rounded-md ml-auto">
            Login
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
              Logout <FiLogOut className="font-bold text-blue-700" />
            </button>
          </div>
        )}
      </nav>
    </nav>
  );
}

export default Navbar