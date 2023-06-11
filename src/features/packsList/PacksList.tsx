import React, { useEffect, useState } from "react";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useActions, useAppDispatch } from "common/hooks";
import { TablePacksList } from "features/packsList/TablePacksList/TablePacksList";
import { SearchValue } from "features/packsList/SearchValue/SearchValue";
import { ShowPacksCards } from "features/packsList/ShowPacksCards/ShowPacksCards";
import s from "./styles.module.css";
import { NumberOfCards } from "features/packsList/NumberOfCards/NumberOfCards";
import { FilterClear } from "features/packsList/FilterClear/FilterClear";
import { PaginationCards } from "features/packsList/PaginationCards/PaginationCards";
import { AddNewPack } from "features/packsList/AddNewPack/AddNewPack";
import { Button } from "common/components/Button/Button";

export const PacksList = () => {
  const [showModelAddNewPack, setShowModelAddNewPack] = useState<boolean>(false);

  const {getPacksList} = useActions(packsListThunks)

  useEffect(() => {
   getPacksList({})
  }, []);

  const onAddNewPack = () => {
    setShowModelAddNewPack(true);
  };

  return (
    <div>
      {showModelAddNewPack && <AddNewPack
        setShowModelAddNewPack={setShowModelAddNewPack}

      />}
      <div className={showModelAddNewPack ? s.showModelWindow : ""}>
        <div className={s.wrapperTitleAndButton}>
          <h2 className={s.title}>Packs list</h2>
          <Button title={"Add new pack"} onClickHandler={onAddNewPack} />
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

        <PaginationCards />


      </div>
    </div>
  );
};

