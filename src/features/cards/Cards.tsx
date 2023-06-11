import React, { useEffect } from "react";
import { BackSpace } from "common/components/BackSpace/BackSpace";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "common/hooks";
import { cardsThunks } from "features/cards/cards.slice";
import { selectCards } from "common/selectors/cards.selectors";
import { clearCards } from "common/actions";
import { selectProfileId } from "common/selectors/auth.selectors/auth.selector";
import { Button } from "common/components/Button/Button";


export const Cards = () => {
  const dispatch = useAppDispatch();
  const {packId} = useParams();



  useEffect(() => {
    dispatch(cardsThunks.getCards({ cardsPack_id: packId }));
    return ()=>{
      dispatch(clearCards())
    }
  }, []);

  const cards = useSelector(selectCards);
  const profileId = useSelector(selectProfileId);

  const navigate = useNavigate();

  const navigateToPacksList = () => {
    navigate("/packsList");
  };



  return (
    <div>
      <BackSpace title={"Back to Packs List"} onClickHandler={navigateToPacksList} />
      {cards && ((profileId === cards.packUserId)

          ?
          <div>
            my cards
            {
              cards.cards.length
                ? <div>My cards{cards.cards.length}</div>
                : <div>
                  <p>This pack is empty. Click add new card to fill this pack</p>
                  <Button title={"Add new card"} onClickHandler={() => {
                  }} />
                </div>
            }
          </div>
          :
          <div>
            friend cards
            {
              cards.cards.length
                ? <div>Friends cards{cards.cards.length}</div>
                : <div>This pack is empty</div>
            }
          </div>

      )

      }


    </div>
  );
};

