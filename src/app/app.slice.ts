import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, isAxiosError } from "axios";
import { authThunks } from "features/auth/auth.slice";
import { cardsThunks } from "features/cards/cards.slice";


const appInitialState = {
  error: null as string | null,
  isLoading: false,
  isAppInitialized: false
};


type InitialStatetype = typeof appInitialState


const slice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authThunks.initializeApp.fulfilled, (state) => {
        state.isAppInitialized = true
      })
      .addCase(authThunks.initializeApp.rejected, (state) => {
        state.isAppInitialized = true
      })

      .addCase(cardsThunks.getCards.fulfilled, (state) => {
        state.isAppInitialized = true
      })
      .addCase(cardsThunks.getCards.rejected, (state) => {
        state.isAppInitialized = true
      })
      .addCase(cardsThunks.getCards.pending, (state) => {
        state.isAppInitialized = true
      })

      .addMatcher((action) => {
        return action.type.endsWith("/pending");
      }, (state, action) => {
        state.isLoading = true;
      })
      .addMatcher((action) => {
        return action.type.endsWith("/fulfilled");
      }, (state, action) => {
        state.isLoading = false;
      })
      .addMatcher((action) => {
        return action.type.endsWith("/rejected");
      }, (state, action) => {
        if(action.type === 'auth/initializeApp/rejected') {
          state.isLoading = false;
          return
        }
        const err = action.payload as Error | AxiosError<{ error: string }>;
        if (isAxiosError(err)) {
          state.error=err.response ? err.response.data.error : err.message
        } else {
          state.error=`Native error ${err.message}`
        }
        state.isLoading = false;
      });
  }
});


export const appReducer = slice.reducer;
export const appActions = slice.actions;