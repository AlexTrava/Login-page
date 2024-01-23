import { createTheme, MantineProvider } from '@mantine/core';
import type react from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootRouter from './RootRouter';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const App: react.FC = () => {
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route path={RoutersPaths.MAIN} element={<RootLayout />}>
          <Route index element={<MainPage />} />
          <Route path={RoutersPaths.AUTH} element={<AuthPage />} />
          <Route path={RoutersPaths.ADMIN} element={isAllow ? <AdminPage /> : <NoAccess />} />
          <Route path={RoutersPaths.PROFILE} element={<ProfilePage />} />
        </Route>
        <Route path={RoutersPaths.NOFOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
