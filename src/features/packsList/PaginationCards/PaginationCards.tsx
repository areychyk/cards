import React, { ChangeEvent, useState } from "react";
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, Stack } from "@mui/material";
import s from './styles.module.css'
import { useSelector } from "react-redux";
import { selectPacksList } from "features/packsList/packsList.selectors";
import { useAppDispatch } from "common/hooks";
import { ArgPacksListType } from "features/packsList/packsList.api";
import { packsListThunks } from "features/packsList/packsList.slice";
import Box from "@mui/material/Box";

export const PaginationCards = () => {

  const packsList = useSelector(selectPacksList);
  const dispatch = useAppDispatch();

  const [pageCount, setPageCount]=useState<any>(packsList&&packsList.pageCount)


  const handleChangePagination=(event: React.ChangeEvent<unknown>, value: number)=>{

    const dataUrlParam:ArgPacksListType = {
      page:value
    }
    dispatch(packsListThunks.getPacksList(dataUrlParam));
    // console.log(value);
  }

  const handleChangePageCount=(event: SelectChangeEvent)=>{
    setPageCount(event.target.value as string);
    const dataUrlParam:ArgPacksListType = {
      pageCount:+event.target.value
    }
    dispatch(packsListThunks.getPacksList(dataUrlParam));
  }

  return (
    <div className={s.paginationBlock}>

      <Stack spacing={2}>
        <Pagination
          count={packsList?packsList.cardPacksTotalCount:10}
          defaultPage={packsList?packsList.page:1}
          // page={page}
          onChange={handleChangePagination}
          shape="rounded"
          color="primary"/>
        {/*<PaginationCards count={10} variant="outlined" shape="rounded" />*/}
      </Stack>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
          <Select
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

    </div>
  );
};

