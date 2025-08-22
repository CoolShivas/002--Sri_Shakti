import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  logoHeroArr: [],
  status: "idle",
  error: null,
};

export const fetchLogoHeroBgImageServer = createAsyncThunk(
  "logoHeroImages/fetchLogoHeroBgImageServer",
  async () => {
    const response = await fetch(
      "https://backend-kwvs.onrender.com/api/website-images"
    );
    if (!response.ok) {
      throw new Error(`Error fetching website images: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response:", data); // Debug: Log API response
    return data;
  }
);

const thirdSlice = createSlice({
  name: "logoHeroImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogoHeroBgImageServer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchLogoHeroBgImageServer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.logoHeroArr = action.payload.data || [];
        console.log("logoHeroArr set to:", state.logoHeroArr); // Debug: Log state update
      })
      .addCase(fetchLogoHeroBgImageServer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch website images";
        console.log("Error:", state.error); // Debug: Log error
      });
  },
});

export default thirdSlice.reducer;
