import React from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "app/App.selector";

export const ProfileInitialized = () => {

  const profile = useSelector(selectProfile);

  return (
    <div>
      <p>{profile?.name}</p>

    </div>
  );
};

