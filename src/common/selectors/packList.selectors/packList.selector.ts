import { RootState } from "app/store";


export const selectPacksList = (state:RootState) => state.packsList.packsList;
export const selectPage = (state:RootState) => state.packsList.packsList?.page;
export const selectSearchParams = (state:RootState) => state.packsList.searchParams;


