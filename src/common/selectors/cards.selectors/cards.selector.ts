import { RootState } from "app/store";


export const selectCards = (state:RootState) => state.cards.cards;
export const selectSearchParamsCards = (state:RootState) => state.cards.searchParams;


