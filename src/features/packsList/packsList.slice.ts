import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";
import {
  ArgAddNewPackType, ArgDeletePackType, ArgEditPackType,
  ArgPacksListType,
  PacksListApi,
  PacksListResponseType
} from "features/packsList/packsList.api";


const getPacksList = createAppAsyncThunk<{ packsList: PacksListResponseType }, ArgPacksListType>("packsList/getPacksList", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await PacksListApi.getPacks(arg);
    return { packsList: res.data };
  });
});

const addNewPack = createAppAsyncThunk<void, ArgAddNewPackType>("packsList/addNewPack", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await PacksListApi.addNewPack(arg);
  });
});


const deletePack = createAppAsyncThunk<void, ArgDeletePackType>("packsList/deletePack", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await PacksListApi.deletePack(arg);

  });
});

const editPack = createAppAsyncThunk<void, ArgEditPackType>("packsList/editPack", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await PacksListApi.editPack(arg);
  });
});

const slice = createSlice({
  name: "packsList",
  initialState: {
    packsList: null as PacksListResponseType | null,
    searchParams: {
      page: 1,
      pageCount: 4,
      min: 0,
      max: 50,
      packName: ""
    }

  },
  reducers: {
    setSearchParamsPackName: (state, action: PayloadAction<string>) => {
      state.searchParams.packName = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getPacksList.fulfilled, (state, action) => {
        state.packsList = action.payload.packsList;
        const packsList = action.payload.packsList;
        state.searchParams.min = packsList.minCardsCount;
        state.searchParams.max = packsList.maxCardsCount;
        state.searchParams.page = packsList.page;
        state.searchParams.pageCount = packsList.pageCount;

      });
  }
});


export const packsListReducer = slice.reducer;
export const packsListActions = slice.actions;
export const packsListThunks = { getPacksList, addNewPack, deletePack, editPack };