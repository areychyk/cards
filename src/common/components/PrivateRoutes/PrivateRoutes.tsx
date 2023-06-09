import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";
import { selectIsLoggedIn } from "common/selectors/auth.selectors";

export const PrivateRoutes=()=>{
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    isLoggedIn?<Outlet/>: <Navigate to={'/login'}/>
  )
}