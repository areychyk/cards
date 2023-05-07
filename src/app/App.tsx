import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useActions } from "common/hooks";
import { authThunks } from "features/auth/auth.slice";
import { useEffect } from "react";


export default function App() {
  const navigate = useNavigate();


  const { initializeApp  } = useActions(authThunks);

  useEffect(() => {
    initializeApp({});
  }, []);

  const onClickSignIn = () => {
    navigate("/login");
  };
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              IT-INCUBATOR
            </Typography>
            <Button color="inherit" onClick={onClickSignIn}>Sign in</Button>
          </Toolbar>
        </AppBar>
        <Container fixed>
          <Outlet></Outlet>
        </Container>
      </Box>
    </div>
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