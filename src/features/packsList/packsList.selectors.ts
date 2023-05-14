import { RootState } from "app/store";


export const selectPacksList = (state: RootState) => state.packsList.packsList;