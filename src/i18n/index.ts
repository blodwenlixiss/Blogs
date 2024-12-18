import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeEn from "./en/home.json";
import homeKa from "./ka/home.json";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: {
        "home-page": homeEn,
      },
    },
    en: {
      translation: {
        "home-page": homeKa,
      },
    },
  },
  lng: "ka",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
