import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";
import { Login } from "features/auth/login/Login";
import { Container } from "@mui/material";


export default function App() {
  return (
    <div className="App">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IT-INCUBATOR
          </Typography>
          <Button color="inherit">Sign in</Button>
        </Toolbar>
      </AppBar>
      <Container fixed>
        {/*<CompWrapperForAuth title={'Sign in'} children={<Login />}>*/}

          <Routes>
            <Route path={"/login"} element={<Login />} />
          </Routes>

        {/*</CompWrapperForAuth>*/}


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