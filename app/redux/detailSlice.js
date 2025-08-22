// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   detailArr: [],
// };

// export const fetchContactDetailsApiServer = createAsyncThunk(
//   "fetchContactDetailsApiServer",
//   async () => {
//     const response = await fetch(
//       "https://backend-kwvs.onrender.com/api/site-settings"
//     );
//     return response.json();
//   }
// );

// const Slicer = createSlice({
//   name: "contactDetails",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchContactDetailsApiServer.fulfilled, (state, action) => {
//       state.detailArr = action.payload;
//     });
//   },
// });

// export default Slicer.reducer;

////////********************************************************************************************** */////////

// detailSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  detailArr: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchContactDetailsApiServer = createAsyncThunk(
  "fetchContactDetailsApiServer",
  async () => {
    const response = await fetch(
      "https://backend-kwvs.onrender.com/api/site-settings"
    );
    return response.json();
  }
);

const Slicer = createSlice({
  name: "contactDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactDetailsApiServer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContactDetailsApiServer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detailArr = action.payload;
      })
      .addCase(fetchContactDetailsApiServer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Slicer.reducer;
