import React, { useEffect } from "react";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useActions } from "common/hooks";
import { TablePacksList } from "features/packsList/TablePacksList/TablePacksList";
import { SearchPackName } from "features/packsList/SearchPackName/SearchPackName";
import { ShowPacksCards } from "features/packsList/ShowPacksCards/ShowPacksCards";
import s from "./styles.module.css";
import { NumberOfCards } from "features/packsList/NumberOfCards/NumberOfCards";
import { FilterClear } from "features/packsList/FilterClear/FilterClear";
import { PaginationPacks } from "features/packsList/PaginationPacks/PaginationPacks";
import { AddNewPack } from "features/packsList/AddNewPack/AddNewPack";
import { Button } from "common/components/Button/Button";

export const PacksList = () => {
  // const [showModelAddNewPack, setShowModelAddNewPack] = useState<boolean>(false);

  const [openModal, setOpenModal] = React.useState(false);

  const { getPacksList } = useActions(packsListThunks);

  useEffect(() => {
    getPacksList({});
  }, []);


  const handleOpen = () => setOpenModal(true);
  return (
    <div>

      <div className={s.wrapperTitleAndButton}>
        <h2 className={s.title}>Packs list</h2>

        <Button title={"Add new pack"} onClickHandler={handleOpen} />
        {openModal && <AddNewPack setOpenModal={setOpenModal} openModal={openModal} />}
      </div>

      <div className={s.blockFilter}>
        <SearchPackName />

        <ShowPacksCards />

        <NumberOfCards />

        <FilterClear />
      </div>

      <div className={s.tablePacksListBlock}>
        <TablePacksList />
      </div>

      <PaginationPacks />


    </div>
  );
};

