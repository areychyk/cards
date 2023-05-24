import React, { ChangeEvent, useState } from "react";
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, Stack } from "@mui/material";
import s from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectPacksList } from "features/packsList/packsList.selectors";
import { useAppDispatch } from "common/hooks";
import { ArgPacksListType } from "features/packsList/packsList.api";
import { packsListThunks } from "features/packsList/packsList.slice";
import Box from "@mui/material/Box";

export const PaginationCards = () => {

  const packsList = useSelector(selectPacksList);
  const dispatch = useAppDispatch();

  const [pageCount, setPageCount] = useState<any>(packsList ? packsList.pageCount : "4");
  const [page, setPage] = useState<number>(packsList ? packsList.page : 1);

  const dataUrlParam: ArgPacksListType = {
    page: page,
    pageCount: pageCount
  };

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {

    setPage(value);
    dispatch(packsListThunks.getPacksList(dataUrlParam));


    console.log("page:" + page);
    console.log("value:" + value);
  };

  const handleChangePageCount = (event: SelectChangeEvent) => {
    setPageCount(event.target.value as string);

    dispatch(packsListThunks.getPacksList(dataUrlParam));


    console.log("valuePageCount:" + event.target.value as string);
    console.log("pageCount:" + pageCount);
  };

  return (
    <div className={s.paginationBlock}>

      <Stack spacing={2}>
        <Pagination
          count={packsList ? packsList.cardPacksTotalCount : 10}
          defaultPage={packsList ? packsList.page : 1}
          page={page}
          onChange={handleChangePagination}
          shape="rounded"
          color="primary" />
        {/*<PaginationCards count={10} variant="outlined" shape="rounded" />*/}
      </Stack>

      <div className={s.showCardPageBlock}>
        <p>Show</p>
        <Box sx={{ minWidth: 120 }} >
          <FormControl fullWidth>
            {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
            <Select
              style={{padding:"0px", margin:"5px",minWidth:"10px",height:"24px"}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pageCount}
              onChange={handleChangePageCount}
            >
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <p>Cards per Page</p>
      </div>


    </div>
  );
};

