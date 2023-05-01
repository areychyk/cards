import { createSlice } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, AuthApi, ProfileType } from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";


const register = createAppAsyncThunk<void,ArgRegisterType>("auth/register", async (arg, {rejectWithValue}) => {
  await AuthApi.register(arg)
});

const login = createAppAsyncThunk<{profile:ProfileType},ArgLoginType>("auth/login", async (arg, { rejectWithValue }) => {
    const res = await AuthApi.login(arg);
    return { profile: res.data };
});



const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null

  },
  reducers: {
    // setProfile: (state, action: PayloadAction<{ profile: ProfileType }>) => {
    //   state.profile = action.payload.profile;
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      });
  }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login };