import React, { FC } from "react";
import { Rating, Stack } from "@mui/material";
import s from './styles.module.css'


type Props={
  cardGrade:number
}
export  const GradeRating:FC<Props> = ({cardGrade}) => {
  return (
    <Stack spacing={1} style={{alignItems:"center"}}>
      <Rating name="half-rating" defaultValue={cardGrade} precision={0.1} readOnly />

      {/*<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />*/}
    </Stack>
  );
};

