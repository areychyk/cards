import React, { useState } from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import s from "features/packsList/SearchPackName/styles.module.css";
import { useAppDispatch } from "common/hooks";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useSelector } from "react-redux";
import { ArgPacksListType } from "features/packsList/packsList.api";
import { selectProfileId } from "common/selectors/auth.selectors/auth.selector";

export const ShowPacksCards = () => {
  const dispatch = useAppDispatch();
  const [showAllPacks, setShowAllPacks] = useState<boolean>(true);
  const profileId = useSelector(selectProfileId);

  const dataUrlParam:ArgPacksListType = {
    user_id:profileId
  }
  const onShowMyPacks = () => {
    setShowAllPacks(false);
    dispatch(packsListThunks.getPacksList(dataUrlParam));
  };
  const onShowAllPacks = () => {
    setShowAllPacks(true);
    dispatch(packsListThunks.getPacksList({}));
  };

  const styleForMyPacks = {
    // boxSizing: "border-box",

    padding: "5px 30px",
    color: "#000000",
    border: "1px solid #D9D9D9",
    borderRadius: "2px",
    background: showAllPacks ? "#FFFFFF" : "#366EFF"
  };
  const styleForAllPacks = {
    padding: "5px 30px",
    borderRadius: "0px 2px 2px 0px",
    color: "#000000",
    border: "1px solid #D9D9D9",
    // boxSizing:"border-box",
    background: !showAllPacks ? "#FFFFFF" : "#366EFF"
  };
  const variant = showAllPacks ? "outlined" : "contained";
  // console.log(showAllPacks);

  return (
    <div>

      <div>
        <p className={s.text}>Show packs cards</p>
      </div>

      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button variant={variant}
                onClick={onShowMyPacks}
                style={styleForMyPacks}>My</Button>
        <Button
          variant={variant}
          onClick={onShowAllPacks}
          style={styleForAllPacks}>All</Button>

      </ButtonGroup>

    </div>
  );
};

