import React from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../utilities/firebase";

function Navbar(): JSX.Element {
  const [user, loading] = useAuthState(auth);

  return (
    <header className=" p-3 border">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto">
        <Link href="/">Logo</Link>
        {!user ? <Link href={"/auth/Login"} legacyBehavior>
          <a className="py-2 px-4 text-md bg-teal-500 text-white rounded-md">
            Login
          </a>
        </Link> : null}
      </nav>
    </header>
  );
}

export default Navbar