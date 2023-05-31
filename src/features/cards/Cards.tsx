import React, { useEffect } from "react";
import { BackSpace } from "common/components/BackSpace/BackSpace";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "common/hooks";
import { cardsThunks } from "features/cards/cards.slice";
import { selectCards } from "common/selectors/cards.selectors";



export const Cards = () => {
  const dispatch = useAppDispatch();
  const { _id } = useParams();
  // console.log(user_id);


  useEffect(() => {
    dispatch(cardsThunks.getCards({ cardsPack_id: _id }));
  }, []);

  const cards = useSelector(selectCards);
  // const profile = useSelector(selectProfile);

  const navigate = useNavigate();

  const navigateToPacksList = () => {
    navigate("/packsList");
  };


  return (
    <div>
      <BackSpace title={"Back to Packs List"} onClickHandler={navigateToPacksList} />
      {cards && ((_id === cards.packUserId)
          ?
          <>
            {
              cards.cards.length
                ?<div>My cards{cards.cards.length}</div>
                :<div>This pack is empty. Click add new card to fill this pack</div>
            }
          </>
          :
          <>
            {
              cards.cards.length
                ?<div>Friends cards{cards.cards.length}</div>
                :<div>This pack is empty</div>
            }
          </>

      )

      }


    </div>
  );
};

