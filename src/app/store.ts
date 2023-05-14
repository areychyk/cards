import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { appReducer } from "app/app.slice";
import { authReducer } from "features/auth/auth.slice";
import { packsListReducer } from "features/packsList/packsList.slice";

export const store = configureStore({
  reducer: {
    app:appReducer,
    auth:authReducer,
    packsList:packsListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
