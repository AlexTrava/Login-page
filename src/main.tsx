import './i18n';
import './firebase';

import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';
import { store } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <MantineProvider defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </React.StrictMode>
  </Provider>
);
