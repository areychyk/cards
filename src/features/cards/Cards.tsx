import React, { useEffect } from "react";
import { BackSpace } from "common/components/BackSpace/BackSpace";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "common/hooks";
import { cardsActions, cardsThunks } from "features/cards/cards.slice";
import { selectCards } from "common/selectors/cards.selectors";
import { Button } from "common/components/Button/Button";
import { clearCards } from "common/actions";


export const Cards = () => {
  const dispatch = useAppDispatch();
  const {  card_id } = useParams();
  // console.log(user_id);


  useEffect(() => {
    dispatch(cardsThunks.getCards({ cardsPack_id: card_id }));
    return ()=>{
      dispatch(clearCards())
      console.log('comp dead');
    }
  }, []);

  const cards = useSelector(selectCards);
  // const profile = useSelector(selectProfile);

  const navigate = useNavigate();

  const navigateToPacksList = () => {
    navigate("/packsList");
  };

  // console.log(card_id);
  // console.log(cards&&cards.packUserId);
  return (
    <div>
      <BackSpace title={"Back to Packs List"} onClickHandler={navigateToPacksList} />
      {cards && ((card_id === cards.packUserId)

          ?
          <div>
            my
            {/*{*/}
            {/*  cards.cards.length*/}
            {/*    ? <div>My cards{cards.cards.length}</div>*/}
            {/*    : <div>*/}
            {/*      <p>This pack is empty. Click add new card to fill this pack</p>*/}
            {/*      <Button title={"Add new card"} onClickHandler={() => {*/}
            {/*      }} />*/}
            {/*    </div>*/}
            {/*}*/}
          </div>
          :
          <div>
            fr
            {/*{*/}
            {/*  cards.cards.length*/}
            {/*    ? <div>Friends cards{cards.cards.length}</div>*/}
            {/*    : <div>This pack is empty</div>*/}
            {/*}*/}
          </div>

      )

      }


    </div>
  );
};
