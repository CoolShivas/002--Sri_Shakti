const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  uniformArr: [],
};

///////**** Starting of creating the fetch api function with export *****///////
export const fetchUniformApiServer = createAsyncThunk(
  "fetchUniformApiServer",
  async () => {
    console.log("action");
    // // // Getting the response of btn click here as :- action
    const response = await fetch(
      "https://backend-kwvs.onrender.com/api/uniforms/"
    );
    return response.json();
  }
);
///////**** Ending of creating the fetch api function with export *****///////

const ApiSlice = createSlice({
  name: "uniformAPIes",
  initialState,
  reducers: {
    addUniforms: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.uniformArr.push(data);
    },
  },
  // // Formation of extraReducers for fetching api;
  extraReducers: (builder) => {
    builder.addCase(fetchUniformApiServer.fulfilled, (state, action) => {
      console.log(
        "reducer",
        action
      )(
        // Getting the response of btn click here as :- reducer {type: 'fetchUniformApiServer/fulfilled', payload: Array(17), meta: {…}}
        (state.isloading = false)
      ),
        (state.uniformArr = action.payload);
    });
  },
});

export const { addUniforms } = ApiSlice.actions;
export default ApiSlice.reducer;
