import * as React from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { CircularProgress, Container, LinearProgress, Stack } from "@mui/material";
import { useActions } from "common/hooks";
import { authThunks } from "features/auth/auth.slice";
import { useSelector } from "react-redux";

import { ProfileInitialized } from "features/profile/ProfileInitialized/ProfileInitialized";
import { selectIsAppInitialized, selectIsLoading } from "common/selectors/app.selectors";
import { selectIsLoggedIn } from "common/selectors/auth.selectors";
import { selectProfileId } from "common/selectors/auth.selectors/auth.selector";
import { selectPacksList } from "common/selectors/packList.selectors";
import { selectPage } from "common/selectors/packList.selectors/packList.selector";
import { Preloader } from "common/components/Preloader/Preloader";


export default function App() {
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const isAppInitialized = useSelector(selectIsAppInitialized);
  const { initializeApp } = useActions(authThunks);


  useEffect(() => {
    initializeApp({});
  }, []);

  const onClickSignIn = () => {
    navigate("/login");
  };




  return (
    // <div className="App" style={{ background: "#F9F9FA",height:`${page===4 && "100vh"}`}}>
    <div className="App" style={{ background: "#F9F9FA",height:"100vh"}}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color={"default"} style={{ height: "60px", padding:"0 136px" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              IT-INCUBATOR
            </Typography>
            {!isLoggedIn && <Button color="inherit" onClick={onClickSignIn}>Sign in</Button>}
            {isLoggedIn && <ProfileInitialized />}
          </Toolbar>
        </AppBar>
        {isLoading && <LinearProgress color={"inherit"} style={{ height: "5px" }} />}
        <Container fixed >

          {
            !isAppInitialized
            ?
            <Preloader/>
            :
            <Outlet />
          }



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