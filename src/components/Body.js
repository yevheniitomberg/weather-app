import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchPlaces } from "../redux/services/searchService"
import { forecastFinder } from "../redux/services/forecastService"
import ForecastContainer from "./ForecastContainer"
import styles from "../styles/Forecast.module.css"
import { useTranslation } from "react-i18next"

function Body() {
  const dispatch = useDispatch()
  const places = useSelector((state) => state.place.places)
  const { t } = useTranslation()

  return (
    <div>
      <input
        style={{
          "width": "80%",
          "height": "50px",
          "borderRadius": "10px",
          "textAlign": "center",
          "fontSize": "16pt",
        }}
        type="text"
        onChange={(event) => {
          dispatch(searchPlaces(event.target.value))
        }}
        list="places"
      />
      <datalist id="places">
        {places ? (
          places.map((place) => {
            return (
              <option
                key={place.id}
                data-value={place.url}
                value={`${place.name}, ${place.country}`}
              >{`${place.name}, ${place.country}`}</option>
            )
          })
        ) : (
          <></>
        )}
      </datalist>
      <button
        className={styles.btnShow}
        onClick={() => {
          dispatch(
            forecastFinder(
              document
                .getElementById("places")
                .children[0]?.getAttribute("data-value")
            )
          )
        }}
      >
        {t("requestForecast")}
      </button>
      <ForecastContainer />
    </div>
  )
}

export default Body
