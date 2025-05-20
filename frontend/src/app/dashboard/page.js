'use client';

import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';
import Loader from '@/components/Loader';

export default function DashboardPage() {
  const { user, loading } = useAuth(); 
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading]);

  if (loading) return <Loader />;
  if (!user) return null;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user.email}!</h1>
      <p>This is a protected dashboard page.</p>
      <LogoutButton />
    </div>
  );
}
