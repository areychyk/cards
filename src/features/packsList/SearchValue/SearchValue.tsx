import React, { ChangeEvent, useState } from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import s from "./styles.module.css";
import { useAppDispatch } from "common/hooks";
import { ArgPacksListType } from "features/packsList/packsList.api";
import { packsListThunks } from "features/packsList/packsList.slice";


export const SearchValue = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const dataUrlParam: ArgPacksListType = {
    packName: value
  };
  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // console.log(value);
    setValue(event.currentTarget.value);
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
        style={{ width: "413px", background: "#FFFFFF", border: "1px solid #D9D9D9" , height:"36px"}}
        value={value}
        onChange={onChangeValue}
      />
    </div>
  );
};

