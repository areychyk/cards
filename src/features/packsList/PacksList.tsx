import React, { useEffect } from "react";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useAppDispatch } from "common/hooks";
import { useSelector } from "react-redux";
import { selectPacksList } from "features/packsList/packsList.selectors";
import { TablePacksList } from "features/packsList/TablePacksList/TablePacksList";
import { SearchValue } from "features/packsList/SearchValue/SearchValue";
import { ShowPacksCards } from "features/packsList/ShowPacksCards/ShowPacksCards";
import s from './styles.module.css'
import { NumberOfCards } from "features/packsList/NumberOfCards/NumberOfCards";
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined';

export const PacksList = () => {
  const dispatch = useAppDispatch();
  const packsList = useSelector(selectPacksList);
  useEffect(() => {
    dispatch(packsListThunks.getPacksList({}));
  }, []);
  return (
    <div >

<div className={s.blockFilter}>
  <SearchValue/>

  <ShowPacksCards/>

  <NumberOfCards/>

  <div>
    <FilterAltOffOutlinedIcon fontSize={"large"}/>
  </div>
</div>


      <TablePacksList />



    </div>
  );
};

