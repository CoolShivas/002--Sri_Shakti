const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require("@reduxjs/toolkit");

const initialState = {
  uniformArr: [],
  isLoading: false,
  error: null,
};

///////**** Async thunk to fetch data *****///////
export const fetchUniformApiServer = createAsyncThunk(
  "uniforms/fetchUniformApiServer",
  async () => {
    const response = await fetch(
      "https://backend-kwvs.onrender.com/api/uniforms/"
    );
    return response.json();
  }
);

const ApiSlice = createSlice({
  name: "uniformAPIes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniformApiServer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUniformApiServer.fulfilled, (state, action) => {
        console.log(action); // Getting the data here;
        state.isLoading = false;
        state.uniformArr = action.payload;
      })
      .addCase(fetchUniformApiServer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

///////**** Selectors for filtering *****///////

// All uniforms
export const selectAllUniforms = (state) => state.uniformData.uniformArr;

// Filter by uniformType
export const selectUniformsByType = (type) =>
  createSelector([selectAllUniforms], (uniforms) =>
    uniforms.filter((u) => u.uniformType === type)
  );

// Filter by uniformSubtype
export const selectUniformsBySubtype = (subtype) =>
  createSelector([selectAllUniforms], (uniforms) =>
    uniforms.filter((u) => u.uniformSubtype === subtype)
  );

// Filter by both type + subtype
export const selectUniformsByTypeAndSubtype = (type, subtype) =>
  createSelector([selectAllUniforms], (uniforms) =>
    uniforms.filter(
      (u) => u.uniformType === type && u.uniformSubtype === subtype
    )
  );

export default ApiSlice.reducer;
