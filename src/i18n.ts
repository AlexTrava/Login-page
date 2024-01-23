import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/en.json';
import ru from './locales/ru/ru.json';

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: en
    },
    ru: {
      translation: ru
    }
  }
});

export default i18next;
