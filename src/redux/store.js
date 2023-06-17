import { configureStore } from "@reduxjs/toolkit"
import placeReducer from "./services/searchService"
import forecastReducer from "./services/forecastService"
import settingsReducer from "./services/settings"

export default configureStore({
  reducer: {
    place: placeReducer,
    forecast: forecastReducer,
    settings: settingsReducer,
  },
})
