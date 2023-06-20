import React, { FC } from "react";
import { Button } from "common/components/Button/Button";
import { ResponseType } from "features/cards/cards.api";
import s from "./styles.module.css";
import { TableCards } from "features/cards/TableCards/TableCards";
import { SearchCardName } from "features/cards/SearchCardName/SearchCardName";
import { AddNewCards } from "features/cards/AddNewCards/AddNewCards";


type Props = {
  cards: ResponseType
}

export const MyCards: FC<Props> = ({ cards }) => {

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => setOpenModal(true);




  return (
    <div>
      {openModal && <AddNewCards setOpenModal={setOpenModal} openModal={openModal} />}

      {
        cards.cards.length
          ? <div className={s.wrapperCardsComponents}>

            <div className={s.headerCardsPack}>
              <p className={s.textNamePack}>{cards.packName}</p>
              <Button title={"Add new card"} onClickHandler={handleOpen} />

            </div>
          <SearchCardName/>
            <TableCards cards={cards}/>
          </div>
          : <div className={s.wrapperForPackIsEmpty}>
            <p>This pack is empty. Click add new card to fill this pack</p>
            <Button title={"Add new card"} onClickHandler={handleOpen} />
          </div>
      }
    </div>
  );
};

