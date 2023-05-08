import React from "react";
import { CompWrapperForAuth } from "common/components/CompWrapperForAuth/CompWrapperForAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "app/App.selector";
import { selectProfile } from "features/profile/PersonalInformation/PersonalInformation.selector";
import { EditableName } from "features/profile/PersonalInformation/EditableName/EditableName";


export const PersonalInformation = () => {
  const profile = useSelector(selectProfile);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logOutHandler = () => {
    dispatch(authThunks.logout());
    navigate("/login");
  };
  return (
    <CompWrapperForAuth title={"Personal Information"}>
      <div>
        <div>foto</div>
        <div>
          <EditableName value={profile?.name} onChange={()=>{}}/>
        </div>
        <p>{profile?.email}</p>

        <button onClick={logOutHandler}>
          <LogoutIcon />
          Log out
        </button>
      </div>

    </CompWrapperForAuth>
  );
};

