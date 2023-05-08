import React from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "app/App.selector";
import { useNavigate } from "react-router-dom";

export const ProfileInitialized = () => {

  const profile = useSelector(selectProfile);

  const navigate = useNavigate();

  const redirectToPersonalInformation = () => {
    navigate("/personal_information");
  };

  return (
    <div>
      <p onClick={redirectToPersonalInformation}>{profile?.name}</p>
      {/*<div>{profile?.avatar}</div>*/}
      <div>foto</div>

    </div>
  );
};

