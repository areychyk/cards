import React from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import s from './styles.module.css'
export const SearchValue = () => {
  return (
    <div>
      <div>
        <p className={s.text}>Search</p>
      </div>
      <OutlinedInput
        id="search-text"
        startAdornment={<InputAdornment position="start">
          <SearchOutlinedIcon/>
      </InputAdornment>}
        placeholder={'Provide your text'}
        style={{width:'413px', background:'#FFFFFF', border: '1px solid #D9D9D9'}}
      />
    </div>
  );
};

