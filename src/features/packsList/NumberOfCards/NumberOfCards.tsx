import React from "react";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import s from './styles.module.css'


export const NumberOfCards = () => {
  // const [value, setValue] = React.useState<number[]>([20, 37]);
  const [minValue, setMinValue] = React.useState<number>(5);
  const [maxValue, setMaxValue] = React.useState<number>(30);



  const handleChange = (event: Event, value: number | number[]) => {
    if(typeof value === "number"){
      setMinValue(value)
    }else{
      setMinValue(value[0])
      setMaxValue(value[1])

    }
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

        value={[minValue,maxValue]}
        onChange={handleChange}
        max={50}
        style={{margin:'5px 25px'}}


      />
      <div className={s.textValueBlock}>
        <p className={s.textValue}>{maxValue}</p>

      </div>
    </Box>
    </div>
  );
};

