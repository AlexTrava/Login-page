import { MantineProvider } from '@mantine/core';
import type react from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootRouter from './RootRouter';

const App: react.FC = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
