import * as React from "react";
import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ResponseType } from "features/cards/cards.api";
import { GradeRating } from "features/cards/TableCards/GradeRating/GradeRating";
import { useSelector } from "react-redux";
import { selectProfileId } from "common/selectors/auth.selectors/auth.selector";
import { ActionsTableCards } from "features/cards/TableCards/ActionsTableCards/ActionsTableCards";
import { useParams } from "react-router-dom";
import s from './styles.module.css'

type Props = {
  cards: ResponseType
}

export const TableCards:FC<Props> = ({cards}) => {


  const profileId = useSelector(selectProfileId);



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{background:"#EFEFEF"}}>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Answer</TableCell>
            <TableCell align="center">Last Updated</TableCell>
            <TableCell align="center" style={{width:"250px"}}>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.cards.map((card) => {
            const dateString = card.created;
            const date = new Date(dateString);

            return(

                <TableRow
                  key={card._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" align="left" scope="row">{card.question}</TableCell>
                  <TableCell align="left">{card.answer}</TableCell>
                  <TableCell align="center">{date.toLocaleDateString()}</TableCell>
                  <TableCell align="center" >
                    <div className={s.blockRatingAndActions}>
                      <GradeRating cardGrade={card.grade} />
                      {(profileId === cards.packUserId) && <ActionsTableCards idCard={card._id} cardQuestion={card.question} cardAnswer={card.answer} />}
                    </div>


                  </TableCell>

                </TableRow>

              );
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};