import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import s from './styles.module.css'
import { Button } from "common/components/Button/Button";
import { FC } from "react";

type Props={

}

export const GradeCard:FC<Props>=({}) =>{
  const [valueGrade, setValueGrade] = React.useState('5');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueGrade((event.target as HTMLInputElement).value);
    console.log(valueGrade);
  };

  const onClickNextCard=()=>{

  }

  return (
    <div className={s.blockGradeCard}>
    <FormControl >
      <FormLabel id="demo-controlled-radio-buttons-group">Rate yourself:</FormLabel  >
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={valueGrade}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="Did not know" />
        <FormControlLabel value="2" control={<Radio />} label="Forgot" />
        <FormControlLabel value="3" control={<Radio />} label="A lot of thought" />
        <FormControlLabel value="4" control={<Radio />} label="Сonfused" />
        <FormControlLabel value="5" control={<Radio />} label="Knew the answer" />
      </RadioGroup>
    </FormControl>

      <Button title={"Next"} onClick={onClickNextCard}/>
    </div>
  );
}