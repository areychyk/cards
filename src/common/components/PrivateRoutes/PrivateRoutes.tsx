import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "app/App.selector";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const PrivateRoutes=()=>{
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const navigate = useNavigate()
  // console.log(isLoggedIn);
  return (
    // isLoggedIn?<Outlet/>: navigate('/login')
    isLoggedIn?<Outlet/>: <Navigate to={'/login'}/>
  )
}