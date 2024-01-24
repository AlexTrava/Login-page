import '@/shared/config/i18n/i18n.ts';
import '@/integations/firebase.ts';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
