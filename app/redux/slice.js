const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  uniformArr: [],
};

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
});

export const { addUniforms } = ApiSlice.actions;
export default ApiSlice.reducer;
