import React, { FC } from "react";
import { ResponseType } from "features/cards/cards.api";
import { TableCards } from "features/cards/TableCards/TableCards";
import s from './styles.module.css'



type Props = {
  cards: ResponseType
}

export const FriendsCards:FC<Props> = ({cards}) => {
  return (
    <div>
      <p className={s.textNamePack}>{cards.packName}</p>
      {
        cards.cards.length
          ? <TableCards cards={cards}/>

          : <div>This pack is empty</div>
      }
    </div>
  );
};

