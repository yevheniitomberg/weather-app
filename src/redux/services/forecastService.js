import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL, KEY } from "../../utils/data"

export const forecastFinder = createAsyncThunk(
  `forecast/findForecast`,
  async (q) => {
    if (q) {
      return fetch(`${BASE_URL}forecast.json?key=${KEY}&q=${q}&days=10`)
        .then((res) => (res.status === 200 ? res.json() : []))
        .catch((error) => {
          return []
        })
    } else {
      return []
    }
  }
)

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    forecast: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(forecastFinder.pending, (state, action) => {
        state.loading = true
      })
      .addCase(forecastFinder.fulfilled, (state, action) => {
        state.loading = false
        if (!action.payload.error) {
          state.forecast = action.payload
        }
      })
      .addCase(forecastFinder.rejected, (state, action) => {
        state.loading = false
      })
  },
})

export default forecastSlice.reducer
