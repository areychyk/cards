import React from "react";
import s from './styles.module.css'
import avatarPromo from "common/assets/images/user-shadow.svg";
import { useSelector } from "react-redux";

import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { selectProfile } from "common/selectors/auth.selectors";


export const EditAvatar = () => {
  const profile = useSelector(selectProfile);
  return (
    <div className={s.wrapperBlock}>
      <img className={s.avatar} src={profile?.avatar ? profile?.avatar : avatarPromo} alt="#" />
      <div className={s.avatarBlock}>
        <CameraAltOutlinedIcon fontSize={"large"}  className={s.CameraAltOutlinedIcon}/>
      </div>

    </div>
  );
};

