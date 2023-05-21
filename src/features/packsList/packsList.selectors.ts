import { RootState } from "app/store";


export const selectPacksList = (state: RootState) => state.packsList.packsList;
export const selectProfileId = (state: RootState) => state.auth.profile?._id;