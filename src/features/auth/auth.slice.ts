import { createSlice } from "@reduxjs/toolkit";
import {
  ArgEditProfileType,
  ArgForgotType,
  ArgLoginType,
  ArgRegisterType,
  ArgSetNewPasswordType,
  AuthApi,
  ProfileType
} from "features/auth/auth.api";

import { statusCode } from "common/enums";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";



const forgot = createAppAsyncThunk<{ emailForForgotPassword: string }, ArgForgotType>("auth/forgot", async (arg, { rejectWithValue }) => {
  await AuthApi.forgot(arg);
  return { emailForForgotPassword: arg.email };
});

const register = createAppAsyncThunk<void, ArgRegisterType>("auth/register", async (arg, thunkAPI) => {
  return  thunkTryCatch(thunkAPI,async ()=>{
    await AuthApi.register(arg);
  });
});

const initializeApp = createAppAsyncThunk<{ profile: ProfileType }, void>("auth/initializeApp", async (_, { rejectWithValue }) => {
  const res = await AuthApi.me();
  if (res.statusText === statusCode.Success) {

    return { profile: res.data };
  } else {
    return rejectWithValue(null);
  }

});

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>("auth/login", async (arg, thunkAPI) => {

  return thunkTryCatch(thunkAPI,async ()=>{
    const res = await AuthApi.login(arg);
    return { profile: res.data };
  });
});

const logout = createAppAsyncThunk<{ isLoggedIn: boolean }, void>("auth/logout", async (_, { rejectWithValue }) => {
  await AuthApi.logout();
  return { isLoggedIn: false };

});

const setNewPassword = createAppAsyncThunk<void, ArgSetNewPasswordType>("auth/setNewPassword", async (arg, { rejectWithValue }) => {
  await AuthApi.setNewPassword(arg);

});

const editProfile = createAppAsyncThunk<{ profile: ProfileType }, ArgEditProfileType>("auth/editProfile", async (arg, { rejectWithValue }) => {
  const res = await AuthApi.editProfile(arg);
  console.log(res);
  return { profile: res.data.updatedUser };

});

const slice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    profile: null as ProfileType | null,
    emailForForgotPassword: ""

  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
      })
      .addCase(forgot.fulfilled, (state, action) => {
        state.emailForForgotPassword = action.payload.emailForForgotPassword;
      })
      .addCase(initializeApp.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.isLoggedIn = true;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      });


  }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login, logout, forgot, setNewPassword, initializeApp, editProfile };