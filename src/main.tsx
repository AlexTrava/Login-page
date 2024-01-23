import './i18n';
import './firebase';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
