import React from "react";
import { CircularProgress, Stack } from "@mui/material";

export const Preloader = () => {
  return (
    <div>
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row" style={{ position:"absolute", left:"50%", top:"50%" }}>
        <CircularProgress color="inherit"  size={'100px'}/>
      </Stack>
    </div>
  );
};

