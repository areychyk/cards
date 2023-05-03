import { Counter } from "features/counter/Counter";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { appActions } from "app/app.slice";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



// function App() {
//   const isLoading = useAppSelector((state) => state.app.isLoading);
//
//   const dispatch = useAppDispatch();
//
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(appActions.setIsLoading({ isLoading: false }));
//     }, 3000);
//   }, []);
//
//   return (
//     <div className="App">
//       {isLoading && <h1>Loader...</h1>}
//       <Counter />
//     </div>
//   );
// }
//
// export default App;