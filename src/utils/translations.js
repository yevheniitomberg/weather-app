import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "eng",
  resources: {
    eng: {
      translation: {
        welcome: "Tomberg Weather",
        darkMode: "Dark Mode",
        requestForecast: "Request Forecast",
        currentConditions: "Current Conditions",
      },
    },
    est: {
      translation: {
        welcome: "Tomberg Ilm",
        darkMode: "Tume režiim",
        requestForecast: "Ilmateate päring",
        currentConditions: "Praegused  tingimused",
      },
    },
    rus: {
      translation: {
        welcome: "Tomberg Погода",
        darkMode: "Темная тема",
        requestForecast: "Запросить прогноз погоды",
        currentConditions: "Текущие условия",
      },
    },
  },
})

export default i18n
