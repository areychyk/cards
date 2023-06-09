import React from "react";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import s from "./styles.module.css";
import { useAppDispatch } from "common/hooks";
import { ArgPacksListType } from "features/packsList/packsList.api";
import {  packsListThunks } from "features/packsList/packsList.slice";
import { useSelector } from "react-redux";
import { selectPacksList, selectSearchParams } from "common/selectors/packList.selectors/packList.selector";


export const NumberOfCards = () => {
  const searchParams = useSelector(selectSearchParams);
  const packsList = useSelector(selectPacksList);
  const dispatch = useAppDispatch();

  const [minValue, setMinValue] = React.useState<number>(searchParams&&searchParams.min);
  const [maxValue, setMaxValue] = React.useState<number>(searchParams&&searchParams.max);

  const dataUrlParam: ArgPacksListType = {
    max: maxValue,
    min: minValue
  };


  const handleChange = (event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setMinValue(value);
    } else {
      setMinValue(value[0]);
      setMaxValue(value[1]);

    }

  };



  const onChangeMinMaxValue = () => {
    dispatch(packsListThunks.getPacksList(dataUrlParam));
  };

  return (<div>
      <div>
        <p className={s.text}>Number of cards</p>
      </div>
      <Box className={s.blockSlider} sx={{ width: 350 }}>


        <div className={s.textValueBlock}>
          <p className={s.textValue}>{minValue}</p>

        </div>

        <Slider
          onChangeCommitted={onChangeMinMaxValue}
          value={[minValue, maxValue]}
          onChange={handleChange}
          max={packsList?packsList.maxCardsCount:50}
          style={{ margin: "5px 25px" }}


        />
        <div className={s.textValueBlock}>
          <p className={s.textValue}>{maxValue}</p>

        </div>
      </Box>
    </div>
  );
};

