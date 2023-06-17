import React from "react"
import { useSelector } from "react-redux"
import styles from "../styles/Forecast.module.css"
import ForecastCard from "./ForecastCard"
import { useTranslation } from "react-i18next"

function ForecastContainer() {
  const { forecast, current, location } = useSelector(
    (state) => state.forecast.forecast
  )

  const { t } = useTranslation()
  return (
    <>
      {forecast && current && location && (
        <>
          <div className={styles.forecastContainer}>
            <div
              className={styles.currentFlexItem}
              style={{ "width": "100%", "justifyContent": "center" }}
            >{`${location.name}, ${location.region}, ${location.country}`}</div>
            <div className={styles.currentFlexItem}>
              {t("currentConditions")}
            </div>
            <img
              className={styles.currentFlexItem}
              src={current.condition.icon}
              alt="condition"
            />
            <div className={styles.currentFlexItem}>
              <span className={styles.emoji}>🌡️</span>
              {current.temp_c}°C
            </div>
            <div className={styles.currentFlexItem}>
              <img
                className={`${styles.currentFlexItem} ${styles.imgH36}`}
                src="./img/wind.png"
                alt="pressure"
              />
              <div>{current.wind_kph} km/h</div>
            </div>
            <div className={styles.currentFlexItem}>
              <img
                className={`${styles.currentFlexItem} ${styles.imgH36}`}
                src="./img/pressure.png"
                alt="pressure"
              />
              <div>{Math.ceil(current.pressure_mb / 1.33)} mm Hg</div>
            </div>
          </div>
          <div className={styles.daysContainer}>
            {forecast.forecastday.map((day, idx) => {
              return <ForecastCard key={idx} day={day} />
            })}
          </div>
        </>
      )}
    </>
  )
}

export default ForecastContainer
