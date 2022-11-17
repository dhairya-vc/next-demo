import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "headlines",
  searchQuery: "",
  theme: "light",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const getCategory = (state) => {
  return state.global.selectedCategory;
};

export const { setCategory, setSearchQuery, setTheme } = globalSlice.actions;

export default globalSlice.reducer;
