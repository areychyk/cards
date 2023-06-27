import React from "react";
import { PersonalInformation } from "features/profile/PersonalInformation/PersonalInformation";
import { useNavigate } from "react-router-dom";
import { BackSpace } from "common/components/BackSpace/BackSpace";

export const Profile = () => {
  const navigate = useNavigate();

  const navigateToPacksList = () => {
    navigate("packsList");
  };
  return (
    <div>

      <BackSpace title={"Back to Packs List"} onClickHandler={navigateToPacksList} />
      <PersonalInformation />
    </div>
  );
};

