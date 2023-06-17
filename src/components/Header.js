import React from "react"
import { useTranslation } from "react-i18next"
import styles from "../styles/Forecast.module.css"
import { useDispatch, useSelector } from "react-redux"
import { switchDarkMode } from "../redux/services/settings"

function Header() {
  const { t, i18n } = useTranslation()
  const languages = useSelector((state) => state.settings.languages)
  const darkMode = useSelector((state) => state.settings.darkMode)
  const dispatch = useDispatch()
  const localLang = localStorage.getItem("language")

  return (
    <div className={styles.header}>
      <div className={styles.flexCenter}>
        <span style={{ "marginRight": "10px" }}>{t("darkMode")}</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            defaultChecked={darkMode}
            onChange={(event) => {
              localStorage.setItem("darkMode", event.target.checked)
              dispatch(switchDarkMode())
            }}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <h2 className={styles.flexCenter} style={{ "margin": "5px" }}>
        ☀️{t("welcome")}⛈️
      </h2>
      <div className={styles.flexCenter}>
        <div className={styles.selectdiv}>
          <select
            value={localLang ? localLang : "eng"}
            onChange={(event) => {
              const lang = event.target.value
              localStorage.setItem("language", lang)
              i18n.changeLanguage(lang)
            }}
          >
            {languages.map((lang) => {
              return (
                <option key={lang} value={lang}>
                  {lang.toUpperCase()}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Header
