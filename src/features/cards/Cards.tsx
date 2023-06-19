import React, { useEffect } from "react";
import { BackSpace } from "common/components/BackSpace/BackSpace";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "common/hooks";
import { cardsThunks } from "features/cards/cards.slice";
import { selectCards } from "common/selectors/cards.selectors";
import { clearCards } from "common/actions";
import { selectProfileId } from "common/selectors/auth.selectors/auth.selector";
import { MyCards } from "features/cards/MyCards/MyCards";
import { FriendsCards } from "features/cards/FriendsCards/FriendsCards";
import { PaginationCards } from "features/cards/PaginationCards/PaginationCards";


export const Cards = () => {
  const dispatch = useAppDispatch();
  const { packId } = useParams();


  useEffect(() => {
    dispatch(cardsThunks.getCards({ cardsPack_id: packId }));
    return () => {
      dispatch(clearCards());
    };
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
          <MyCards cards={cards} />
          :
          <FriendsCards cards={cards} />

      )

      }

      {!!cards?.cards.length&&<PaginationCards cardsPack_id={packId} />}

    </div>
  );
};

