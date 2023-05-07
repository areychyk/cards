import { RootState } from "app/store";

export const selectEmailForForgotPassword = (state: RootState) => state.auth.emailForForgotPassword;