import { createSlice } from "@reduxjs/toolkit"

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    languages: ["eng", "est", "rus"],
    darkMode: localStorage.getItem("darkMode") === "true",
  },
  reducers: {
    switchDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})
export const { switchDarkMode } = settingsSlice.actions
export default settingsSlice.reducer
