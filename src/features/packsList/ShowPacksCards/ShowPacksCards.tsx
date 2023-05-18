import React from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import s from "features/packsList/SearchValue/styles.module.css";

export const ShowPacksCards = () => {
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
        <Button variant={"outlined"} style={{
          padding:'5px 30px',
          color:'#000000',
          border:'1px solid #D9D9D9',
          background: '#FFFFFF'
        }} >My</Button>
        <Button style={{padding:'5px 30px'}}>All</Button>

      </ButtonGroup>

    </div>
  );
};

