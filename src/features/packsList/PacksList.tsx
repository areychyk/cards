import React, { useEffect } from "react";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useAppDispatch } from "common/hooks";
import { useSelector } from "react-redux";
import { selectPacksList } from "features/packsList/packsList.selectors";
import { TablePacksList } from "features/packsList/TablePacksList/TablePacksList";
import { SearchValue } from "features/packsList/SearchValue/SearchValue";
import { ShowPacksCards } from "features/packsList/ShowPacksCards/ShowPacksCards";
import s from "./styles.module.css";
import { NumberOfCards } from "features/packsList/NumberOfCards/NumberOfCards";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import { FilterClear } from "features/packsList/FilterClear/FilterClear";
import { PaginationCards } from "features/packsList/PaginationCards/PaginationCards";

export const PacksList = () => {
  const dispatch = useAppDispatch();
  const packsList = useSelector(selectPacksList);
  useEffect(() => {
    dispatch(packsListThunks.getPacksList({}));
  }, []);

  const onAddNewPack=()=>{

  }
  return (
    <div>

      <div className={s.wrapperTitleAndButton}>
        <h2 className={s.title}>Packs list</h2>
        <button className={s.button} onClick={onAddNewPack}>
          Add new pack
        </button>
      </div>

      <div className={s.blockFilter}>
        <SearchValue />

        <ShowPacksCards />

        <NumberOfCards />

        <FilterClear />
      </div>

      <div className={s.tablePacksListBlock}>
        <TablePacksList />
      </div>

      <PaginationCards/>



    </div>
  );
};

