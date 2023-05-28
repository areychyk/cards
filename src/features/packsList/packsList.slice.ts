import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";
import {
  ArgAddNewPackType, ArgDeletePackType,
  ArgPacksListType,
  PacksListApi,
  PacksListResponseType
} from "features/packsList/packsList.api";


const getPacksList = createAppAsyncThunk<{packsList:PacksListResponseType}, ArgPacksListType>("packsList/getPacksList", async (arg, thunkAPI) => {


  return thunkTryCatch(thunkAPI, async () => {
    const res = await PacksListApi.getPacks(arg);
    return {packsList:res.data}

  });
});

const addNewPack=createAppAsyncThunk<void,ArgAddNewPackType>("packsList/addNewPack",async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async ()=>{
    await PacksListApi.addNewPack(arg)
  })
})


const deletePack=createAppAsyncThunk<void,ArgDeletePackType>("packsList/deletePack",async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async ()=>{
    await PacksListApi.deletePack(arg)
  })
})

const slice = createSlice({
  name: "packsList",
  initialState: {
    packsList: null as PacksListResponseType | null,
    searchParams:{
      page: 1,
      pageCount: 4,
    },

  },
  reducers: {
    setSearchParams:(state,action)=>{
      console.log(action.payload);
      state.searchParams=action.payload
    }
  },
  extraReducers:builder => {
    builder
      .addCase(getPacksList.fulfilled, (state, action)=>{
        state.packsList=action.payload.packsList

      })
  }
});


export const packsListReducer = slice.reducer;
export const packsListActions = slice.actions;
export const packsListThunks = { getPacksList ,addNewPack, deletePack};