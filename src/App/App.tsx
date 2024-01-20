import type react from 'react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spiner } from '../components/Loader/Loader';
import NoAccess from '../components/NoAccess/NoAccess';
import RootLayout from '../pages/RootLayout/RootLayout';
import { RoutersPaths } from '../shared/types/enums';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NotFound = lazy(() => import('../pages/Error-404/Error-404'));
const AdminPage = lazy(() => import('../pages/AdminPage/AdminPage'));
const AuthPage = lazy(() => import('../pages/Auth/AuthPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));

const App: react.FC = () => {
  const [isAllow, setIsAllow] = useState(false);

  const isAdmin = true;

  useEffect(() => {
    if (isAdmin) {
      setIsAllow(true);
    }
  }, [isAdmin]);
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route path={RoutersPaths.MAIN} element={<RootLayout />}>
          <Route index element={<MainPage />} />
          <Route path={RoutersPaths.AUTH} element={<AuthPage />} />
          <Route
            path={RoutersPaths.ADMIN}
            element={isAllow ? <AdminPage /> : <NoAccess />}
          />
          <Route path={RoutersPaths.PROFILE} element={<ProfilePage />} />
        </Route>
        <Route path={RoutersPaths.NOFOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
