import React from "react";
import { FormControl, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import s from './styles.module.css'

type Props = {
  children: React.ReactNode
  title?:string
}

export const CompWrapperForContent = ({title, children}:Props) => {


  return (
    <Grid container justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
      <Paper sx={{ padding: '33px', marginTop: 6 }}>
        <FormControl>
        <Typography
          marginBottom={'20px'}
          component="h1"
          sx={{ fontSize: '26px', fontWeight: '600' }}
        >
          {title}
        </Typography>
        {children}
          </FormControl>
      </Paper>
    </Grid>
  );
};
