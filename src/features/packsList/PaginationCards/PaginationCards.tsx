import React, { useState } from "react";
import { FormControl, MenuItem, Pagination, Select, SelectChangeEvent, Stack } from "@mui/material";
import s from "./styles.module.css";
import { useSelector } from "react-redux";

import { useAppDispatch } from "common/hooks";
import { packsListThunks } from "features/packsList/packsList.slice";
import Box from "@mui/material/Box";
import { selectPacksList } from "common/selectors/packList.selectors";
import { selectSearchParams } from "common/selectors/packList.selectors/packList.selector";

export const PaginationCards = () => {

  const packsList = useSelector(selectPacksList);
  const dispatch = useAppDispatch();
  const searchParams = useSelector(selectSearchParams);
  const [pageCount, setPageCount] = useState<number>(searchParams && searchParams.pageCount);
  const [page, setPage] = useState<number>(searchParams && searchParams.page);

  // useEffect(()=>{
  //   if(packsList){
  //     setPageCount(packsList.pageCount)
  //     setPage(packsList.page)
  //   }
  // },[packsList])

  // const dataUrlParam: ArgPacksListType = {
  //   page: page,
  //   pageCount: pageCount
  // };

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {

    setPage(value);
    const searchParams = {
      page: value,
      pageCount: pageCount
    };
    dispatch(packsListThunks.getPacksList(searchParams));
  };

  const handleChangePageCount = (event: SelectChangeEvent) => {

    setPageCount(+event.target.value);

    const searchParams = {
      page: page,
      pageCount: +event.target.value
    };

    dispatch(packsListThunks.getPacksList(searchParams));

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
      </Stack>

      <div className={s.showCardPageBlock}>
        <p className={s.textSelect}>Show</p>
        <Box sx={{ minWidth: 50, padding: 0, margin: 0 }}>
          <FormControl fullWidth>
            <Select
              style={{ padding: "0px", margin: "0px 5px", minWidth: "10px", height: "24px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pageCount.toString()}
              onChange={handleChangePageCount}
            >
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <p className={s.textSelect}>Cards per Page</p>
      </div>


    </div>
  );
};

