import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spiner } from '../components/Loader/Loader';
import { Layout } from './layout';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const AdminPage = lazy(() => import('../pages/AdminPage/AdminPage'));
const AuthPage = lazy(() => import('../pages/Auth/AuthPage'));
const NotFound = lazy(() => import('../pages/Error-404/Error-404'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));

export default function RootRouter() {
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="admin/:id" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
