import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL, KEY } from "../../utils/data"

export const searchPlaces = createAsyncThunk(
  `place/searchPlaces`,
  async (q) => {
    if (q) {
      return fetch(`${BASE_URL}search.json?key=${KEY}&q=${q}`)
        .then((res) => (res.status === 200 ? res.json() : []))
        .catch((error) => {
          return []
        })
    } else {
      return []
    }
  }
)

const searchSlice = createSlice({
  name: "searchPlace",
  initialState: {
    places: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPlaces.pending, (state, action) => {
        state.loading = true
      })
      .addCase(searchPlaces.fulfilled, (state, action) => {
        state.loading = false
        if (!action.payload.error) {
          state.places = action.payload
        }
      })
      .addCase(searchPlaces.rejected, (state, action) => {
        state.loading = false
      })
  },
})

export default searchSlice.reducer
