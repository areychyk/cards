import React, { FC } from "react";
import s from "./styles.module.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";

import { packsListThunks } from "features/packsList/packsList.slice";
import { useAppDispatch } from "common/hooks";
import { useNavigate } from "react-router-dom";
import { selectProfile } from "common/selectors/auth.selectors";

type Props = {
  idUserCards: string
  idCard:string
}


export const ActionsTablePacksCards: FC<Props> = ({ idUserCards,idCard }) => {
  const dispatch = useAppDispatch();
  const profile = useSelector(selectProfile);




  const onClickEditPack=()=>{

  }


  const onClickDeletePack = () => {
    dispatch(packsListThunks.deletePack({id: idCard } ))
      .then(()=>{
      dispatch(packsListThunks.getPacksList({user_id:idUserCards}));

    })

  };

  return (
    <div className={s.actionsCompWrapper}>
      <SchoolOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} aria-disabled={true}/>

      {profile && profile._id === idUserCards && <>
        <BorderColorOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} onClick={onClickEditPack}/>
        <DeleteOutlineOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} onClick={onClickDeletePack} />
      </>
      }


    </div>
  );
};

