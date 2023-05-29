import React from "react";
import { BackSpace } from "common/components/BackSpace/BackSpace";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPacksList } from "features/packsList/packsList.selectors";

export const Cards = () => {
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

