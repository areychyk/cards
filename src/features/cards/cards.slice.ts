import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";

import { ArgCardsType, CardsApi, ResponseType } from "features/cards/cards.api";
import { clearCards } from "common/actions";

const getCards = createAppAsyncThunk<{ cards: ResponseType }, ArgCardsType>("cards/getCards", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await CardsApi.getCards(arg);
    return { cards: res.data };
  });
});


const deleteCard = createAppAsyncThunk<void, string>("cards/deleteCard", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
     await CardsApi.deleteCard(arg);

  });
});


const slice = createSlice({
  name: "cards",
  initialState: {
    cards: null as ResponseType | null,
    searchParams:{
      page:1,
      pageCount:4,
      cardQuestion:''

    }
  },
  reducers: {
    setSearchParamsCardQuestion:(state, action:PayloadAction<string>)=>{
      state.searchParams.cardQuestion=action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCards.fulfilled, (state, action) => {
        state.cards = action.payload.cards;
        state.searchParams.page=action.payload.cards.page
        state.searchParams.pageCount=action.payload.cards.pageCount
      })
      .addCase(clearCards, (state, action) => {

        state.cards = null;

      });
  }
});


export const cardsReducer = slice.reducer;
export const cardsActions = slice.actions;
export const cardsThunks = { getCards, deleteCard};