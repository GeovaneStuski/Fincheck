import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { Dashboard } from '../view/pages/Dashboard';
import { Register } from '../view/pages/Register';
import { Login } from '../view/pages/Login';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path='/' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}