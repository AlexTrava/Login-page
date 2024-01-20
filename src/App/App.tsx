import type react from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import RootLayout from '../pages/RootLayout/RootLayout';
import { RoutersPaths } from '../shared/types/enums';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NotFound = lazy(() => import('../pages/NoFound/NoFound'));
const Admin = lazy(() => import('../pages/Admin/Admin'));
const AuthPage = lazy(() => import('../pages/Auth/AuthPage'));

const App: react.FC = () => {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Routes>
        <Route path={RoutersPaths.MAIN} element={<RootLayout />}>
          <Route index element={<MainPage />} />
          <Route path={RoutersPaths.AUTH} element={<AuthPage />} />
          <Route path={RoutersPaths.ADMIN} element={<Admin />} />
        </Route>
        <Route path={RoutersPaths.NOFOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
