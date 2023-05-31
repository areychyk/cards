import { RootState } from "app/store";


export const selectPacksList = (state:RootState) => state.packsList.packsList;
export const selectPage = (state:RootState) => state.packsList.packsList?.page;

