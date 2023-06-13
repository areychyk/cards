import React, { FC, useState } from "react";
import { FormControl, MenuItem, Pagination, Select, SelectChangeEvent, Stack } from "@mui/material";
import s from "./styles.module.css";
import { useSelector } from "react-redux";

import { useAppDispatch } from "common/hooks";
import Box from "@mui/material/Box";
import { selectCards } from "common/selectors/cards.selectors";
import { selectSearchParamsCards } from "common/selectors/cards.selectors/cards.selector";
import { cardsThunks } from "features/cards/cards.slice";
import { ArgCardsType } from "features/cards/cards.api";


type Props={
  cardsPack_id?:string
}
export const PaginationCards:FC<Props> = ({cardsPack_id}) => {

  const cards = useSelector(selectCards);
  const searchParamsCards = useSelector(selectSearchParamsCards);

  const dispatch = useAppDispatch();

  const [pageCount, setPageCount] = useState<number>(searchParamsCards.pageCount);
  const [page, setPage] = useState<number>(searchParamsCards.page);


  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {

    setPage(value);
    const searchParams:ArgCardsType= {
      cardsPack_id,
      page: value,
      pageCount: pageCount
    };
    dispatch(cardsThunks.getCards(searchParams));
  };

  const handleChangePageCount = (event: SelectChangeEvent) => {

    setPageCount(+event.target.value);

    const searchParams:ArgCardsType = {
      cardsPack_id,
      page: page,
      pageCount: +event.target.value
    };

    dispatch(cardsThunks.getCards(searchParams));

  };

  let portionCount

  if(cards?.cardsTotalCount){
     portionCount = Math.ceil(cards.cardsTotalCount / pageCount)
  }



  return (
    <div className={s.paginationBlock}>

      <Stack spacing={2}>
        <Pagination
          count={portionCount}
          defaultPage={searchParamsCards.page}
          page={searchParamsCards.page}
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
            </Select>
          </FormControl>
        </Box>
        <p className={s.textSelect}>Cards per Page</p>
      </div>


    </div>
  );
};

