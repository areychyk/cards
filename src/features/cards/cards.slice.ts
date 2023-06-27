import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";

import {
  ArgCardsType,
  ArgCreateCardType,
  ArgGradeCardType,
  ArgUpdateCardType,
  CardsApi,
  ResponseType, ResponseTypeUpdatedGrade
} from "features/cards/cards.api";
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

const createCard = createAppAsyncThunk<void, ArgCreateCardType>("cards/createCard", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await CardsApi.createCards(arg);
  });
});

const updateCard = createAppAsyncThunk<void, ArgUpdateCardType>("cards/createCard", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await CardsApi.updateCards(arg);
  });
});

const gradeCard = createAppAsyncThunk<ResponseTypeUpdatedGrade, ArgGradeCardType>("cards/gradeCard", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res =  await CardsApi.gradeCards(arg);
    return res.data
  });
});


const slice = createSlice({
  name: "cards",
  initialState: {
    cards: null as ResponseType | null,
    searchParams: {
      page: 1,
      pageCount: 4,
      cardQuestion: ""

    }
  },
  reducers: {
    setSearchParamsCardQuestion: (state, action: PayloadAction<string>) => {
      state.searchParams.cardQuestion = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(gradeCard.fulfilled, (state, action) => {
          const updatedGrade = action.payload.updatedGrade
          if ( state.cards) {
             const updatedCards = state.cards.cards.map((card) => {
               if (card._id === updatedGrade.card_id) {
                 return {...card, grade: updatedGrade.grade, shots: updatedGrade.shots}
               }else {
                 return  card
               }
             })

              state.cards.cards = updatedCards
              return state

          }

      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.cards = action.payload.cards;
        state.searchParams.page = action.payload.cards.page;
        state.searchParams.pageCount = action.payload.cards.pageCount;
      })
      .addCase(clearCards, (state, action) => {

        state.cards = null;

      });
  }
});


export const cardsReducer = slice.reducer;
export const cardsActions = slice.actions;
export const cardsThunks = { getCards, deleteCard, createCard, updateCard ,gradeCard};