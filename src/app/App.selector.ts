import { RootState } from "app/store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectProfile = (state: RootState) => state.auth.profile;
export const selectIsLoading = (state:RootState) => state.app.isLoading;