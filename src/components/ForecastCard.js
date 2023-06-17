import React from "react"
import styles from "../styles/Forecast.module.css"

function ForecastCard({ day }) {
  return (
    <div className={styles.forecastCard}>
      <div className={styles.forecastCardLeftSide}>
        <div className={`${styles.w100} ${styles.flexCenter}`}>
          <div>{day.date}</div>
        </div>
        <div
          className={`${styles.w100} ${styles.flexCenter} ${styles.highest}`}
        >
          {day.day.maxtemp_c}°C
        </div>
        <div className={`${styles.w100} ${styles.flexCenter} ${styles.lowest}`}>
          {day.day.mintemp_c}°C
        </div>
      </div>
      <div className={styles.forecastCardRightSide}>
        <img
          src={day.day.condition.icon}
          className={styles.imgInCard}
          alt="conditionIcon"
        />
      </div>
    </div>
  )
}

export default ForecastCard
