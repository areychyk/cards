import React, { ChangeEvent, useEffect } from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import s from "./styles.module.css";
import { useAppDispatch } from "common/hooks";
import { ArgPacksListType } from "features/packsList/packsList.api";
import { packsListActions, packsListThunks } from "features/packsList/packsList.slice";
import { selectSearchParams } from "common/selectors/packList.selectors/packList.selector";
import { useSelector } from "react-redux";


export const SearchPackName = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSelector(selectSearchParams);


  const dataUrlParam: ArgPacksListType = {
    packName: searchParams.packName
  };

  // useEffect(() => {
  //   dispatch(packsListThunks.getPacksList(dataUrlParam));
  // }, [searchParams.packName]);

  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(packsListActions.setSearchParamsPackName(event.currentTarget.value));
    dispatch(packsListThunks.getPacksList(dataUrlParam));
  };

  return (
    <div className={s.searchValueBlock}>
      <div>
        <p className={s.text}>Search</p>
      </div>
      <OutlinedInput
        id="search-text"
        startAdornment={<InputAdornment position="start">
          <SearchOutlinedIcon />
        </InputAdornment>}
        placeholder={"Provide your text"}
        style={{ width: "413px", background: "#FFFFFF", border: "1px solid #D9D9D9", height: "36px" }}
        value={searchParams.packName}
        onChange={onChangeValue}
      />
    </div>
  );
};

