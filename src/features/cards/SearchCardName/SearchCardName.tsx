import React, { ChangeEvent, useEffect } from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import s from "./styles.module.css";
import { useAppDispatch } from "common/hooks";
import { ArgCardsType } from "features/cards/cards.api";
import { useParams } from "react-router-dom";
import { cardsActions, cardsThunks } from "features/cards/cards.slice";
import { useSelector } from "react-redux";
import { selectSearchParamsCards } from "common/selectors/cards.selectors/cards.selector";


export const SearchCardName = () => {
  const { packId } = useParams();
  const searchParamsCards = useSelector(selectSearchParamsCards);
  const dispatch = useAppDispatch();


  const dataUrlParam: ArgCardsType = {
    cardsPack_id: packId,
    cardQuestion: searchParamsCards.cardQuestion
  };

  useEffect(() => {
    dispatch(cardsThunks.getCards(dataUrlParam));
  }, [searchParamsCards]);

  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(cardsActions.setSearchParamsCardQuestion(event.currentTarget.value));
  };

  return (
    <div className={s.searchValueBlock}>
      <div>
        <p className={s.text}>Search</p>
      </div>
      <OutlinedInput
        id="search-text"
        startAdornment={<InputAdornment position="start">
          <SearchOutlinedIcon />
        </InputAdornment>}
        placeholder={"Provide your text"}
        style={{
          width: "100%",
          background: "#FFFFFF",
          border: "1px solid #D9D9D9",
          height: "36px",
          marginBottom: "24px"
        }}
        value={searchParamsCards.cardQuestion}
        onChange={onChangeValue}
      />
    </div>
  );
};

