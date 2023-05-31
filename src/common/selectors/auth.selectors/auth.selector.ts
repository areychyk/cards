import { RootState } from "app/store";


export const selectIsLoggedIn = (state:RootState) => state.auth.isLoggedIn;
export const selectProfile = (state:RootState) => state.auth.profile;
export const selectProfileId = (state:RootState) => state.auth.profile?._id;
export const selectEmailForForgotPassword = (state:RootState) => state.auth.emailForForgotPassword;
