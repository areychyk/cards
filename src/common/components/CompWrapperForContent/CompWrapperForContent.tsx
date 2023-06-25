import React, { FC } from "react";
import { FormControl, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import s from './styles.module.css'
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  children: React.ReactNode
  title?:string
  showCloseModel?:boolean
  onClick?:()=>void
}

export const CompWrapperForContent:FC<Props> = ({title, children,showCloseModel=false,onClick}) => {


  return (
    <Grid container justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
      <Paper sx={{ padding: '33px', marginTop: 6 }}>
        <FormControl>
          {showCloseModel && <div className={s.closeModel}>
            <CloseIcon fontSize={"large"} onClick={onClick}/>
          </div>
          }
          {title&&<Typography
            marginBottom={"20px"}
            component="h1"
            sx={{ fontSize: "26px", fontWeight: "600" }}
          >
            {title}
          </Typography>}
        {children}
          </FormControl>
      </Paper>
    </Grid>
  );
};
