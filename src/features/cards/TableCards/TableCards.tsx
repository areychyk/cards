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

type Props = {
  cards: ResponseType
}

export const TableCards:FC<Props> = ({cards}) => {




  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{background:"#EFEFEF"}}>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Answer</TableCell>
            <TableCell align="center">Last Updated</TableCell>
            <TableCell align="center">Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.cards.map((card) => (
              <TableRow
                key={card._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="left" scope="row" >{card.question}</TableCell>
                <TableCell align="left">{card.answer}</TableCell>
                <TableCell align="center">{card.created}</TableCell>
                <TableCell align="center">{card.grade}</TableCell>

              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};