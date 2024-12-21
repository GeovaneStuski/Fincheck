import { Navigate, Outlet } from 'react-router-dom';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const singnedIn = false;

  if (!singnedIn && isPrivate) {
    return <Navigate to='/login' replace />;
  }

  if (singnedIn && !isPrivate) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
}