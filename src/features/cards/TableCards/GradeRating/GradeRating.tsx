import React from "react";
import { Rating, Stack } from "@mui/material";
import s from './styles.module.css'

export  const GradeRating = () => {
  return (
    <Stack spacing={1} style={{alignItems:"center"}}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />

      {/*<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />*/}
    </Stack>
  );
};

