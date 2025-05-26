import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // .use(HttpApi) // Load translations from a server or local files
  .use(Backend)
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Bind i18next to React
  .init({
    supportedLngs: ['en', 'de', 'it'], // List of supported languages
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode during development
    ns: ['translation'], // Set namespace
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
    },
  });

export default i18n;
