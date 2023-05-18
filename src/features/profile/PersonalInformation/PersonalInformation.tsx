import React from "react";
import { CompWrapperForContent } from "common/components/CompWrapperForContent/CompWrapperForContent";
import LogoutIcon from "@mui/icons-material/Logout";
import { authThunks } from "features/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProfile } from "features/profile/PersonalInformation/PersonalInformation.selector";
import { EditableName } from "features/profile/PersonalInformation/EditableName/EditableName";
import { ArgEditProfileType } from "features/auth/auth.api";
import s from "./styles.module.css";
import { EditAvatar } from "features/profile/PersonalInformation/EditAvatar/EditAvatar";
import { useAppDispatch } from "common/hooks";


export const PersonalInformation = () => {
  const profile = useSelector(selectProfile);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const logOutHandler = () => {
    dispatch(authThunks.logout());
    navigate("/login");
  };


  const editNickNameHandler = (nickName: string) => {

    const payload: ArgEditProfileType = {
      name: nickName,
      avatar: ""
    };
    dispatch(authThunks.editProfile(payload));
  };
  return (
    <CompWrapperForContent title={"Personal Information"}>

      <div>

        <EditAvatar/>

        <div>
          <EditableName value={profile?.name} onChange={editNickNameHandler} />
        </div>
        <p>{profile?.email}</p>
        <div className={s.wrapperButton}>
          <button onClick={logOutHandler} className={s.button}>
            <LogoutIcon style={{marginRight:'10px'}} />
            Log out
          </button>
        </div>
      </div>

    </CompWrapperForContent>
  );
};

