import React from "react";
import { PersonalInformation } from "features/profile/PersonalInformation/PersonalInformation";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import s from './styles.module.css'
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate()

  const navigateToPacksList=()=>{
    navigate('/packsList')
  }
  return (
    <div>
      <div className={s.backspace} onClick={navigateToPacksList}>
        <KeyboardBackspaceIcon/>
        <p className={s.textBackSpace}>Back to Packs List</p>

      </div>

      <PersonalInformation />
    </div>
  );
};

