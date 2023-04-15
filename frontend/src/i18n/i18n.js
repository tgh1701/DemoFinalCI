import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import NAVBAR_EN from "../locales/en/navbar.json";
import NAVBAR_VI from "../locales/vi/navbar.json";
import FOOTER_EN from "../locales/en/footer.json";
import FOOTER_VI from "../locales/vi/footer.json";
import BODY_EN from "../locales/en/body.json";
import BODY_VI from "../locales/vi/body.json";
import DATA_EN from "../locales/en/data.json";
import DATA_VI from "../locales/vi/data.json";
import SINGLECARD_EN from "../locales/en/singlecard.json";
import SINGLECARD_VI from "../locales/vi/singlecard.json";
import LOGIN_EN from "../locales/en/login.json";
import LOGIN_VI from "../locales/vi/login.json";
import SIGNUP_EN from "../locales/en/signup.json";
import SIGNUP_VI from "../locales/vi/signup.json";

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
};

const resources = {
  en: {
    navbar: NAVBAR_EN,
    footer: FOOTER_EN,
    body: BODY_EN,
    data: DATA_EN,
    singlecard: SINGLECARD_EN,
    login: LOGIN_EN,
    signup: SIGNUP_EN,
  },
  vi: {
    navbar: NAVBAR_VI,
    footer: FOOTER_VI,
    body: BODY_VI,
    data: DATA_VI,
    singlecard: SINGLECARD_VI,
    login: LOGIN_VI,
    signup: SIGNUP_VI,
  },
};

const defaultNS = "navbar";

i18n.use(initReactI18next).init({
  resources,
  ns: ["navbar", "footer", "body", "data", "singlecard", "login", "signup"],
  defaultNS,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
