import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { AppDispatch, RootState } from "app/store";
/**
 Обертка thunkTryCatch для асинхронной функции logic и возвращает либо результат функции, либо отклоненное значение с ошибкой.
 @function thunkTryCatch
 @param {BaseThunkAPI<RootState, any, AppDispatch, unknown>} thunkAPI - Объект thunkAPI, предоставляемый createAsyncThunk.
 @param {Function} logic - Асинхронная функция, которую нужно выполнить в блоке try.
 @returns {Promise<any>} - Промис, который разрешается с результатом функции logic, если выполнение успешно, или отклоняется с ошибкой, которую удалось перехватить.
 */

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>, logic: Function) => {
  const { rejectWithValue } = thunkAPI;
  try {
    return await logic();
  } catch (e) {

    return rejectWithValue(e);
  }
};