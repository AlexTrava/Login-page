import { MantineProvider } from '@mantine/core';
import type react from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootRouter from './RootRouter';

const App: react.FC = () => {
  return (
    <BrowserRouter>
      <MantineProvider>
        <RootRouter />
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
