import { createSlice } from "@reduxjs/toolkit";
import {
  ArgForgotType,
  ArgLoginType,
  ArgRegisterType,
  ArgSetNewPasswordType,
  AuthApi,
  ProfileType
} from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
import { statusCode } from "common/enums";



const forgot = createAppAsyncThunk<{ emailForForgotPassword: string }, ArgForgotType>("auth/forgot", async (arg, { rejectWithValue }) => {
  await AuthApi.forgot(arg);
  return { emailForForgotPassword: arg.email };
});

const register = createAppAsyncThunk<void, ArgRegisterType>("auth/register", async (arg, { rejectWithValue }) => {
  await AuthApi.register(arg);
});

const initializeApp = createAppAsyncThunk<{profile: ProfileType}, void>("auth/initializeApp", async (_, { rejectWithValue }) => {
    const res = await AuthApi.me();
    if(res.statusText===statusCode.Success){
      return {profile:res.data}
    }else {
      return rejectWithValue(null)
  }

});

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>("auth/login", async (arg, { rejectWithValue }) => {
  const res = await AuthApi.login(arg);
  return { profile: res.data };
});


const logout = createAppAsyncThunk<{isLoggedIn: boolean}, void>("auth/login", async (_, { rejectWithValue }) => {
   await AuthApi.logout();
   return {isLoggedIn: false}

});

const setNewPassword = createAppAsyncThunk<void, ArgSetNewPasswordType>("auth/setNewPassword", async (arg, { rejectWithValue }) => {
  await AuthApi.setNewPassword(arg);

});


const slice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    profile: null as ProfileType | null,
    emailForForgotPassword: ""

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
        state.isLoggedIn= true
      })
      .addCase(forgot.fulfilled, (state, action) => {
        state.emailForForgotPassword = action.payload.emailForForgotPassword;
      })
      .addCase(initializeApp.fulfilled,(state, action)=>{
        state.profile = action.payload.profile;
        state.isLoggedIn= true
      })


  }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login,logout, forgot, setNewPassword, initializeApp };