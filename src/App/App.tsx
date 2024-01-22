import { createTheme, MantineProvider } from '@mantine/core';
import type react from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootRouter from './RootRouter';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const App: react.FC = () => {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
