import React, { FC } from "react";
import { Button } from "common/components/Button/Button";
import { ResponseType } from "features/cards/cards.api";
import s from "./styles.module.css";
import { TableCards } from "features/cards/TableCards/TableCards";
import { SearchCardName } from "features/cards/SearchCardName/SearchCardName";


type Props = {
  cards: ResponseType
}

export const MyCards: FC<Props> = ({ cards }) => {
  return (
    <div>


      {
        cards.cards.length
          ? <div className={s.wrapperCardsComponents}>

            <div className={s.headerCardsPack}>
              <p className={s.textNamePack}>My Pack</p>
              <Button title={"Add new card"} onClickHandler={() => {
              }} />
            </div>
          <SearchCardName/>
            <TableCards cards={cards}/>
          </div>
          : <div className={s.wrapperForPackIsEmpty}>
            <p>This pack is empty. Click add new card to fill this pack</p>
            <Button title={"Add new card"} onClickHandler={() => {
            }} />
          </div>
      }
    </div>
  );
};

