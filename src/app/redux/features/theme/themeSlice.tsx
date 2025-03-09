import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define type for theme
type Theme = "light" | "dark";

// Define the structure of the state
interface ThemeState {
  theme: Theme;
}

// Initialize state, checking for a theme value in localStorage (if available)
const initialState: ThemeState = {
  theme: (typeof window !== "undefined" && localStorage.getItem("theme") as Theme) || "light",
};

// Create the slice to manage theme state
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Action to toggle the theme
    toggleTheme: (state) => {
      // Toggle theme between light and dark
      state.theme = state.theme === "light" ? "dark" : "light";
      // Update localStorage with the new theme value
      localStorage.setItem("theme", state.theme);

      // Apply the theme to the document element (for dark mode styling)
      if (state.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },

    // Action to set a specific theme (light or dark)
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      // Update localStorage with the specified theme
      localStorage.setItem("theme", state.theme);

      // Apply the theme to the document element (for dark mode styling)
      if (state.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

// Export actions so they can be dispatched from components
export const { toggleTheme, setTheme } = themeSlice.actions;

// Export reducer to be added to the store
export default themeSlice.reducer;
