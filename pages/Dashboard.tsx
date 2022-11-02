import React from 'react'
import { auth } from '../utilities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (!user) router.push("/auth/Login");

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard