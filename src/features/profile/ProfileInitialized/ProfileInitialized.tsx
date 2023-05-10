import React from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "app/App.selector";
import { useNavigate } from "react-router-dom";
import s from './styles.module.css'
import avatarPromo from './../../../common/assets/images/user-shadow.svg'

export const ProfileInitialized = () => {

  const profile = useSelector(selectProfile);

  const navigate = useNavigate();

  const redirectToPersonalInformation = () => {
    navigate("/profile");
  };

  return (
    <div className={s.wrapperBlock}>
      <div className={s.wrapperNickName}>
        <p className={s.nickName} onClick={redirectToPersonalInformation}>{profile?.name}</p>
        <div className={s.line}></div>
      </div>


      <img className={s.avatar} src={profile?.avatar ? profile?.avatar : avatarPromo} alt="#" />

    </div>
  );
};

