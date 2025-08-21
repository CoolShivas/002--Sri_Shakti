// app/redux/slice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  uniformArr: [],
  isLoading: false,
  error: null,
};

export const fetchUniformApiServer = createAsyncThunk(
  "uniforms/fetchAll",
  async () => {
    const res = await fetch("https://backend-kwvs.onrender.com/api/uniforms/");
    if (!res.ok) throw new Error(`Error fetching uniforms: ${res.status}`);
    return res.json();
  }
);

// small helper to normalize strings safely
const norm = (v) => (v ?? "").toString().trim().toLowerCase();

const slice = createSlice({
  name: "uniformData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniformApiServer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUniformApiServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.uniformArr = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchUniformApiServer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Failed to fetch uniforms";
      });
  },
});

export default slice.reducer;

/**
 * Select ALL uniforms
 */
export const selectAllUniforms = (state) => state.uniformData?.uniformArr ?? [];

/**
 * Select by type (case-insensitive; allows partial matches e.g. "school" matches "School")
 */
export const selectUniformsByType = (type) => (state) => {
  const t = norm(type);
  return selectAllUniforms(state).filter((u) => {
    const ut = norm(u.uniformType ?? u.type);
    return ut && (ut === t || ut.includes(t));
  });
};

/**
 * Select by type + optional subtype.
 * - Matches case-insensitively and with partial includes.
 * - If subtype is provided but missing on the item, we fallback to checking name/title for that word.
 */
export const selectUniformsByTypeAndSubtype =
  (type, subtype = null) =>
  (state) => {
    const t = norm(type);
    const st = norm(subtype);

    return selectAllUniforms(state).filter((u) => {
      const ut = norm(u.uniformType ?? u.type);
      if (!ut || (ut !== t && !ut.includes(t))) return false;

      // no subtype requested -> type match is enough
      if (!st) return true;

      // try the dedicated subtype fields first
      const uSub = norm(
        u.uniformSubtype ?? u.subtype ?? u.subType ?? u.categorySubtype
      );

      if (uSub) {
        if (uSub === st || uSub.includes(st)) return true;
        // if explicit subtype exists but doesn't match, exclude
        return false;
      }

      // fallback: look for the subtype word inside name/title if subtype field is missing
      const inNameOrTitle = norm(u.name ?? u.title).includes(st);

      return inNameOrTitle;
    });
  };
