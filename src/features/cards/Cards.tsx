import React, { useEffect } from "react";
import { BackSpace } from "common/components/BackSpace/BackSpace";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPacksList } from "features/packsList/packsList.selectors";
import { useAppDispatch } from "common/hooks";
import { cardsThunks } from "features/cards/cards.slice";

export const Cards = () => {
  const dispatch = useAppDispatch();
  const { _id } = useParams();
  // console.log(user_id);


  useEffect(()=>{
    dispatch(cardsThunks.getCards({cardsPack_id:_id}))
  },[])

  const packsList = useSelector(selectPacksList);
  const navigate = useNavigate();

  const navigateToPacksList = () => {
    navigate("/packsList");
  };


  return (
    <div>
      <BackSpace title={"Back to Packs List"} onClickHandler={navigateToPacksList} />


    </div>
  );
};

