import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: unknown
}>()


// type AsyncThunkConfig = {
//   state?: RootState
//   dispatch?: AppDispatch
//   rejectValue?: unknown
//
// }