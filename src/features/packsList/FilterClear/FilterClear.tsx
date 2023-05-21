import React from "react";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import s from './styles.module.css'
import { useAppDispatch } from "common/hooks";
import { packsListThunks } from "features/packsList/packsList.slice";


export const FilterClear = () => {
  const dispatch = useAppDispatch();



  const onHandlerClearFilter=()=>{
    dispatch(packsListThunks.getPacksList({}));

  }
  return (
    <div className={s.filterOffBlock} onClick={onHandlerClearFilter}>
      <FilterAltOffOutlinedIcon fontSize={"large"}/>
    </div>
  );
};

