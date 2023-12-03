import '@/i18n';
import '@/firebase';

import { MantineProvider } from '@mantine/core';
import { store } from '@store/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <MantineProvider defaultColorScheme="dark">
          <App />
        </MantineProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
