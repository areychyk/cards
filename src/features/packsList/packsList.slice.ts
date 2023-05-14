import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";
import { ArgPacksListType, PacksListApi, PacksListResponseType } from "features/packsList/packsList.api";


const getPacksList = createAppAsyncThunk<{packsList:PacksListResponseType}, ArgPacksListType>("packsList/getPacksList", async (arg, thunkAPI) => {


  return thunkTryCatch(thunkAPI, async () => {
    const res = await PacksListApi.getPacks(arg);
    return {packsList:res.data}

  });
});

const slice = createSlice({
  name: "packsList",
  initialState: {
    packsList: null as PacksListResponseType | null
  },
  reducers: {},
  extraReducers:builder => {
    builder
      .addCase(getPacksList.fulfilled, (state, action)=>{
        state.packsList=action.payload.packsList

      })
  }
});


export const packsListReducer = slice.reducer;
export const packsListActions = slice.actions;
export const packsListThunks = { getPacksList };