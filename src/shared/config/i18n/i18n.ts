import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../../../locales/en/en.json';
import ruTranslation from '../../../locales/ru/ru.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false
    },

    resources: {
      en: {
        translation: enTranslation
      },
      ru: {
        translation: ruTranslation
      }
    }
  });

export default i18n;
