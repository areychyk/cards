import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import s from "./styles.module.css";
import { useAppDispatch } from "common/hooks";
import { ArgPacksListType } from "features/packsList/packsList.api";
import { packsListThunks } from "features/packsList/packsList.slice";


export const NumberOfCards = () => {

  const dispatch = useAppDispatch();
  // const [value, setValue] = React.useState<number[]>([20, 37]);
  const [minValue, setMinValue] = React.useState<number>(0);
  const [maxValue, setMaxValue] = React.useState<number>(10);

  const dataUrlParam: ArgPacksListType = {
    max: maxValue,
    min: minValue
  };
  useEffect(()=>{
    dispatch(packsListThunks.getPacksList(dataUrlParam));
  },[])

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
          max={50}
          style={{ margin: "5px 25px" }}


        />
        <div className={s.textValueBlock}>
          <p className={s.textValue}>{maxValue}</p>

        </div>
      </Box>
    </div>
  );
};

