import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { selectPacksList } from "features/packsList/packsList.selectors";



export const TablePacksList = () => {

  const packsList = useSelector(selectPacksList);





  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{background:"#EFEFEF"}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Cards</TableCell>
            <TableCell align="center">Last Updated</TableCell>
            <TableCell align="center">Created by</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {packsList&&packsList.cardPacks.map((pack) => (
            <TableRow
              key={pack._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pack.name}
              </TableCell>
              <TableCell align="center">{pack.cardsCount}</TableCell>
              <TableCell align="center">{pack.updated}</TableCell>
              <TableCell align="center">{pack.user_name}</TableCell>
              <TableCell align="center">{1}</TableCell>
            </TableRow>
          )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};